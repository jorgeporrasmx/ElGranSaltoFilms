import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.enum([
    'Documental Completo',
    'Cobertura de Evento',
    'Video Marketing',
    'Otro',
  ]),
  sport: z.string().min(2),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // TODO: Send email using your preferred email service
    // For now, we'll just log it and return success
    console.log('Contact form submission:', validatedData)

    // In production, you would send an email here:
    // await sendEmail({
    //   to: 'hola@elgransalto.com',
    //   subject: `Nuevo contacto: ${validatedData.projectType}`,
    //   body: `
    //     Nombre: ${validatedData.name}
    //     Email: ${validatedData.email}
    //     Teléfono: ${validatedData.phone || 'No proporcionado'}
    //     Tipo de Proyecto: ${validatedData.projectType}
    //     Deporte: ${validatedData.sport}
    //     Mensaje: ${validatedData.message}
    //   `
    // })

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
