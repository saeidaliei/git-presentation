# When things go wrong

<div class="grid grid-cols-2 gap-8 mt-4 text-left items-start">
<div v-click>

**A merge conflict is not data loss.** Git just needs you to choose:

```text
<<<<<<< HEAD
version from your branch
=======
version from the other branch
>>>>>>> other-branch
```

Edit to the final intended state, then `git add` and `git commit`.

</div>
<div>

<div v-click class="command-card">
  <h3 class="font-700"><code>git restore file</code></h3>
  <p class="mt-2 text-sm muted">Discard an uncommitted local edit.</p>
</div>

<div v-click class="command-card mt-4">
  <h3 class="font-700"><code>git revert COMMIT</code></h3>
  <p class="mt-2 text-sm muted">New commit that undoes an old one. Safe for shared history.</p>
</div>

</div>
</div>

<div v-click class="mt-6 text-sm muted">
  Do not blindly keep both sides: understand the science or code first. Leave <code>reset</code> and <code>rebase</code> for later.
</div>

<!--
~1:00. Committed work is very hard to lose, so commit early.
-->

---

# Research habits that save you

<div class="grid grid-cols-2 gap-8 mt-4 text-left items-start">
<div v-click>

Add a `.gitignore`:

```text
__pycache__/
.ipynb_checkpoints/
*.log
.env
results/
*.fits
```

</div>
<div class="text-lg">

<v-clicks>

- **In Git:** code, small configs, manuscript, README
- **Elsewhere:** large raw data (data archive), secrets (environment or secret manager)
- **Regenerate:** reproducible outputs
- **Tag** what you publish: `git tag v1.0-submission`
- **Archive** a release on Zenodo for a citable DOI

</v-clicks>

</div>
</div>

<div v-click class="mt-6 text-sm muted">
  Ask “should this repository own this file?”, not “can Git store it?”. Deleting a committed password later does not erase it from history.
</div>

<!--
~1:00. Match the policy to your lab, funder and data-management plan.
-->
