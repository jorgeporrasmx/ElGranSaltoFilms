import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema (matches the form schema)
const mondayFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.enum(['Documental', 'Evento', 'Marketing', 'Otro']),
  sport: z.string().min(2),
  budget: z.enum(['< $50K', '$50K-100K', '$100K-250K', '> $250K', 'Por definir']),
  tentativeDate: z.string().optional(),
  location: z.enum(['CDMX', 'Querétaro', 'Chihuahua', 'Monterrey', 'Guadalajara', 'Cancún', 'Otra']),
  message: z.string().min(20),
})

type MondayFormData = z.infer<typeof mondayFormSchema>

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json()
    const validatedData = mondayFormSchema.parse(body)

    // Check if Monday.com is configured
    const apiKey = process.env.MONDAY_API_KEY
    const boardId = process.env.MONDAY_BOARD_ID

    if (!apiKey || !boardId) {
      console.log('Monday.com not configured. Form data received:', validatedData)

      // Return success even if Monday.com is not configured
      // This allows testing without Monday.com setup
      return NextResponse.json({
        message: 'Formulario recibido. Monday.com no está configurado aún.',
        data: validatedData,
        configured: false,
      })
    }

    // Prepare column values for Monday.com
    const columnValues = prepareColumnValues(validatedData)

    // Create Monday.com GraphQL mutation
    const mutation = `
      mutation CreateItem($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          group_id: "nuevo",
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
          name
          created_at
        }
      }
    `

    // Send request to Monday.com API
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          boardId,
          itemName: `Proyecto: ${validatedData.name} - ${validatedData.projectType}`,
          columnValues: JSON.stringify(columnValues),
        },
      }),
    })

    const result = await response.json()

    // Check for errors in Monday.com response
    if (result.errors) {
      console.error('Monday.com API errors:', result.errors)
      throw new Error('Error al crear el item en Monday.com')
    }

    // Check for API errors
    if (!response.ok) {
      console.error('Monday.com API error:', result)
      throw new Error('Error al comunicarse con Monday.com')
    }

    // Success response
    return NextResponse.json({
      message: 'Solicitud enviada exitosamente',
      data: result.data?.create_item,
      configured: true,
    })
  } catch (error) {
    // Validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Datos del formulario inválidos',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    // General error
    console.error('Error in Monday.com API route:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Error interno del servidor',
      },
      { status: 500 }
    )
  }
}

/**
 * Prepare column values for Monday.com board
 * This function maps form data to Monday.com column structure
 *
 * IMPORTANT: Column IDs must match your Monday.com board configuration
 * You may need to adjust these column IDs after setting up your board
 */
function prepareColumnValues(data: MondayFormData): Record<string, any> {
  const columnValues: Record<string, any> = {}

  // Email column
  if (data.email) {
    columnValues.email = {
      email: data.email,
      text: data.email,
    }
  }

  // Phone column
  if (data.phone) {
    columnValues.phone = {
      phone: data.phone,
      countryShortName: 'MX',
    }
  }

  // Company column (text)
  if (data.company) {
    columnValues.empresa = data.company
  }

  // Project Type column (dropdown)
  columnValues.tipo = {
    labels: [data.projectType],
  }

  // Sport column (text)
  columnValues.deporte = data.sport

  // Budget column (dropdown)
  columnValues.presupuesto = {
    labels: [data.budget],
  }

  // Location column (dropdown)
  columnValues.ciudad = {
    labels: [data.location],
  }

  // Tentative date column
  if (data.tentativeDate) {
    columnValues.fecha_inicio = {
      date: data.tentativeDate,
    }
  }

  // Message/Description column (long text)
  columnValues.descripcion = {
    text: data.message,
  }

  return columnValues
}

/**
 * GET endpoint to test Monday.com configuration
 */
export async function GET() {
  const apiKey = process.env.MONDAY_API_KEY
  const boardId = process.env.MONDAY_BOARD_ID

  return NextResponse.json({
    configured: !!(apiKey && boardId),
    message: apiKey && boardId
      ? 'Monday.com está configurado correctamente'
      : 'Monday.com no está configurado. Agrega MONDAY_API_KEY y MONDAY_BOARD_ID a tus variables de entorno.',
  })
}
