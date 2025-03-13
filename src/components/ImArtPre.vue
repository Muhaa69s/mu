<template>
    <section class="article-section">
      <header class="section-header">
        <h2 class="section-title">Articles de Physiologie</h2>
        <p class="section-intro">
          Découvrez les mécanismes fondamentaux du corps humain et son fonctionnement.
        </p>
      </header>
  
      <div class="articles-container">
        <article v-if="article" class="article-card fade-in">
          <img :src="article.image" :alt="article.title" class="article-image">
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          <span class="article-views">{{ article.views }} vues</span>
          <button @click="goToArticle(article.link)" class="read-button">Lire l'article</button>
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ImArtPre",
    data() {
      return {
        article: {
          id: 6,
          title: "Immunologie : système de défense",
          content: "Analyse des mécanismes de défense du corps contre les agents pathogènes.",
          views: 250,
          image: "https://www.illustration-medicale.org/wp-content/uploads/2016/05/illustration-medicale-scientifique-immunologie-02.jpg",
          link: "/articles/immunologie"
        }
      };
    },
    mounted() {
      if (typeof document !== "undefined") {
        this.setupScrollAnimations();
      }
    },
    methods: {
      setupScrollAnimations() {
        const elementsToAnimate = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.2 }
        );
        elementsToAnimate.forEach((el) => observer.observe(el));
      },
      goToArticle(link) {
        if (this.$router) {
          this.$router.push(link);
        } else {
          window.location.href = link; // Fallback si Vue Router ne fonctionne pas
        }
      }
    }
  };
  </script>
  
