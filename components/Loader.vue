<!-- Start Generation Here -->
<template>
  <div class="loader-container">
    <div class="loader"></div>
    <p class="loading-text">Loading...</p>
  </div>
</template>

<script setup>
</script>

<style scoped>

.loader {
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 10px;
  color: #ffffff;
  font-size: 1.2rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>