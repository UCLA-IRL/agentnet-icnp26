# AgentNet 2026 Website

Static GitHub Pages site for the ICNP 2026 workshop:

- Title: `AgentNet 2026: Networking Foundations for Autonomous Agents`
- Repository: `UCLA-IRL/agentnet-icnp26`
- Expected Pages URL: `https://ucla-irl.github.io/agentnet-icnp26/`

## Files

- `index.html`: site content and structure
- `styles.css`: visual design and responsive layout
- `main.js`: small reveal animation for section entrances
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment via GitHub Actions

## Deployment

1. Push the repository to `main`.
2. In GitHub repo settings, open `Pages`.
3. Set the build source to `GitHub Actions` if it is not already selected.
4. The workflow will publish the site automatically on the next push.

## Local Preview

Run a simple static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
