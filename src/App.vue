<script setup>
import HeroSection from './components/HeroSection.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import PullCord from './components/PullCord.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <header class="top-bar">
    <ThemeToggle />
  </header>
  <main>
    <HeroSection />
    <ProjectGrid />
  </main>
  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} handsomeman118</p>
  </footer>
  <PullCord />
</template>

<style scoped>
.top-bar {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 100;
}

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
