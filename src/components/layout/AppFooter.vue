<template>
  <footer class="footer">
    <div class="container">
      <p>© {{ year }} Jhon Mantilla</p>

      <div class="social">
        <a href="https://www.linkedin.com/in/jhon-edinson-mantilla-ruiz-b2038b207/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Jhon-mantila" target="_blank">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #0f0f0f;
  color: white;
  margin-top: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social a {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
}

.social a:hover {
  opacity: 0.7;
}
</style>
