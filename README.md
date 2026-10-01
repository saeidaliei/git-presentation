# Git Workflow presentation

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

## Suggested workshop flow

1. What Git is and why researchers use it
2. Local repository basics
3. The everyday save/commit loop
4. Branches
5. Sharing with GitHub
6. Pull requests and review
7. Keeping branches up to date
8. Conflicts and recovery
9. Research-specific `.gitignore` habits
10. Short hands-on exercises
