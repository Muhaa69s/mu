<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/discovermore">Découvrir plus</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
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

