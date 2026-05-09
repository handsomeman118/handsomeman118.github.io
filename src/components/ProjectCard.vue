<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="card">
    <h3 class="card-name">
      <a :href="project.github" target="_blank" rel="noopener">{{ project.name }}</a>
    </h3>
    <p class="card-desc">{{ project.description }}</p>
    <div class="card-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="card-links">
      <a :href="project.github" target="_blank" rel="noopener">GitHub</a>
      <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener">Demo</a>
    </div>
  </article>
</template>

<style scoped>
.card {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.2s, background-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--color-accent);
  background-color: var(--color-bg-card-hover);
  transform: translateY(-2px);
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
</style>
