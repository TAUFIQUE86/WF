# WhiteFoam

Static React and Vite site for White Foam consumer products, dealership inquiries, careers, and OEM partnerships.

## Local Development

**Requirements:** Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Run the project checks before deployment:

```sh
npm run lint
npm run build
```

## Netlify Deployment

Connect this repository to Netlify. The included `netlify.toml` defines the build command, publish directory, Node version, SPA fallback, and response headers.

Careers and OEM forms use Netlify Forms. After the first successful deploy, confirm both forms appear in the Netlify Forms dashboard, configure email notifications for new submissions, and test each form on the deployed URL. Form submissions are intentionally disabled on the local Vite development server.

Dealership and sample-kit inquiries open prefilled WhatsApp drafts; visitors must press Send in WhatsApp to submit them.

Add the production domain to canonical and social metadata, and publish a sitemap before enabling production search indexing. Review the privacy notice, retention period, Netlify notification recipients, and public business claims with the business owner before launch.
