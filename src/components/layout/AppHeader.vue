<template>
  <header class="topbar">
    <div class="topbar__inner">
      <div class="brand">Jhon Mantilla</div>

      <div class="actions">
        <button class="icon-btn" type="button" aria-label="Buscar" title="Buscar">
          <!-- search -->
          <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
            <path
              d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm8.9 4.3-4.2-4.2 1.4-1.4 4.2 4.2-1.4 1.4Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button class="icon-btn" type="button" aria-label="Cambiar tema" title="Cambiar tema">
          <!-- theme / moon -->
          <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
            <path
              d="M21 14.6A7.9 7.9 0 0 1 9.4 3a7.1 7.1 0 1 0 11.6 11.6Z"
              fill="currentColor"
            />
          </svg>
        </button>

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
