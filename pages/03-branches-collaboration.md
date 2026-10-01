# Branches and pull requests

<div class="text-lg">A branch is a named line of work. <code>main</code> stays the agreed baseline.</div>

<div class="grid grid-cols-2 gap-8 mt-6 text-left items-start">
<div>

```bash {1-2|3|4-6|7}
git switch main
git pull --ff-only
git switch -c fix/plot-labels
# ... edit files ...
git add figures/
git commit -m "Fix plot labels"
git push -u origin fix/plot-labels
```

</div>
<div class="text-lg">

<v-clicks>

- **Pull request** = a proposal to merge your branch
- Supervisor reviews and comments
- You revise with more commits
- Merge into `main`, delete the branch

</v-clicks>

</div>
</div>

<div v-click class="mt-6 text-sm muted">
  <code>fetch</code> = look at what changed · <code>pull</code> = fetch and integrate · <code>push</code> = send my commits
</div>

<!--
~1:15. Good PR description: what changed, why, how tested. Branch names like feature/new-figure or analysis/bootstrap. A long-lived branch: git fetch, then git merge origin/main.
-->
