<script setup>
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="grid-section">
    <h2 class="grid-title">项目展示</h2>
    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.grid-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .grid-section {
    padding: 0 1rem 3rem;
  }
}
</style>
