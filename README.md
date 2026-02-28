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

Deployment protection & bypass tokens

If your deployment is protected (requires Vercel authentication), choose one of these options:

- Public access: disable Deployment Protection in the Project Settings (Vercel dashboard -> Project -> Settings -> Security -> Deployment Protection).
- Authenticated CLI: log in with the Vercel CLI and use `vercel curl` (recommended):

```bash
npx vercel login
npx vercel curl https://serverless-func-9n0gqx0ih-bpaulses-projects.vercel.app/api/hello
```

- Bypass token (automation):
	1. In the Vercel dashboard go to Project -> Settings -> Security -> Deployment Protection and create a Bypass Token.
	2. Use the bypass token in a request URL to set the bypass cookie, for example:

```bash
curl -sS "https://serverless-func-9n0gqx0ih-bpaulses-projects.vercel.app/api/hello?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=YOUR_BYPASS_TOKEN"
```

	Notes:
	- Treat the bypass token as a secret; do not commit it to source control.
	- Rotate the token periodically and delete it when no longer needed.
	- For CI systems, store the token in the CI secret store and pass it as an environment variable into curl commands.

