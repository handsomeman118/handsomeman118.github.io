<script setup>
import { ref, onMounted } from 'vue'
import avatar from '../assets/avatar.webp'
import { profile } from '../data/profile.js'

const { displayName, username, tagline } = profile

const typedText = ref('')

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    typedText.value = tagline
    return
  }

  let i = 0
  const timer = setInterval(() => {
    typedText.value += tagline[i]
    i++
    if (i >= tagline.length) clearInterval(timer)
  }, 200)
})
</script>

<template>
  <section class="hero">
    <div class="hero-glow hero-glow--blue"></div>
    <div class="hero-glow hero-glow--purple"></div>
    <img class="hero-avatar" :src="avatar" :alt="displayName + ' 的头像'" draggable="false" @dragstart.prevent />
    <h1 class="hero-name">{{ displayName }}</h1>
    <p class="hero-username">@{{ username }}</p>
    <p class="hero-tagline">{{ typedText }}<span class="typewriter-cursor"></span></p>
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
  animation: fadeUp 0.6s ease-out both;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.08;
  pointer-events: none;
}

.hero-glow--blue {
  width: 300px;
  height: 300px;
  background: #58a6ff;
  top: -50px;
  left: 10%;
}

.hero-glow--purple {
  width: 250px;
  height: 250px;
  background: #bc8cff;
  top: 50px;
  right: 10%;
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
  box-shadow: 0 0 20px rgba(88, 166, 255, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  z-index: 1;
}

.hero-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(88, 166, 255, 0.3);
}

.hero-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  background: linear-gradient(135deg, #58a6ff, #bc8cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
}

.hero-username {
  font-size: 0.95rem;
  color: var(--color-accent);
  opacity: 0.7;
  margin-bottom: 0.5rem;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
}

.hero-tagline {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.typewriter-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: var(--color-accent);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blinkCursor 0.7s step-end infinite;
}

@keyframes blinkCursor {
  50% { opacity: 0; }
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: border-color 0.25s, background-color 0.25s, transform 0.25s;
}

.hero-links a:hover {
  border-color: var(--color-accent);
  background-color: var(--color-tag-bg);
  transform: translateY(-1px);
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  .hero {
    animation: none;
  }

  .hero-avatar {
    transition: none;
  }

  .hero-avatar:hover {
    transform: none;
    box-shadow: 0 0 20px rgba(88, 166, 255, 0.15);
  }

  .typewriter-cursor {
    animation: none;
  }

  .hero-links a {
    transition: none;
  }

  .hero-links a:hover {
    transform: none;
  }
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
