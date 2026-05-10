<script setup>
import avatar from '../assets/avatar.png'
const displayName = '搞不明白AI的Pandas'
const username = 'handsomeman118'
const tagline = '热爱技术，享受创造'
</script>

<template>
  <section class="hero">
    <img class="hero-avatar" :src="avatar" alt="avatar" draggable="false" @dragstart.prevent />
    <h1 class="hero-name">{{ displayName }}</h1>
    <p class="hero-username">@{{ username }}</p>
    <p class="hero-tagline">{{ tagline }}</p>
    <div class="hero-links">
      <a :href="`https://github.com/${username}`" target="_blank" rel="noopener">GitHub</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 5rem 1rem 3rem;
  max-width: var(--max-width);
  margin: 0 auto;
}

.hero-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 3px solid var(--color-border);
  user-select: none;
  -webkit-user-drag: none;
}

.hero-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.hero-username {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

.hero-tagline {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.hero-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.hero-links a {
  font-size: 0.95rem;
  padding: 0.4rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: border-color 0.2s, background-color 0.2s;
}

.hero-links a:hover {
  border-color: var(--color-accent);
  background-color: var(--color-tag-bg);
  text-decoration: none;
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1rem 2rem;
  }

  .hero-avatar {
    width: 90px;
    height: 90px;
  }

  .hero-name {
    font-size: 1.8rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }
}
</style>
