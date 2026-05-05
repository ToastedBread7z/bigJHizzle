# Jhizzle App

A small Next.js app built as a static site and deployed to GitHub Pages.

## Prereqs

- Node.js 20+ (LTS recommended)
- npm (comes with Node)

## Setup (local dev)

From the repo root:

- Install dependencies: `npm ci`
- Start dev server: `npm run dev`
- Open: `http://localhost:3000`

If it says the port is in use, stop the other server or run `npm run dev -- --port 3001`.

## Editing site text/content

All display text + structured content is centralized in:

- [app/jhizzle/content.tsx](app/jhizzle/content.tsx)

This is the main file your friend should edit to rewrite copy without touching UI logic.

## Project structure (quick map)

- [app/JhizzleApp.tsx](app/JhizzleApp.tsx): main client container (state + wiring)
- [app/jhizzle/pages/](app/jhizzle/pages/): page sections (Home, Lore, Memes, etc.)
- [app/jhizzle/components/](app/jhizzle/components/): reusable UI pieces
- [app/jhizzle/content.tsx](app/jhizzle/content.tsx): all copy/data

## Deploy to GitHub Pages

This repo is configured to deploy via GitHub Actions.

### One-time setup (first publish)

1. Create a repo on GitHub
	- GitHub → **New repository**
	- Name it whatever you want (example: `jhizzle-app`)
	- Keep it **Public** (recommended for Pages) or Private (Pages can still work depending on your plan)

2. Push this project to that repo
	- In a terminal from this project folder:
	  - Add the remote: `git remote add origin <your-repo-url>`
	  - Push your branch: `git push -u origin master`
		 - If your branch is `main`, use `git push -u origin main`

3. Enable GitHub Pages (GitHub UI)
	- Repo → **Settings → Pages**
	- Under **Build and deployment** → **Source**: choose **GitHub Actions**

4. Trigger a deploy
	- Push any commit to `main` or `master`
	  - The workflow file is [./.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

### Confirm it deployed

1. Repo → **Actions** tab
	- Click the latest “Deploy to GitHub Pages” run
	- Make sure it finishes green (Build + Deploy)

2. Repo → **Settings → Pages**
	- You should see “Your site is live at …”

After the workflow completes, the site will be available at:

- `https://<owner>.github.io/<repo>/`

### If it doesn’t show up

- Make sure you pushed to `main` or `master` (the workflow only runs on those).
- Make sure **Settings → Pages → Source** is set to **GitHub Actions**.
- Check **Actions** for errors (missing `package-lock.json`, Node version issues, etc.).

### Notes

- GitHub Pages is static hosting only.
- The build is a static export (`out/` is generated in CI). Do not commit `out/`.
- This is configured for a “project page” URL (`/<repo>/`). If you are deploying to a user/org site repo named `<owner>.github.io`, you’ll want `basePath` to be empty in [next.config.ts](next.config.ts).

