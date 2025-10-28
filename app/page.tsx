import HeroSection from '@/components/home/HeroSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import ServicesPreview from '@/components/home/ServicesPreview'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  )
}
