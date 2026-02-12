# natashajyw.github.io

A React + TypeScript portfolio built with Vite.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy with GitHub Actions (auto-deploy on push)

This project now uses a GitHub Actions workflow at `.github/workflows/deploy.yml`.

- Every push to `main` automatically builds and deploys to GitHub Pages.
- You can also run the deployment manually from the Actions tab (`workflow_dispatch`).

> In repository settings, set **Pages** to **Build and deployment → Source: GitHub Actions**.

## Included sections

- About Me
- Contact Me (email, phone, LinkedIn, GitHub)
- My Projects
- Education and Relevant Coursework
