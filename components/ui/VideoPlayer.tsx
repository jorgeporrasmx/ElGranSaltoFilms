'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface VideoPlayerProps {
  videoUrl: string
  thumbnail?: string
  title: string
  aspectRatio?: '16/9' | '4/3' | '1/1'
}

export default function VideoPlayer({
  videoUrl,
  thumbnail,
  title,
  aspectRatio = '16/9',
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Convert YouTube/Vimeo URLs to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop()
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`
    }
    return url
  }

  if (isPlaying) {
    return (
      <div className="relative w-full" style={{ aspectRatio }}>
        <iframe
          src={getEmbedUrl(videoUrl)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full rounded-lg"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="group relative w-full overflow-hidden rounded-lg"
      style={{ aspectRatio }}
      aria-label={`Reproducir video: ${title}`}
    >
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-background-secondary" />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity group-hover:bg-black/60">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-secondary md:h-20 md:w-20">
          <Play className="ml-1 h-8 w-8 fill-white text-white md:h-10 md:w-10" />
        </div>
      </div>
    </button>
  )
}
