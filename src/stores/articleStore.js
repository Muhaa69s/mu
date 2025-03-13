import { defineStore } from 'pinia';

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    articleId: 1,
    articles: JSON.parse(localStorage.getItem('articles')) || [
      {
        id: 1,
        title: "Le système cardiovasculaire",
        description: "Fonctionnement du cœur et des vaisseaux sanguins, ainsi que les principales pathologies cardiovasculaires.",
        image: "https://thumbs.dreamstime.com/b/cardiovasculair-systeem-5563888.jpg",
        views: 175,
        link: "/articles/systeme-cardiovasculaire",
        content: "Le système cardiovasculaire transporte le sang dans le corps..."
      },
      {
        id: 2,
        title: "Les hormones et leur régulation",
        description: "Le rôle essentiel des hormones dans le maintien de l'équilibre physiologique du corps.",
        image: "https://thumbs.dreamstime.com/z/hormones-work-vector-29016540.jpg",
        views: 90,
        link: "/articles/hormones-regulation",
        content: "Les hormones contrôlent de nombreuses fonctions..."
      },
      {
        id: 3,
        title: "KK",
        description: "KK.",
        image: "https://thumbs.dreamstime.com/z/hormones-work-vector-29016540.jpg",
        views: 90,
        link: "/articles/hormones-regulation",
        content: "Texte de l'article Coucou."
      }
    ]
  }),

  actions: {
    updateArticle(id, title, content) {
      const article = this.articles.find(article => article.id === id);
      if (article) {
        article.title = title;
        article.content = content;
        this.saveArticles();
      }
    },
    saveArticles() {
      localStorage.setItem('articles', JSON.stringify(this.articles));
    }
  }
});
