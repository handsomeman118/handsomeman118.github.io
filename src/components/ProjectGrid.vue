<script setup>
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="grid-section">
    <h2 class="grid-title">项目展示</h2>
    <div class="grid" :class="{ 'grid--single': projects.length === 1 }">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.name"
        :project="project"
        :style="{ animationDelay: `${0.1 + index * 0.1}s` }"
      />
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
  padding-left: 0.75rem;
  border-left: 3px solid var(--color-accent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.grid--single {
  grid-template-columns: 1fr;
  max-width: 500px;
  margin: 0 auto;
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
