<template>
  <section id="about" class="section">
    <div class="inner">
      <div class="card">
        <div class="content">
          <h2 class="title">Sobre mí</h2>

          <p class="text">
            Apasionado por transformar ideas en soluciones digitales. Me gusta construir productos con
            buen diseño, buen performance y código limpio. Trabajo con desarrollo web (PHP | JS | MYSQL | KOTLIN | LARAVEL | APIS | ETL | GODOT | GIT)
            y tengo inclinación por diseño gráfico y experiencias interactivas.
          </p>

          <div class="social">
            <a class="icon-btn" href="https://github.com/Jhon-mantila" target="_blank" rel="noopener" aria-label="GitHub">
              <!-- GitHub -->
              <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .6a11.5 11.5 0 0 0-3.64 22.4c.58.1.8-.25.8-.56v-2c-3.25.7-3.94-1.38-3.94-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.1-.76.41-1.28.74-1.58-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.2a11 11 0 0 1 5.83 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.65.24 2.87.12 3.17.74.82 1.2 1.87 1.2 3.15 0 4.51-2.75 5.5-5.37 5.79.43.37.8 1.1.8 2.23v3.3c0 .31.21.67.81.56A11.5 11.5 0 0 0 12 .6Z"
                />
              </svg>
            </a>

            <a class="icon-btn" href="https://www.linkedin.com/in/jhon-edinson-mantilla-ruiz-b2038b207/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <!-- LinkedIn -->
              <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.31V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45Z"
                />
              </svg>
            </a>

            <a class="icon-btn" href="mailto:jhon.e.mantilla@gmail.com" aria-label="Email">
              <!-- Mail -->
              <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="photoWrap">
          <div class="photo" aria-label="Foto de perfil"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Por ahora foto en CSS (gradiente). Luego la reemplazamos por tu imagen real.
</script>

<style scoped>
.section {
  padding: 28px 16px 0px;
  background: #0c0e12;
  color: white;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(20, 22, 28, 0.32);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  padding: 28px;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 24px;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* glow suave como tu diseño */
.card::before {
  content: "";
  position: absolute;
  inset: -120px -200px auto -200px;
  height: 280px;
  background: radial-gradient(circle, rgba(124, 77, 255, 0.18), transparent 60%);
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
}

.title {
  margin: 0 0 10px;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.92);
}

.text {
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.65;
  font-size: 14px;
  max-width: 680px;
}

.social {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(12, 14, 18, 0.35);
  color: rgba(255, 255, 255, 0.82);
  transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
  text-decoration: none;
}

.icon-btn:hover {
  background: rgba(30, 33, 42, 0.45);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.icon {
  width: 18px;
  height: 18px;
}

.photoWrap {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.photo {
  width: 140px;
  height: 140px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 14px 50px rgba(0, 0, 0, 0.5);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.18), transparent 55%),
    linear-gradient(135deg, rgba(124, 77, 255, 0.7), rgba(179, 136, 255, 0.25));
  background-image: url("https://esquinaweb.com/wp-content/uploads/2026/01/foto-jhon.jpg");
  background-size : contain;
}

/* Responsive */
@media (max-width: 900px) {
  .card {
    grid-template-columns: 1fr;
    text-align: left;
  }
  .photoWrap {
    justify-content: flex-start;
  }
}
</style>
