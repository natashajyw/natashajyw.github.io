# natashajyw.github.io

A React + TypeScript portfolio that is compatible with direct GitHub Pages static hosting.

## Why this works on GitHub Pages now

GitHub Pages serves static files directly and does not automatically run a Vite build step. This site now renders directly in the browser using React and TypeScript (transpiled in-browser by Babel), so the homepage appears without a local/node build pipeline.

## Customize sections

Edit `index.html` to update:

- About Me
- Contact Me (email, phone, LinkedIn, GitHub, Discord)
- My Projects
- Education and Relevant Coursework
- Profile image placeholder

## Optional local preview

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.
