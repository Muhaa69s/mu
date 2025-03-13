<template>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <h2> kkk </h2>
      <img :src="article.image" alt="Illustration du système cardiovasculaire">
      <p>{{ article.content }}</p>
    </div>
    <div v-else>
      <p>Article non trouvé.</p>
    </div>
  </template>
  
  <script setup>
  import { useArticleStore } from "../../stores/articleStore";  // Chemin correct avec 'stores' en minuscule
  
  // Utilisation du store
  const store = useArticleStore();
  
  // Trouver un article spécifique en fonction de l'ID (ici, on prend l'ID = 1 pour l'exemple)
  // Assurez-vous que `article` est défini
  const article = store.articles.find(article => article.id === 1) || null;
  
  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>
  