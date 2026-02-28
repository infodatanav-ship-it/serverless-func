import handler from '../api/hello'

class MockResponse {
  statusCode = 200
  body: any = null
  headers: Record<string, string> = {}

  status(code: number) {
    this.statusCode = code
    return this
  }

  json(payload: any) {
    this.body = payload
    return this
  }

  setHeader(k: string, v: string) {
    this.headers[k] = v
  }
}

test('GET /api/hello returns health', () => {
  const req: any = { method: 'GET' }
  const res = new MockResponse() as any
  handler(req, res)
  expect(res.statusCode).toBe(200)
  expect(res.body).toEqual({ status: 'ok' })
})

test('POST /api/hello returns greeting for valid name', () => {
  const req: any = { method: 'POST', body: { name: 'Alice' } }
  const res = new MockResponse() as any
  handler(req, res)
  expect(res.statusCode).toBe(200)
  expect(res.body).toEqual({ message: 'Hello, Alice!' })
})

test('POST /api/hello returns 400 for invalid payload', () => {
  const req: any = { method: 'POST', body: { name: '' } }
  const res = new MockResponse() as any
  handler(req, res)
  expect(res.statusCode).toBe(400)
  expect(res.body).toHaveProperty('error')
})
