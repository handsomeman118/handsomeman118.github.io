<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(true)

function toggle() {
  isDark.value = !isDark.value
}

watch(isDark, (val) => {
  document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
  localStorage.setItem('theme', val ? 'dark' : 'light')
})

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isDark.value = false
  } else if (!saved) {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
</script>

<template>
  <button class="theme-toggle" @click="toggle" :aria-label="isDark ? '切换到亮色主题' : '切换到暗色主题'">
    <Transition name="swap" mode="out-in">
      <svg v-if="isDark" key="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg v-else key="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </Transition>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-secondary);
  transition: color 0.2s, border-color 0.2s;
}

.theme-toggle:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}

.swap-enter-from {
  opacity: 0;
  transform: rotate(-30deg) scale(0.8);
}

.swap-leave-to {
  opacity: 0;
  transform: rotate(30deg) scale(0.8);
}

@media (prefers-reduced-motion: reduce) {
  .theme-toggle {
    transition: none;
  }

  .swap-enter-active,
  .swap-leave-active {
    transition: none;
  }
}
</style>
