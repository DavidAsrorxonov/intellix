<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the Intellix TanStack Start application. Here's a summary of all changes made:

**Package installed:** `posthog-js` — added to project dependencies.

**Environment variables:** `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` written to `.env`.

**`vite.config.ts`:** Added a `/ingest` reverse proxy to route PostHog requests through the Vite dev server, improving reliability and avoiding CORS issues.

**`src/routes/__root.tsx`:** Wrapped the entire app with `PostHogProvider` (from `posthog-js/react`) inside the root shell component. This enables automatic pageview tracking, session replay, exception capture, and makes the PostHog client available to all child routes via the `usePostHog()` hook.

**`src/routes/index.tsx`:** Added `usePostHog()` and wired `browse_registry_clicked` and `publish_skill_clicked` capture calls to the hero CTA links.

**`src/components/skill-card.tsx`:** Added `usePostHog()` and wired `skill_install_command_copied` (with skill title, category, and install command properties) to the copy button handler, and `skill_card_opened` (with skill title and category) to the Open link.

**`src/components/navbar.tsx`:** Added `usePostHog()` and wired `sign_in_clicked` to the Sign In navbar link.

## Events

| Event | Description | File |
|---|---|---|
| `browse_registry_clicked` | User clicks the "Browse Registry" CTA on the homepage hero | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the "Publish Skill" CTA on the homepage hero | `src/routes/index.tsx` |
| `skill_install_command_copied` | User copies the install command from a skill card | `src/components/skill-card.tsx` |
| `skill_card_opened` | User clicks to open a skill card detail view | `src/components/skill-card.tsx` |
| `sign_in_clicked` | User clicks the Sign In button in the navbar | `src/components/navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/361004/dashboard/1485333
- **Registry CTA Clicks Over Time:** https://us.posthog.com/project/361004/insights/JvsjWzuD
- **Sign In to Registry Funnel:** https://us.posthog.com/project/361004/insights/3JBAVPUc
- **Top Skills by Install Command Copies:** https://us.posthog.com/project/361004/insights/3clhReje
- **Skill Card Opens by Category:** https://us.posthog.com/project/361004/insights/YgCgCqKX
- **User Engagement Retention:** https://us.posthog.com/project/361004/insights/mAsUHOyz

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-tanstack-start/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
