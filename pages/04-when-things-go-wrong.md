---
layout: section
---

# 4. When things go wrong

---

# Merge conflicts are not data loss

A conflict means Git could not automatically decide which change to keep.

```text
main:     A ── B ── C
                \
feature:          ── D ── E

                  ↓ merge

             conflict in file X
```

Your job is to open the conflicted file, decide the intended content, then tell Git the conflict is resolved.

---

# The basic conflict workflow

```bash
git status
```

Open the file and look for markers:

```text
<<<<<<< HEAD
version from your current branch
=======
version from the other branch
>>>>>>> other-branch
```

Edit the file into the final intended state, then:

```bash
git add path/to/file

git commit
```

<div class="mt-4 text-sm muted">Do not blindly keep both sides. Understand the science or code before resolving a research conflict.</div>

---

# Undo safely: three ideas

### “I changed a file and want the last committed version.”

```bash
git restore path/to/file
```

### “I made a commit that should be undone.”

```bash
git revert <commit>
```

### “I want to rewrite local history.”

That is where commands such as `reset` and `rebase` appear. Learn them later and use them deliberately—especially after a branch has been pushed or shared.

---

# `git restore` vs `git revert`

<div class="grid grid-cols-2 gap-8 mt-8 text-left">
<div class="command-card">
<h3 class="font-700">restore</h3>
<p class="mt-2">Changes files in your working tree.</p>
<p class="mt-4 text-sm muted">Good for discarding an uncommitted local edit you no longer want.</p>
</div>
<div class="command-card">
<h3 class="font-700">revert</h3>
<p class="mt-2">Creates a new commit that reverses an earlier commit.</p>
<p class="mt-4 text-sm muted">Useful when the history is already shared with others.</p>
</div>
</div>

---

# Research projects need a `.gitignore`

Do **not** casually commit:

- raw data that should live in a data repository
- generated output that can be reproduced
- large binaries
- editor files
- passwords, API keys, tokens, credentials

Example:

```text
__pycache__/
.ipynb_checkpoints/
*.log
.env
results/
*.fits
```

<div class="mt-4 text-sm muted">The exact policy should match your lab, funder, data-management plan, and repository rules.</div>

---

# Git is not a backup for everything

Think about **what belongs in Git** and **what belongs elsewhere**.

| Research object | Typical home |
|---|---|
| Source code | Git |
| Small configuration files | Git |
| Manuscript source | Git |
| README / documentation | Git |
| Large raw datasets | Data storage / archive |
| Secrets | Secret manager / environment |
| Reproducible generated files | Often regenerate instead of commit |

The key question is not “Can Git store this?” but “Should this repository own this file?”
