const WP_BASE = 'https://esquinaweb.com/wp-json/wp/v2'

export async function fetchProjects() {
  const url =
    `${WP_BASE}/posts` +
    '?_embed' +                // para imagen destacada
    '&per_page=20' +           // suficiente para portafolio
    '&orderby=date' +
    '&order=desc'

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Error al obtener proyectos desde WordPress')
  }

  return await res.json()
}
