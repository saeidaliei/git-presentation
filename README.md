# Git Workflow for PhD Students

A beginner-friendly Slidev presentation for researchers who are new to Git and GitHub. The deck mirrors the Slidev-based presentation style of the Spack workshop, but has no Python runner or browser-side code execution.

Presentation: **https://saeidaliei.github.io/git-presentation/**

## Local development

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

Export a PDF:

```bash
npm run export
```

## GitHub Pages

This repository is configured as a GitHub Pages project site. The workflow builds Slidev with the repository name as the base path and deploys the `dist/` directory to GitHub Pages.

After creating the repository on GitHub, set **Settings → Pages → Source** to **GitHub Actions** once. Pushes to `main` then rebuild and deploy the presentation.

## Scope

The workshop intentionally avoids live code runners. The slides use ordinary Slidev code blocks and diagrams only. The project targets Slidev 53 and Node.js 22.12+.

The command examples follow current Git terminology, including `git switch` for branch switching and `git restore` for restoring files. After the first local `npm install`, commit the generated `package-lock.json` to pin the dependency tree for reproducible builds. See the official Git and GitHub documentation for command details.

## Talk flow (about 9 minutes, 11 slides)

1. Title
2. Where Git came from (Linus Torvalds, 2005)
3. The problem Git solves
4. Git vs GitHub
5. Four places: the mental model
6. The everyday loop
7. Branches and pull requests
8. When things go wrong
9. Research habits
10. Default workflow and cheat sheet
11. Try it today, resources, questions

Content appears step by step: press the right arrow (or space) to reveal the next item. Each slide has presenter notes with a time budget; open presenter mode with `p`.
