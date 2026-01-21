<template>
  <div class="tabs" role="tablist" aria-label="Categorías de proyectos">
    <button
      v-for="cat in categories"
      :key="cat"
      class="tab"
      :class="{ active: cat === modelValue }"
      type="button"
      role="tab"
      :aria-selected="cat === modelValue"
      @click="$emit('update:modelValue', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: { type: Array, required: true },
  modelValue: { type: String, required: true },
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(20, 22, 28, 0.35);
  border-radius: 14px;
  overflow-x: auto;
}

.tab {
  white-space: nowrap;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(12, 14, 18, 0.35);
  color: rgba(255, 255, 255, 0.78);
  cursor: pointer;
  transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
  font-size: 13px;
}

.tab:hover {
  background: rgba(30, 33, 42, 0.45);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.tab.active {
  background: rgba(124, 77, 255, 0.18);
  border-color: rgba(124, 77, 255, 0.35);
  color: rgba(255, 255, 255, 0.92);
}
</style>
