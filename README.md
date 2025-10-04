# Nuxt + Payload Monorepo Template

Production-ready starter for teams building a Nuxt 4 frontend and a Payload CMS backend in a single PNPM/Turbo monorepo. The template emphasises strong defaults—strict TypeScript, shared domain packages, flat ESLint configs, and CI-ready workflows—so professional teams can ship quickly without sacrificing maintainability.

## Tech highlights

- **Frontend:** Nuxt 4 with layered architecture (`base`, `cms`, `settings`), typed pages, i18n, schema.org integration, TailwindCSS 4 via Vite plugin, Pinia, VueUse, TanStack Query, and Wisemen core components/auth.
- **CMS / API:** Payload 3 running on Next 15 (app router) with PostgreSQL adapter, Lexical editor, multi-tenant plugin, auto-generated TypeScript types, and standalone output for container deployments.
- **Shared code:** Domain-driven packages in `packages/` for contracts, models, utilities, and generated Payload types.
- **Tooling:** PNPM workspaces with catalogs, Turbo tasks, ESLint flat configs, Vitest, Vue TSC, and GitHub Actions for pull-request verification.

## Repository layout

| Path | Description |
| --- | --- |
| `apps/nuxt` | Public-facing Nuxt application composed from layered modules. |
| `apps/payload` | Payload CMS + Next.js server providing admin UI and APIs. |
| `packages/*` | Workspace libraries (contracts, models, constants, utils, generated Payload types). |
| `pnpm-workspace.yaml` | Declares workspace packages and dependency catalogs for consistent versions. |
| `turbo.json` | Orchestrates shared tasks (dev, build, lint, typecheck) across the monorepo. |
| `.github/workflows` | CI pipelines for lint/build/test; extend as needed for deployments. |

Inside `apps/nuxt/layers` you’ll find composable features organised by concern (`base`, `cms`, `settings`)—treat each layer as a Nuxt module to keep feature code cohesive and discoverable.

## Prerequisites

- Node.js **LTS (≥20.x)** – matches the CI workflow (`lts/*`). Consider using `asdf` or `fnm` to pin versions per project.
- PNPM **10.x** – automatically managed when using `corepack enable pnpm`.
- PostgreSQL database – local or containerised; required for Payload (`POSTGRES_URI`).
- Optional: Docker (if you plan to containerise the apps) and AWS credentials for S3 storage when enabling Payload’s S3 adapter.

## Getting started

1. **Install dependencies**
	```bash
	pnpm install
	```

2. **Seed environment variables**
	- Duplicate `.env.example` files where provided (e.g. `apps/nuxt/.env.example`, `apps/payload/.env.example`).
	- Update secrets: `POSTGRES_URI`, `PAYLOAD_SECRET`, `NUXT_PUBLIC_*`, authentication endpoints, etc.
	- Keep secrets out of VCS; rely on `.env.local` for developer overrides.

3. **Run development servers**
	- Start both apps via Turbo (recommended when working on the full stack):
	  ```bash
	  pnpm dev
	  ```
	- Or run individually:
	  ```bash
	  pnpm -F nuxt-app dev        # Nuxt frontend on http://localhost:3000
	  pnpm -F payload-app dev     # Payload CMS on http://localhost:5173
	  ```

4. **Verify tooling**
	```bash
	pnpm lint
	pnpm typecheck
	pnpm test
	```

## Useful scripts

| Command | Runs | Notes |
| --- | --- | --- |
| `pnpm dev` | `turbo run dev` | Runs all app-level dev servers concurrently (persistent, no caching). |
| `pnpm build` | `pnpm -r build` | Builds every workspace package; Nuxt output lands in `apps/nuxt/.output`, Payload in `apps/payload/.next/standalone`. |
| `pnpm lint` | `turbo lint` | ESLint against all workspaces (flat config with AntFu base). |
| `pnpm typecheck` | `turbo typecheck` | Vue TSC for Nuxt, `tsc --noEmit` for packages, and Payload type generation. |
| `pnpm test` | `vitest --run` | Default test runner (extend with project-specific suites). |
| `pnpm -F payload-app generate:types` | `payload generate:types` | Regenerates Payload types into `packages/payload-types`. |
| `pnpm -F payload-app mc` | `payload migrate:create && payload migrate && pnpm generate:types` | Helper for creating+applying migrations and syncing types. |

When using Turbo locally, take advantage of `--filter` (`pnpm turbo run build --filter nuxt-app`) to scope tasks to the packages you’re actively touching.

## Development best practices

