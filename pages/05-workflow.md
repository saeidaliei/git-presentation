---
layout: section
---

# 5. A workflow you can actually use

---

# Scenario: you are fixing a thesis analysis

**Goal:** change one analysis, compare it, share it for review.

```bash
# get the latest main branch
git switch main
git pull --ff-only

# make a focused branch
git switch -c fix/bootstrap-ci

# edit files
# ...

git status
git diff

git add analysis/bootstrap.py
git commit -m "Fix bootstrap confidence interval"
git push -u origin fix/bootstrap-ci
```

Then open a pull request on GitHub.

---

# Scenario: review from your supervisor

A lightweight loop:

```text
Supervisor: “Please test this alternative method.”
                         ↓
                new branch + commits
                         ↓
                      PR
                         ↓
               review + discussion
                         ↓
                 revisions / more commits
                         ↓
                      merge
                         ↓
                    delete branch
```

The branch preserves the experiment while the default branch stays the agreed baseline.

---

# A small hands-on exercise

Create a tiny repository with one file.

```bash
mkdir git-practice
cd git-practice
git init
printf "# My experiment\n" > README.md
git add README.md
git commit -m "Add experiment README"
```

Then:

```bash
git switch -c experiment/change-title
printf "More notes\n" >> README.md
git diff
git add README.md
git commit -m "Add experiment notes"
git log --oneline --decorate --graph --all
```

**Pause here and inspect the history.**

---

# Exercise 2: simulate collaboration

With a GitHub repository you have write access to:

```bash
git switch main
git pull --ff-only

git switch -c docs/improve-readme
```

Edit `README.md`, then:

```bash
git add README.md
git commit -m "Improve README"
git push -u origin docs/improve-readme
```

Now create a pull request and ask a colleague to review it.

---

# The five commands worth memorising first

```bash
git status

git add <file>

git commit -m "message"

git switch <branch>
git pull --ff-only
```

Then add:

```bash
git push
```

<div class="mt-6 text-lg">Everything else becomes easier once these feel normal.</div>

---

# Your default research workflow

```text
START HERE
   │
   ▼
update main
   │
   ▼
create a small branch
   │
   ▼
edit → status → diff
   │
   ▼
add → commit
   │
   ▼
push branch
   │
   ▼
pull request
   │
   ▼
review / revise
   │
   ▼
merge
```

<div class="mt-6 text-sm muted">Repeat the cycle. Keep branches focused. Keep commits understandable.</div>

---

# A one-slide cheat sheet

| Task | Command |
|---|---|
| Create repo | `git init` |
| Copy repo | `git clone URL` |
| Check state | `git status` |
| See changes | `git diff` |
| Stage | `git add file` |
| Commit | `git commit -m "..."` |
| New branch | `git switch -c name` |
| Switch branch | `git switch name` |
| Download remote info | `git fetch` |
| Update current branch | `git pull --ff-only` |
| Share commits | `git push` |
| History | `git log --oneline --graph --all` |
| Discard local file edits | `git restore file` |
| Undo a shared commit | `git revert COMMIT` |

---

# Resources

- Git reference: https://git-scm.com/docs
- GitHub flow: https://docs.github.com/en/get-started/using-github/github-flow
- Pull requests: https://docs.github.com/en/pull-requests
- Your lab’s own contribution guide: **learn and follow the local convention**

<div class="mt-8 text-lg">The goal is not to memorise Git. The goal is to have a safe, repeatable workflow for research.</div>

---

# Thank you

<div class="mt-8 text-2xl">Questions?</div>

<div class="mt-10">
  <span class="git-chip">saeidaliei.github.io/git-presentation</span>
</div>
