import handler from '../api/test'

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

test('GET /api/test returns ok', () => {
  const req: any = { method: 'GET' }
  const res = new MockResponse() as any
  handler(req, res)
  expect(res.statusCode).toBe(200)
  expect(res.body).toEqual({ ok: true, route: 'test' })
})

test('POST /api/test echoes value', () => {
  const req: any = { method: 'POST', body: { value: 123 } }
  const res = new MockResponse() as any
  handler(req, res)
  expect(res.statusCode).toBe(200)
  expect(res.body).toEqual({ echoed: 123 })
})
