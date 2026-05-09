<script setup>
import HeroSection from './components/HeroSection.vue'
import ProjectGrid from './components/ProjectGrid.vue'
</script>

<template>
  <HeroSection />
  <ProjectGrid />
  <footer class="footer">
    <p>&copy; 2026 handsomeman118</p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 2rem 1rem;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  border-top: 1px solid var(--color-border);
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>
