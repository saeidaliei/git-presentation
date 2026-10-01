# Where did Git come from?

<div class="text-left mt-6 space-y-3">
  <div v-click class="command-card">
    <b>Before 2005</b> · The Linux kernel team used BitKeeper, a proprietary version-control tool that was free for them.
  </div>
  <div v-click class="command-card">
    <b>Spring 2005</b> · The free licence was withdrawn after a dispute. <b>Linus Torvalds</b> began writing a replacement that April, and within days Git was managing its own code.
  </div>
  <div v-click class="command-card">
    <b>His goals</b> · fast · simple design · fully distributed · safe with thousands of parallel branches
  </div>
</div>

<div v-click class="mt-6 text-lg">
  Built for thousands of kernel developers, so one PhD thesis is easy.
</div>

<!--
~1:00. Handed to Junio Hamano, the maintainer since 2005. Point: the design goals (speed, distributed, branching) are exactly what researchers benefit from.
-->

---

# The problem Git solves

<div class="grid grid-cols-3 gap-5 mt-8 text-left">
  <div v-click class="command-card">
    <div class="text-3xl">🧪</div>
    <h3 class="font-700 mt-3">Experiments change</h3>
    <p class="text-sm mt-2 muted">You try an idea, change parameters, fix a bug, and eventually wonder what worked.</p>
  </div>
  <div v-click class="command-card">
    <div class="text-3xl">👥</div>
    <h3 class="font-700 mt-3">People change files</h3>
    <p class="text-sm mt-2 muted">You collaborate with a supervisor, co-author, or lab mate without emailing copies around.</p>
  </div>
  <div v-click class="command-card">
    <div class="text-3xl">📚</div>
    <h3 class="font-700 mt-3">Research changes over time</h3>
    <p class="text-sm mt-2 muted">“What changed between the result in March and the result in June?”</p>
  </div>
</div>

<div v-click class="mt-10 text-lg">
  Instead of <code>analysis_final_v3_REAL.py</code>: one folder, one full history.
</div>

<!--
~0:45. Ask: who has a file called final_v2? Git records what, when, who and why.
-->

---

# Git ≠ GitHub

<div class="grid grid-cols-2 gap-8 mt-8 text-left">
  <div v-click class="command-card">
    <h3 class="text-xl font-700">Git</h3>
    <p class="mt-3">The version-control system on your computer.</p>
    <div class="mt-4 text-sm muted">Tracks files, commits, branches, merges, history.</div>
  </div>
  <div v-click class="command-card">
    <h3 class="text-xl font-700">GitHub</h3>
    <p class="mt-3">A web platform where Git repositories are hosted and shared.</p>
    <div class="mt-4 text-sm muted">Pull requests, reviews, issues, permissions, releases.</div>
  </div>
</div>

<div v-click class="mt-8 text-lg">
  Today Git is the dominant version-control tool (over 90% of developers in Stack Overflow surveys): Linux, Python, PyTorch, and your lab.
</div>

<!--
~0:45. GitLab and Bitbucket are alternatives to GitHub. You can use Git without any of them.
-->
