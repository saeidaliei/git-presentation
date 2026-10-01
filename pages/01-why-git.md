---
layout: section
---

# 1. Why Git in research?

---

# The problem Git solves

<div class="grid grid-cols-3 gap-5 mt-8 text-left">
  <div class="command-card">
    <div class="text-3xl">🧪</div>
    <h3 class="font-700 mt-3">Experiments change</h3>
    <p class="text-sm mt-2 muted">You try an idea, change parameters, fix a bug, and eventually wonder what worked.</p>
  </div>
  <div class="command-card">
    <div class="text-3xl">👥</div>
    <h3 class="font-700 mt-3">People change files</h3>
    <p class="text-sm mt-2 muted">You collaborate with a supervisor, co-author, or lab mate without emailing copies around.</p>
  </div>
  <div class="command-card">
    <div class="text-3xl">📚</div>
    <h3 class="font-700 mt-3">Research changes over time</h3>
    <p class="text-sm mt-2 muted">You want to answer: “What changed between the result in March and the result in June?”</p>
  </div>
</div>

---

# Git is a timeline for your project

<div class="grid grid-cols-2 gap-10 items-center mt-8">
<div class="text-left">

Git records snapshots of files as commits.

<div class="mt-6">
  <span class="git-chip">commit 1 · baseline</span>
  <span class="git-chip">commit 2 · add analysis</span>
  <span class="git-chip">commit 3 · fix plot</span>
  <span class="git-chip">commit 4 · manuscript edits</span>
</div>

</div>

```mermaid
flowchart LR
  A[baseline] --> B[analysis]
  B --> C[plot fix]
  C --> D[manuscript]
  style A fill:#fafafa,stroke:#999
  style B fill:#fafafa,stroke:#999
  style C fill:#fafafa,stroke:#999
  style D fill:#fafafa,stroke:#999
```
</div>

---

# Git ≠ GitHub

<div class="grid grid-cols-2 gap-8 mt-8 text-left">

<div class="command-card">
<h3 class="text-xl font-700">Git</h3>
<p class="mt-3">The version-control system on your computer.</p>
<div class="mt-4 text-sm muted">Tracks files, commits, branches, merges, history.</div>
</div>

<div class="command-card">
<h3 class="text-xl font-700">GitHub</h3>
<p class="mt-3">A web platform where Git repositories can be hosted and collaborated on.</p>
<div class="mt-4 text-sm muted">Pull requests, reviews, issues, permissions, releases.</div>
</div>

</div>

<div class="mt-8 text-lg">You can use Git without GitHub. You can also use GitHub without knowing every Git command.</div>
