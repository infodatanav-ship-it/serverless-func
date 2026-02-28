# Vercel Serverless API (TypeScript)

Minimal example of a Vercel serverless API using TypeScript.

Endpoints
- `GET /api/hello` — health check
- `POST /api/hello` — JSON body `{ "name": string }` responds with greeting

Quick start

```bash
# install deps
npm install

# run local dev (requires Vercel CLI)
npx vercel dev

# run tests
npm test

# build
npm run build
```

Deploy

Connect this repository in the Vercel dashboard or run `npx vercel` to deploy.

Deployment

- Production URL: https://serverless-func-9n0gqx0ih-bpaulses-projects.vercel.app
- Alias URL: https://serverless-func-five.vercel.app

Sanity check

You can verify the health endpoint with:

```bash
curl -sS https://serverless-func-9n0gqx0ih-bpaulses-projects.vercel.app/api/hello
```

