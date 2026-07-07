import { baseUrl } from './api'

const uri = '/leads'
const service = { name: 'site.psiccamilamelissa' }

interface EmailBody {
  name: string
  email: string
  message: string
  service?: { name: string }
}

const fetchData = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {throw new Error(`Erro: ${response.statusText}`)}
    const result = await response.json()
    return result.data
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Unknown error')
    throw error
  }
}

const sendEmail = (body: EmailBody) => {
  body.service = service

  return fetchData(`${baseUrl}${uri}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

export default sendEmail
