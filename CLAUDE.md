# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

ICVV is an Expo / React Native app (Expo Router, TypeScript) for a church organization ("Igreja..."). It has a public-facing marketing/member area behind auth (live TV, events, member card, prayer requests, kids check-in, news, etc). All user-facing strings are in Portuguese (pt-BR) — keep new copy in Portuguese to match the existing UI.

## Commands

- `npm run start` — start Expo dev server with dev client (`expo start --dev-client`)
- `npm run ios` — build and run on iOS simulator (`expo run:ios`)
- `npm run android` — build and run on Android emulator (`expo run:android`)
- `npm run web` — run in browser (`expo start --web`)

There is no configured lint, test, or typecheck script in package.json. To typecheck manually, run `npx tsc --noEmit`. Check with the user before adding test/lint tooling since none exists yet.

## Environment

Config is driven by `.env` (see `.env.example` for required keys: `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_WHATSAPP_NUMBER`, `EXPO_PUBLIC_WHATSAPP_EMAIL`, `EXPO_PUBLIC_ADDRESS`, `EXPO_PUBLIC_MAPS_URL`, `EXPO_PUBLIC_FALLBACK_AVATAR`). `app.config.ts` reads these into `expo.extra` at build time via `dotenv/config`, and `src/constants/env.ts` reads them back out through `expo-constants` at runtime. Any new env var must be added in all three places: `.env.example`, `app.config.ts` (`extra`), and `src/constants/env.ts`.

## Architecture

**Routing (`src/app`)** uses Expo Router file-based routing with route groups:

- `(auth)` — login/register/reset-password, stacked, no header (`src/app/(auth)/_layout.tsx`)
- `(protected)/(tabs)` — the 5 main bottom tabs (home, live, support, news, members), each with a shared `AppHeader`
- `(protected)/(screens)` — secondary stacked screens pushed from tabs (prayer, bible, member-card, events, testimonials, kids, club); the screen title shown in `AppHeader` is looked up by route name from a `TITLES` map in `src/app/(protected)/(screens)/_layout.tsx` — add new screens there too.

**Auth** (`src/context/AuthContext.tsx`) is currently a mock/local-only implementation: `login`/`signup`/`resetPassword` just set local state and don't call `authService` in `src/services/auth.ts`. There is no token persistence or protected-route redirect wired up yet — the `(protected)` group's `_layout.tsx` doesn't currently gate on `user`. Be aware of this gap when working on auth-related features; don't assume real authentication is enforced.

**Data flow layering** — three consistent layers used across every feature:

1. `src/services/*.ts` — thin wrapper per resource around `src/services/api.ts` (`api.get/post/put/delete`), returning typed DTOs (e.g. `eventsService`, `kids.ts`, `prayer.ts`, `members.ts`, `news.ts`).
2. `src/features/**/use*.ts` — screen-specific hooks that own local state and call the services layer (e.g. `useEvents`, `useLogin`, `useKids`). Auth-related hooks live in `src/features/auth`, other screen hooks live in `src/features/protected/screens`.
3. `src/app/**` screens — thin, present-only components that destructure a single feature hook and render `src/components/*`.

When adding a new screen/feature, follow this same three-layer split rather than fetching or holding state directly in the screen component.

**`src/services/api.ts`** is a minimal fetch wrapper (`BASE_URL` from `env.apiUrl`, JSON in/out, throws on non-2xx). It does not currently attach an auth token header — if wiring up real auth, this is the place to add it.

**Components (`src/components/<Name>/`)** each follow `index.tsx` + `styles.ts` (StyleSheet in a separate file, default-exported, imported as `styles`). Colors always come from `src/constants/colors.ts` (a flat token object — `primary`, `background`, `textPrimary`, plus a `dark*` set used for the digital member card and dark banners) — never hardcode hex values in components.

**Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`). Use it instead of relative `../../` imports.

## Styling conventions

- All colors come from `src/constants/colors.ts` — never hardcode hex values in components
- Component styles live in a separate `styles.ts` file alongside `index.tsx`, using `StyleSheet.create`
- Icons use `MaterialIcons` from `@expo/vector-icons` exclusively — no other icon libraries
- The app uses a light theme only — no dark mode support planned for now
- `src/constants/env.ts` centralizes all env vars — never read `process.env` inside app code

## Component structure

Components in `src/components/<Name>/` follow:

- `index.tsx` — component logic and JSX only
- `styles.ts` — StyleSheet exported as default, imported as `styles`

Feature-specific components live in `src/features/<feature>/components/` and are not shared globally.

## Known gaps / TODO

- `AuthContext` is mock-only — no real Firebase or backend auth wired up yet
- No token persistence (AsyncStorage) — user state resets on app reload
- `(protected)` routes have no auth gate — any user can access them
- Chat in live screen uses polling (5s interval) — no WebSocket yet
- Backend (`env.apiUrl`) does not exist yet — all service calls will fail until implemented
- `src/app/(protected)/(screens)/_layout.tsx` has a `TITLES` map — new screens must be added there

## What NOT to do

- Do not hardcode colors — use `colors.*` from `src/constants/colors.ts`
- Do not fetch data or hold state directly in screen components — use the hook layer
- Do not add new env vars without updating `.env.example`, `app.config.ts` and `src/constants/env.ts`
- Do not use `process.env` inside app code — use `env.*` from `src/constants/env.ts`
- Do not create new icon libraries — use `MaterialIcons` only