- **Type-first-development:** Keep strict TypeScript enabled; treat type errors as blockers. Regenerate Payload types after schema changes to propagate updates across the monorepo.
- **Layered Nuxt architecture:** Encapsulate features in `layers/` modules. Each layer should own its components, composables, and assets to avoid cross-layer coupling. Export shared tokens through `packages/` instead of deep imports.
- **ESLint & formatting:** Rely on the workspace-wide flat config. Run `pnpm lint:fix` for auto-fixes and keep Prettier out of the toolchain unless there’s a compelling team reason—Tailwind and AntFu configs already cover formatting.
- **State & data fetching:** Prefer Pinia stores for app-level state, TanStack Query for server data, and Nuxt server routes/composables for SSR-friendly APIs. Keep direct Payload client usage within dedicated services.
- **Styling:** TailwindCSS 4 is provided through the Vite plugin. Use `tailwind-variants` & `tailwind-merge` to compose design tokens, and disable utility classes only when components require bespoke CSS.
- **i18n:** Localise page content with `@nuxtjs/i18n` (typed messages). Ensure translations live in `apps/nuxt/i18n/locales` and update default locales when expanding markets.
- **Testing:** Co-locate unit tests next to implementation files using `.spec.ts` / `.test.ts`. For Nuxt components, use `@nuxt/test-utils` with Vitest. Add smoke tests for critical workflows (auth, forms, critical pages).
- **Domain packages:** Use `packages/contract` for RPC contracts, `packages/models` for shared domain types, and `packages/utils` for cross-cutting utilities. Keep packages framework-agnostic to maximise reuse.
- **Git hygiene:** Branch from `main` using `feature/<context>` naming, squash merge via PR, and keep PRs focused. Ensure `pnpm lint` and `pnpm typecheck` are green before requesting reviews—the CI workflow enforces the same checks.

## Environment configuration

### Nuxt (`apps/nuxt`)
- `app/.env.example` documents required runtime config keys; map them to `runtimeConfig` in Nuxt when adding new public/private values.
- Remember to update `nuxt.config.ts` when adding public env vars or integrating third-party services.
- For internationalisation, update `i18n.locales` and synchronise with CMS locales.

### Payload (`apps/payload`)
- `.env.example` should define: `PAYLOAD_SECRET`, `POSTGRES_URI`, storage credentials, OAuth config, etc.
- The Next.js app runs on port `5173` by default; align CORS entries in `payload.config.ts` with any additional frontends.
- Configure database migrations via `apps/payload/src/migrations`; run `pnpm -F payload-app mc` after edits.
- The configuration writes generated types to `packages/payload-types/src/payload-types.d.ts`; include this package wherever Payload types are needed.

### Shared secrets
- Use `.env` files per workspace plus a root `.env` when necessary. Never commit secrets; rely on CI/CD secret stores for deployments.
- When targeting multiple environments (development, staging, production), keep `.env.<env>` files and document required variables in each project README or this document.

## Testing strategy

- **Unit tests:** run with `pnpm test`. Add `vitest.config.ts` per workspace where custom aliases or transforms are required.
- **Component tests (Nuxt):** leverage `@nuxt/test-utils` with Vitest. Mock Payload APIs through `packages/contract` interfaces to keep tests framework-agnostic.
- **Integration tests (Payload):** script common flows (auth, mutations) using `payload test` or wrappers like Playwright if you need UI coverage.
- **Type-level tests:** incorporate `expectTypeOf`/`tsd` style checks in packages to guard contract changes.

## Build & deployment

- **Nuxt:** `pnpm -F nuxt-app build` outputs to `.output/` (Nitro server). For zero-downtime deploys, containerise using the provided `Dockerfile` or deploy to platforms supporting Nitro.
- **Payload:** `pnpm -F payload-app build` produces a standalone Next.js server in `.next/standalone`. Ensure environment variables are set in the target platform and that the PostgreSQL database is reachable.
- **Docker:** Root-level `Dockerfile` can be adapted to build multi-stage images. Consider splitting runtime images per app for faster deploys.
- **Static assets:** Store public assets under `apps/nuxt/public` and `apps/payload/public`. For shared media, configure Payload’s S3 adapter and expose URLs via the CMS.

## CI/CD

- `.github/workflows/pullrequest-check.yml` runs lint → build → test on pull requests. Update caches and secrets (`NODE_VERSION`, package registries) to match your environment.
- Add deployment workflows (e.g. staged releases, preview builds) by extending the existing pipeline or introducing environment-specific YAML files at the repository root.
- Protect `main` with required status checks so local best practices mirror CI expectations.

## Maintenance guidance

- **Dependency hygiene:** Use PNPM catalogs to pin ecosystem packages. Periodically run `pnpm up --latest --interactive` per workspace and verify via `pnpm lint`, `pnpm typecheck`, `pnpm test`.
- **Turbo cache:** When cache behaviour changes, reset via `pnpm dlx turbo prune --force` or clear `.turbo`. The workspace already ignores generated directories (`.turbo`, `.output`, `.nuxt`, `.next`).
- **Code generation:** Regenerate Payload types and other derived artifacts whenever schema or contract code changes before committing.
- **Security:** Run `pnpm audit` (or GitHub’s Dependabot) on a schedule, and update the CORS / headers configuration in `next.config.mjs` and `payload.config.ts` to align with production hosts.

## Troubleshooting

- **Type inference errors referencing external packages:** ensure you import or annotate types explicitly (e.g. reuse `Awaited<typeof config>` to avoid deep type references).
- **Payload failing to start due to missing migrations:** run `pnpm -F payload-app mc` to apply migrations, or point `POSTGRES_URI` to a clean database when bootstrapping.
- **Nuxt missing components/composables:** verify the corresponding layer is registered and exports the resource; turn on Nuxt DevTools (`localhost:3000/_nuxt/devtools`) for module diagnostics.
- **Turbo task not running:** confirm the script exists in the target `package.json`, then run `pnpm turbo run <task> --filter <package>` with the correct package name (`nuxt-app`, `payload-app`, or `@repo/<pkg>`).

---

This template is intentionally opinionated. Adapt the conventions to your team, but retain the guardrails—strict typing, shared domains, automated checks, and layered architecture—to keep your codebase healthy as it scales.