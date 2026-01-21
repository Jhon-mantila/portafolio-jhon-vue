<template>
  <section class="hero">
    <div class="hero__inner">
      <!-- Texto -->
      <div class="hero__content">
        <h1 class="hero__title">
          Hola, soy <span>Jhon Mantilla</span> <br />
          Desarrollador Fullstack & Diseñador
        </h1>

        <p class="hero__subtitle">
          Creando experiencias digitales únicas con código y creatividad.
        </p>
      </div>

      <!-- Ilustración / tarjeta -->
      <div class="hero__visual">
        <div class="code-card">
          <div class="code-card__header">
            <span></span><span></span><span></span>
          </div>
          <div class="code-card__body">
            <div class="line"></div>
            <div class="line short"></div>
            <div class="line"></div>
          </div>
          <div class="badge">JM</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Solo presentación por ahora
</script>

<style scoped>
.hero {
  padding: 80px 16px 0px;
  background: radial-gradient(
      1200px 400px at 50% -100px,
      rgba(124, 77, 255, 0.15),
      transparent 60%
    ),
    #0c0e12;
  color: white;
}

.hero__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
  
}

.hero__title {
  font-size: 42px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero__title span {
  color: #8b7bff;
}

.hero__subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  max-width: 520px;
  text-align: center;
}

/* ----- Visual ----- */

.hero__visual {
  display: flex;
  justify-content: center;
}

.code-card {
  position: relative;
  width: 260px;
  height: 170px;
  border-radius: 14px;
  background: linear-gradient(180deg, #1b1e26, #141620);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

.code-card__header {
  display: flex;
  gap: 6px;
  padding: 10px;
}

.code-card__header span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.code-card__body {
  padding: 12px;
}

.line {
  height: 10px;
  background: linear-gradient(90deg, #7c4dff, #b388ff);
  border-radius: 6px;
  margin-bottom: 10px;
  opacity: 0.7;
}

.line.short {
  width: 60%;
}

.badge {
  position: absolute;
  bottom: -14px;
  right: -14px;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7c4dff, #b388ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #0c0e12;
}

/* ----- Responsive ----- */
@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__visual {
    margin-top: 40px;
  }

  .hero__subtitle {
    margin: 0 auto;
  }
}
</style>
