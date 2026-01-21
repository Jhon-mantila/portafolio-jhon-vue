import { ref, computed, onMounted } from 'vue'
import { fetchProjects } from '../services/wordpressApi'

export function useProjects() {
  const projects = ref([])
  const loading = ref(true)
  const error = ref(null)

  const activeCategory = ref('Todos')

  const categories = ref([
    'Todos',
    'Desarrollo web',
    'Videojuegos',
    'Diseño gráfico',
  ])

  const loadProjects = async () => {
    loading.value = true
    error.value = null

    try {
      const posts = await fetchProjects()

      projects.value = posts.map((post) => {
        const featured =
          post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null

        return {
          id: post.id,
          title: post.title.rendered,
          excerpt: stripHtml(post.excerpt.rendered),
          category: mapCategory(post.categories),
          url: post.link, // URL SEO real en WordPress
          imageUrl: featured,
        }
      })
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  const filteredProjects = computed(() => {
    if (activeCategory.value === 'Todos') return projects.value
    return projects.value.filter(
      (p) => p.category === activeCategory.value
    )
  })

  onMounted(loadProjects)

  return {
    projects,
    filteredProjects,
    categories,
    activeCategory,
    loading,
    error,
  }
}

/* -------- helpers -------- */

function stripHtml(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}

/**
 * Mapea IDs de categoría WP a nombres de tabs
 * 👉 AJUSTA ESTOS IDS SEGÚN TU WORDPRESS
 */
function mapCategory(categoryIds = []) {
  // ejemplo: cambia los IDs por los reales de tu WP
  if (categoryIds.includes(107)) return 'Desarrollo web'
  if (categoryIds.includes(109)) return 'Videojuegos'
  if (categoryIds.includes(111)) return 'Diseño gráfico'
  return 'Desarrollo web'
}
