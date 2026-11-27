# alexismetwalli.com

Personal freelance website for [Alexis Metwalli](https://alexismetwalli.com), presenting data
platform engineering services, selected client work, and open-source projects.

## Stack

- Astro with strict TypeScript
- Static site generation
- Plain CSS and locally bundled fonts
- Astro sitemap integration
- Prettier and Astro type checking

The production output is a fully static site in the dist directory. It has no server runtime,
backend, database, CMS, analytics, or client-side framework.

## Local development

Prerequisite: Node.js 24 LTS.

    npm install
    npm run dev

The development server is available at the local address printed by Astro.

## Quality checks

    npm run format:check
    npm run check
    npm run build

To inspect the production build locally:

    npm run preview

## Project structure

    src/
    ├── components/  Page sections and reusable cards
    ├── data/        Typed profile, service, project, work, and timeline content
    ├── layouts/     Shared document metadata and structured data
    ├── pages/       Static routes
    └── styles/      Design tokens, typography, and global styles

## Deployment

The site is served by Cloudflare Workers as static assets (see wrangler.jsonc; no Worker script).
Cloudflare Workers Builds is connected to this GitHub repository and deploys every push to main:

- Build command: npm run build
- Deploy command: npx wrangler deploy

Pull requests get preview builds. To deploy manually from a machine logged in with
`npx wrangler login`:

    npm run deploy
