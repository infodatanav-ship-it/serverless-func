import { VercelRequest, VercelResponse } from '@vercel/node'

type HelloBody = { name?: string }

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'ok' })
  }

  if (req.method === 'POST') {
    const body: HelloBody = (req.body ?? {}) as HelloBody
    const name = typeof body.name === 'string' && body.name.trim().length > 0 ? body.name.trim() : null

    if (!name) {
      return res.status(400).json({ error: 'Invalid payload: "name" is required' })
    }

    return res.status(200).json({ message: `Hello, ${name}!` })
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: 'Method not allowed' })
}
