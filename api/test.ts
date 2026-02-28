import { VercelRequest, VercelResponse } from '@vercel/node'

type TestBody = { value?: unknown }

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, route: 'test' })
  }

  if (req.method === 'POST') {
    const body: TestBody = (req.body ?? {}) as TestBody
    return res.status(200).json({ echoed: body.value ?? null })
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: 'Method not allowed' })
}
