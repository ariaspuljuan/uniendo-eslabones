<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Uniendo Eslabones

Read `docs/PROJECT_CONTEXT.md` before substantial work. It is the durable handoff
for the product, architecture, deployment, current state, and pending roadmap.

## Project rules

- This is a Spanish-language platform for Colombia's natural-rubber value chain.
- Preserve correct Spanish spelling and accents in all user-facing copy.
- Keep the established visual language: professional, industrial and sustainable,
  responsive, accessible, and consistent in light and dark mode.
- Treat mobile as a first-class app-like experience; verify desktop and mobile UI.
- Main implementation lives in `src/`; root `app/` mostly exposes Next.js routes and
  API handlers. Inspect both before changing routing.
- Content sources are `src/data/products.ts`, `src/data/organizations.ts`,
  `src/data/news.ts`, and `src/data/indicatorMocks.ts`.
- Do not expose secrets or commit `.env.local`. Document variable names only.
- Preserve user changes in a dirty worktree and avoid unrelated refactors.
- Before committing, run `npm run lint` and `npm run build`.
- Keep each commit focused and use clear Spanish commit messages.
- Push to `main` only when the user requests publication. Vercel deploys `main`
  automatically.
- Do not delete content or images merely because they appear unused without first
  confirming references and user intent.

## Working style

- Inspect existing patterns before implementing.
- For requested changes, implement, validate, and report the exact files changed.
- For broad architecture, SEO, or cleanup work, divide the work into controlled
  phases and do not mix phases in one commit.
- Never treat the admin route as sufficient security. Authentication and server-side
  authorization must protect administrative data and mutations.
