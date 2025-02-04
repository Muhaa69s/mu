<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <div class="discover-more">
    <h1>{{ msg }}</h1>
    <p>
      La maladie de Parkinson est une condition complexe. Découvrez des informations détaillées
      sur ses causes, son évolution, et les options de traitement disponibles.
    </p>

    <div class="options">
      <router-link to="/parkinson/causes" class="option-card">
        <h2>Causes</h2>
        <p>Facteurs génétiques et environnementaux impliqués dans la maladie.</p>
      </router-link>

      <router-link to="/parkinson/traitement" class="option-card">
        <h2>Traitements</h2>
        <p>Médicaments, thérapies et options chirurgicales disponibles.</p>
      </router-link>

      <router-link to="/parkinson/epidemiologie" class="option-card">
        <h2>Épidémiologie</h2>
        <p>Statistiques et distribution mondiale de la maladie de Parkinson.</p>
      </router-link>

      <router-link to="/parkinson/projet2040" class="option-card">
        <h2>Projet 2040</h2>
        <p>Les initiatives de recherche et les perspectives futures.</p>
      </router-link>

      <router-link to="/parkinson/symptomes" class="option-card">
        <h2>Symptômes</h2>
        <p>Les signes moteurs et non moteurs de la maladie.</p>
      </router-link>

      <router-link to="/parkinson/prevention" class="option-card">
        <h2>Prévention</h2>
        <p>Les habitudes de vie pouvant ralentir la progression de la maladie.</p>
      </router-link>
    </div>

    <router-link to="/" class="back-button">
      <button>Retour à la présentation</button>
    </router-link>
  </div>
</template>

<style scoped>
.discover-more {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: radial-gradient(circle, #74b9ff, #a29bfe);
  padding: 60px;
  border-radius: 20px;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  animation: fadeIn 2s ease-out;
}

.options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.option-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: #2c3e50;
}

.option-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: #74b9ff;
  color: #fff;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  margin-top: 25px;
}

button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
</style>
