<template>
  <section class="article-section">
    <header class="section-header">
      <h2 class="section-title">Articles de Physiologie</h2>
      <p class="section-intro">
        Plongez dans une sélection d'articles captivants sur les systèmes du corps humain et les mécanismes qui permettent de maintenir une vie saine.
      </p>
    </header>

    <div class="articles-container">
      <article v-for="article in articleStore.articles" :key="article.id" class="article-card fade-in">
        <img :src="article.image" :alt="article.title" class="article-image">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <span class="article-views">{{ article.views }} vues</span>
        <button @click="goToArticle(article)" class="read-button">Lire l'article</button>
      </article>
    </div>
  </section>
</template>

<script>
import { useArticleStore } from "../stores/articleStore"; // ✅ Chemin corrigé
import { onMounted } from "vue";
import { router } from "../main";
export default {
  name: "PhysiologyArticlesSection",
  setup() {
    const articleStore = useArticleStore(); // ✅ Utilisation correcte avec setup()

    onMounted(() => {
      setupScrollAnimations();
      console.log(articleStore.articles);
    });

    const setupScrollAnimations = () => {
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
    };

    const goToArticle=(article)=> {
      articleStore.articleId = article.id
      router.push(article.link);
    }

    return { articleStore, goToArticle };
  },
};
</script>

<style scoped>
.article-section {
  padding: 20px;
  text-align: center;
}

.section-header {
  margin-bottom: 20px;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
}

.section-intro {
  font-size: 1.2rem;
  color: gray;
}

.articles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.article-card {
  width: 300px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.3s ease-in-out;
}

.article-card:hover {
  transform: scale(1.05);
}

.article-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.article-views {
  font-size: 0.9rem;
  color: #666;
}

.read-button {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.read-button:hover {
  background-color: #0056b3;
}

/* Animation d'apparition */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
