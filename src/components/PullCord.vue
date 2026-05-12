<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function update() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', update)
  window.addEventListener('resize', update)
  update()
})
onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div class="pull-cord" :class="{ 'pull-cord--visible': progress > 0.02 }">
    <div class="rope-track">
      <div class="rope" :style="{ transform: `scaleY(${progress})` }"></div>
    </div>
    <button
      class="handle"
      @click="scrollToTop"
      aria-label="回到顶部"
      :style="{ '--progress': progress }"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.pull-cord {
  position: fixed;
  right: 1.5rem;
  bottom: 2rem;
  height: 200px;
  z-index: 90;
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.3s, transform 0.3s;
}

.pull-cord--visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.rope-track {
  position: absolute;
  right: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  transform: translateX(50%);
  overflow: hidden;
}

.rope {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, var(--color-accent), rgba(88, 166, 255, 0.15));
  transform-origin: bottom;
  border-radius: 2px;
  transition: transform 0.1s linear;
}

.handle {
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translateX(50%) translateY(calc(var(--progress, 0) * -100%));
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--color-bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(88, 166, 255, 0.1);
}

.handle:hover {
  box-shadow:
    0 4px 16px rgba(88, 166, 255, 0.25),
    0 0 0 1px rgba(88, 166, 255, 0.2);
  border-color: var(--color-accent);
}

.handle svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

@media (prefers-reduced-motion: reduce) {
  .pull-cord {
    transition: none;
    transform: none;
  }

  .pull-cord--visible {
    transform: none;
  }

  .rope {
    transition: none;
  }

  .handle {
    transition: none;
  }
}

@media (max-width: 768px) {
  .pull-cord {
    right: 0.75rem;
    height: 140px;
  }

  .handle {
    width: 28px;
    height: 28px;
  }

  .handle svg {
    width: 14px;
    height: 14px;
  }
}
</style>
