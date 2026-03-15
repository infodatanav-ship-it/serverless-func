import express from 'express'
import handler from './api/hello'

const app = express()
app.use(express.json())

app.get('/api/hello', (req, res) => handler(req as any, res as any))
app.post('/api/hello', (req, res) => handler(req as any, res as any))

const port = Number(process.env.PORT || 3000)
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Dev server listening on http://localhost:${port}`)
})

export default app
