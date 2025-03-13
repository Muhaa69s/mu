<template>
  <section class="recent-articles">
    <h1 class="main-title">Nos articles récents</h1>

    <!-- Barre de recherche -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Rechercher un article..."
        @input="filterArticles"
      />
    </div>

    <!-- Carrousel d'articles -->
    <div v-if="filteredNewArticles.length" class="carousel-container">
      <button @click="prevSlide" class="carousel-arrow left-arrow" :disabled="currentIndex === 0">&#x25C0;</button>
      <div class="carousel">
        <div
          v-for="article in visibleArticles"
          :key="article.id"
          class="carousel-item"
        >
          <h3>{{ article.title }}</h3>
          <p>
            {{ getContentSnippet(article) }}
            <button @click="toggleContent(article)">
              {{ article.showFullContent ? 'Lire moins' : 'Lire plus' }}
            </button>
          </p>
          <img :src="article.image" :alt="`Image pour l'article ${article.title}`" class="article-image" />
          <div class="article-footer">
            <router-link :to="`/article/${article.id}`">Lire plus</router-link>
            <span class="views">
              <i class="icon-eye">👁️</i> {{ article.views }} vues
            </span>
          </div>
        </div>
      </div>
      <button @click="nextSlide" class="carousel-arrow right-arrow" :disabled="currentIndex + itemsPerPage >= filteredNewArticles.length">&#x25B6;</button>
    </div>
    
    <div v-else class="no-articles">
      <p>Aucun article trouvé. Veuillez réessayer avec un autre terme.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleCarousel",
  data() {
    return {
      searchQuery: "",
      newArticles: [
        {
          id: 1,
          title: "Introduction à la Biologie Cellulaire",
          content: "Les bases de la biologie cellulaire, y compris les fonctions des organites et leur rôle fondamental dans la vie cellulaire.",
          views: 120,
          showFullContent: false,
          image: "https://th.bing.com/th/id/OIP.fJ7u34EFQUYDWKMOvie_YgHaHa?rs=1&pid=ImgDetMain"
        },
        {
          id: 4,
          title: "Le système cardiovasculaire",
          content: "Fonctionnement du cœur et des vaisseaux sanguins, ainsi que les principales pathologies cardiovasculaires.",
          views: 175,
          showFullContent: false,
          image: "https://thumbs.dreamstime.com/b/cardiovasculair-systeem-5563888.jpg"
        },
        {
          id: 5,
          title: "Les hormones et leur régulation",
          content: "Le rôle essentiel des hormones dans le maintien de l'équilibre physiologique du corps.",
          views: 90,
          showFullContent: false,
          image: "https://thumbs.dreamstime.com/z/hormones-work-vector-29016540.jpg"
        },
        {
          id: 6,
          title: "Immunologie : système de défense",
          content: "Analyse des mécanismes de défense du corps contre les agents pathogènes.",
          views: 250,
          showFullContent: false,
          image: "https://www.illustration-medicale.org/wp-content/uploads/2016/05/illustration-medicale-scientifique-immunologie-02.jpg"
        }
      ],
      currentIndex: 0,
      filteredNewArticles: [],
      itemsPerPage: 2
    };
  },
  computed: {
    visibleArticles() {
      return this.filteredNewArticles.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
    }
  },
  mounted() {
    this.filteredNewArticles = [...this.newArticles];
  },
  methods: {
    toggleContent(article) {
      article.showFullContent = !article.showFullContent;
    },
    getContentSnippet(article) {
      return article.showFullContent ? article.content : article.content.slice(0, 100) + '...';
    },
    filterArticles() {
      this.filteredNewArticles = this.newArticles.filter(article =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.currentIndex = 0;
    },
    nextSlide() {
      if (this.currentIndex + this.itemsPerPage < this.filteredNewArticles.length) {
        this.currentIndex += this.itemsPerPage;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= this.itemsPerPage;
      }
    }
  }
};
</script>


<style scoped>
.recent-articles {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.main-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 80%;
  scroll-behavior: smooth;
}

.carousel-item {
  min-width: 50%;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  padding: 15px;
  text-align: left;
  transition: transform 0.3s ease-in-out;
}

.carousel-item.active {
  transform: scale(1.05);
}

.carousel-item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.carousel-item p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}

.article-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-footer a {
  text-decoration: none;
  font-weight: bold;
  color: #007bff;
}

.views {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #777;
}

.icon-eye {
  margin-right: 5px;
}

.carousel-arrow {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
}

.carousel-arrow:hover {
  color: #007bff;
}

.left-arrow {
  position: absolute;
  left: 0;
}

.right-arrow {
  position: absolute;
  right: 0;
}

.no-articles {
  font-size: 1.2rem;
  color: #777;
  margin-top: 20px;
}
</style>