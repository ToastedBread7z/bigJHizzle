# Jhizzle App

## Project structure (quick map)

- [app/JhizzleApp.tsx](app/JhizzleApp.tsx): main client container (state + wiring)
- [app/jhizzle/pages/](app/jhizzle/pages/): page sections (Home, Lore, Memes, etc.)
- [app/jhizzle/components/](app/jhizzle/components/): reusable UI pieces
- [app/jhizzle/content.tsx](app/jhizzle/content.tsx): all copy/data

## Deploy to GitHub Pages

This repo is configured to deploy via GitHub Actions.

### One-time setup (first publish)

1. Enable GitHub Pages (GitHub UI)
	- Repo → **Settings → Pages**
	- Under **Build and deployment** → **Source**: choose **GitHub Actions**

2. Trigger a deploy
	- Push any commit to `main` or `master`
	  - The workflow should run and build an output: [./.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

### Confirm it deployed

1. Repo → **Actions** tab
	- Click the latest “Deploy to GitHub Pages” run
	- Make sure it finishes green (Build + Deploy)

2. Repo → **Settings → Pages**
	- You should see “Your site is live at …”

After the workflow completes, the site will be available

### If it doesn’t show up

- Make sure you pushed to `main` or `master` (the workflow only runs on those).
- Make sure **Settings → Pages → Source** is set to **GitHub Actions**.
- Check **Actions** for errors (missing `package-lock.json`, Node version issues, etc.).

### Notes

- GitHub Pages is static hosting only.
- The build is a static export (`out/` is generated in CI). Do not commit `out/`.
- This is configured for a “project page” URL (`/<repo>/`). If you are deploying to a user/org site repo named `<owner>.github.io`, you’ll want `basePath` to be empty in [next.config.ts](next.config.ts).

