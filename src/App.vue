<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <Entete />
    <Menu />
    <RouterView />
    <Enbas />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b883;
  font-size: 1.2em;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #646cff;
}
</style>
