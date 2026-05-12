<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})

function onMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <article class="card" @mousemove="onMouseMove">
    <div class="card-glow"></div>
    <h3 class="card-name">
      <a :href="project.github" target="_blank" rel="noopener">{{ project.name }}</a>
    </h3>
    <p class="card-desc">{{ project.description }}</p>
    <div class="card-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="card-links">
      <a :href="project.github" target="_blank" rel="noopener" :aria-label="`${project.name} GitHub 仓库`">GitHub</a>
      <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" :aria-label="`${project.name} 在线演示`">Demo</a>
    </div>
  </article>
</template>

<style scoped>
.card {
  --mouse-x: 50%;
  --mouse-y: 50%;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  animation: fadeUp 0.5s ease-out both;
  transition: border-color 0.25s, background-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s;
  background: radial-gradient(
    200px circle at var(--mouse-x) var(--mouse-y),
    rgba(88, 166, 255, 0.1),
    transparent
  );
  pointer-events: none;
  z-index: 0;
}

.card:hover .card-glow {
  opacity: 1;
}

.card:hover {
  border-color: transparent;
  background-image: linear-gradient(var(--color-bg-card), var(--color-bg-card)),
    linear-gradient(135deg, #58a6ff, #bc8cff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-color: var(--color-bg-card);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}

.card > * {
  position: relative;
  z-index: 1;
}

.card-name {
  font-size: 1.15rem;
  font-weight: 600;
}

.card-name a {
  color: var(--color-text-primary);
}

.card-name a:hover {
  color: var(--color-accent);
  text-decoration: none;
}

.card-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  background-color: var(--color-tag-bg);
  color: var(--color-tag-text);
  border-radius: 999px;
  transition: background-color 0.2s;
}

.tag:hover {
  background-color: rgba(88, 166, 255, 0.15);
}

.card-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.5rem;
}

.card-links a {
  font-size: 0.85rem;
  color: var(--color-accent);
  font-weight: 500;
}

@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
    transition: none;
  }

  .card:hover {
    transform: none;
    box-shadow: none;
    background-image: none;
    border-color: var(--color-accent);
  }

  .card-glow {
    display: none;
  }

  .tag {
    transition: none;
  }
}
</style>
