<template>
  <section id="projects" class="section">
    <div class="inner">
      <div class="head">
        <h2 class="title">Proyectos</h2>
        <p class="subtitle">Explora trabajos por categoría.</p>
      </div>

      <ProjectsCategoryTabs v-model="activeCategory" :categories="categories" />

      <p v-if="loading" class="empty">Cargando proyectos…</p>

      <p v-else-if="error" class="empty">{{ error }}</p>

      <ProjectsGrid v-else :projects="filteredProjects" />

      <p
        v-if="!loading && filteredProjects.length === 0"
        class="empty"
      >
        No hay proyectos en esta categoría.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProjectsCategoryTabs from '../projects/ProjectsCategoryTabs.vue'
import ProjectsGrid from '../projects/ProjectsGrid.vue'
import { useProjects } from '../../composables/useProjects'

const {
  filteredProjects,
  categories,
  activeCategory,
  loading,
  error,
} = useProjects()

// Tabs fijos (como tu mockup)
/*const categories = ['Todos', 'Desarrollo web', 'Videojuegos', 'Diseño gráfico']
const activeCategory = ref('Todos')

// Mock data (luego lo reemplazamos por WordPress)
const projects = ref([
  {
    id: 1,
    title: 'Blog Personal con Laravel',
    excerpt: 'Blog con autenticación, editor y panel de administración.',
    category: 'Desarrollo web',
    url: 'https://esquinaweb.com',
  },
  {
    id: 2,
    title: 'Landing Page YouTube Clone',
    excerpt: 'Landing moderna con secciones, CTA y responsive.',
    category: 'Desarrollo web',
    url: 'https://esquinaweb.com',
  },
  {
    id: 3,
    title: 'Platformer 2D Pixel Art',
    excerpt: 'Videojuego 2D con físicas, niveles y UI retro.',
    category: 'Videojuegos',
    url: 'https://esquinaweb.com',
  },
  {
    id: 4,
    title: 'Login UI / Dashboard',
    excerpt: 'Diseño UI con componentes, estados y grid modular.',
    category: 'Diseño gráfico',
    url: 'https://esquinaweb.com',
  },
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') return projects.value
  return projects.value.filter((p) => p.category === activeCategory.value)
})*/
</script>

<style scoped>
.section {
  padding: 42px 16px 64px;
  background: #0c0e12;
  color: white;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
}

.head {
  margin-bottom: 14px;
}

.title {
  margin: 0;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.92);
}

.subtitle {
  margin: 6px 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.68);
}

.empty {
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}
</style>
