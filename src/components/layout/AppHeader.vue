<template>
  <header class="topbar">
    <div class="topbar__inner">
      <div class="brand">Jhon Mantilla</div>

      <div class="actions">
        <!-- Esquina Web -->
        <a
          class="icon-btn"
          href="https://esquinaweb.com/"
          target="_blank"
          rel="noopener"
          aria-label="Esquina Web"
          title="Esquina Web"
        >
          <img
            class="icon-img"
            src="https://esquinaweb.com/wp-content/uploads/2025/04/cropped-Esquina-Wed-Icono.png"
            alt="Esquina Web"
            width="20" height="20"
          />
        </a>

        <!-- Esquina Gamers -->
        <a
          class="icon-btn"
          href="https://esquinagamers.com/"
          target="_blank"
          rel="noopener"
          aria-label="Esquina Gamers"
          title="Esquina Gamers"
        >
          <img
            class="icon-img"
            src="https://esquinaweb.com/wp-content/uploads/2025/04/Esquina-Gamer-Icono.png"
            alt="Esquina Gamers"
            width="25" height="25"
          />
        </a>

        <button class="icon-btn" type="button" aria-label="Menú" title="Menú">
          <!-- menu -->
          <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
            <path
              d="M4 7h16v2H4V7Zm0 6h16v2H4v-2Zm0 6h16v2H4v-2Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
// Por ahora solo UI. Luego podemos conectar:
// - buscador (modal)
// - theme toggle (dark/light)
// - menú móvil (drawer)
</script>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 14px 16px;
  background: rgba(12, 14, 18, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.topbar__inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  color: rgba(255, 255, 255, 0.92);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.2px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-btn {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(20, 22, 28, 0.35);
  color: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
}

.icon-btn:hover {
  background: rgba(30, 33, 42, 0.45);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.icon-btn:active {
  transform: translateY(0px);
}

.icon {
  width: 18px;
  height: 18px;
}
.icon-img {

  object-fit: contain;
  display: block;
}
/* Responsive: si quieres ocultar el texto y dejar solo ícono en móviles extremos */
@media (max-width: 360px) {
  .brand {
    font-size: 14px;
  }
  .icon-btn {
    width: 34px;
    height: 34px;
  }
}
</style>
