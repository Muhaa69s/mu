<template>
    <section class="article-section">
      <header class="section-header">
        <h2 class="section-title">Articles de Biologie</h2>
        <p class="section-intro">
          Découvrez les bases de la biologie cellulaire et les mécanismes fondamentaux du vivant.
        </p>
      </header>
  
      <div class="articles-container">
        <article class="article-card fade-in">
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
  name: "BiologyArticlesSection",
  data() {
    return {
      article: {
        id: 1,
        title: "Introduction à la Biologie Cellulaire",
        content: "Les bases de la biologie cellulaire, y compris les fonctions des organites et leur rôle fondamental dans la vie cellulaire.",
        views: 120,
        image: "https://th.bing.com/th/id/OIP.fJ7u34EFQUYDWKMOvie_YgHaHa?rs=1&pid=ImgDetMain",
        link: "/articles/biologie-cellulaire"
      }
    };
  },
  mounted() {
    this.setupScrollAnimations();
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
      this.$router.push(link);
    }
  }
};
</script>
  
