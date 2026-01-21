<template>
  <article class="card">
    <div class="thumb" :style="thumbStyle" aria-hidden="true"></div>

    <div class="body">
      <div class="meta">
        <span class="pill">{{ project.category }}</span>
      </div>

      <h3 class="title">{{ project.title }}</h3>

      <p class="desc">
        {{ project.excerpt }}
      </p>

      <div class="actions">
        <a class="btn" :href="project.url" target="_blank" rel="noopener">
          Ver proyecto
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const thumbStyle = computed(() => {
  // En mock usamos gradient; luego será imagen destacada de WP
  if (props.project.imageUrl) return { backgroundImage: `url(${props.project.imageUrl})` }
  return { backgroundImage: `linear-gradient(135deg, rgba(124,77,255,.55), rgba(179,136,255,.25))` }
})
</script>

<style scoped>
.card {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(20, 22, 28, 0.32);
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  transition: transform 0.12s ease, border-color 0.12s ease, background 0.12s ease;
}

.card:hover {
  transform: translateY(-2px);
  border-color: rgba(124, 77, 255, 0.22);
  background: rgba(20, 22, 28, 0.42);
}

.thumb {
  height: 150px;
  background-size: cover;
  background-position: center;
}

.body {
  padding: 16px;
}

.meta {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.pill {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(124, 77, 255, 0.35);
  background: rgba(124, 77, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

.title {
  margin: 0 0 8px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.92);
}

.desc {
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
  min-height: 38px;
}

.actions {
  display: flex;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  color: #0c0e12;
  background: linear-gradient(135deg, #7c4dff, #b388ff);
}
</style>
