# Your default research workflow

<div class="flex flex-wrap justify-center gap-2 mt-4">
  <span v-click class="git-chip">1 · update main</span>
  <span v-click class="git-chip">2 · small branch</span>
  <span v-click class="git-chip">3 · edit → status → diff</span>
  <span v-click class="git-chip">4 · add → commit</span>
  <span v-click class="git-chip">5 · push</span>
  <span v-click class="git-chip">6 · pull request</span>
  <span v-click class="git-chip">7 · review → merge</span>
</div>

<div v-click class="mt-6">

| Task | Command |
|---|---|
| Check state / changes | `git status` · `git diff` |
| Stage and commit | `git add file` · `git commit -m "..."` |
| New / switch branch | `git switch -c name` · `git switch name` |
| Update / share | `git pull --ff-only` · `git push` |
| History | `git log --oneline --graph --all` |
| Undo | `git restore file` · `git revert COMMIT` |

</div>

<!--
~1:00. Repeat the cycle; keep branches focused and commits understandable. The slide is a cheat sheet people can photograph.
-->

---

# Try it today

<div class="grid grid-cols-2 gap-8 mt-4 text-left items-start">
<div>

```bash
mkdir git-practice && cd git-practice
git init
printf "# My experiment\n" > README.md
git add README.md
git commit -m "Add experiment README"
git log --oneline --graph --all
```

</div>
<div v-click class="text-base">

- Git reference: https://git-scm.com/docs
- GitHub flow: https://docs.github.com/en/get-started/using-github/github-flow
- Pull requests: https://docs.github.com/en/pull-requests
- Your lab's own contribution guide: follow the local convention

</div>
</div>

<div v-click class="mt-8 text-lg">
  The goal is not to memorise Git. It is a safe, repeatable workflow for research.
</div>

<div v-click class="mt-6 text-2xl">Questions?</div>

<!--
~0:30. Next step: put one analysis folder under Git and push it to GitHub.
-->
