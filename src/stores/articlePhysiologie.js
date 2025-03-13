import { defineStore } from 'pinia';

export const useArticlePhysiologieStore = defineStore('articlePhysiologieStore', {
  state: () => ({
    articles: JSON.parse(localStorage.getItem('articlesPhysiologie')) || [
      {
        id: 1,
        title: "Le Système Cardiovasculaire",
        longDescription: 
          "Le système cardiovasculaire, aussi appelé système circulatoire, est essentiel au bon fonctionnement de l'organisme. " +
          "Il assure le transport de l'oxygène, des nutriments et des hormones vers les cellules tout en éliminant les déchets métaboliques. " +
          "Composé du cœur, des vaisseaux sanguins (artères, veines et capillaires) et du sang, ce réseau complexe joue un rôle fondamental dans " +
          "le maintien de l'homéostasie. Son dysfonctionnement peut entraîner des maladies cardiovasculaires, première cause de mortalité dans le monde.",
        summary: [
          "1. Composition du système cardiovasculaire : cœur, vaisseaux sanguins et sang",
          "2. Fonctionnement du cœur : cycle cardiaque et régulation du rythme",
          "3. Circulation sanguine : grande et petite circulation",
          "4. Importance de la circulation pour l'oxygénation des tissus",
          "5. Pathologies cardiovasculaires : hypertension, infarctus, AVC",
          "6. Prévention et modes de vie sains : alimentation, sport, gestion du stress"
        ],
        link: "/articles/physiologie/systeme-cardiovasculaire"
      },
      {
        id: 2,
        title: "Les Hormones et leur Régulation",
        longDescription: 
          "Les hormones sont des messagers chimiques essentiels à la régulation des fonctions corporelles. " +
          "Sécrétées par les glandes endocrines (hypophyse, thyroïde, surrénales, pancréas, etc.), elles influencent de nombreux processus biologiques, " +
          "notamment la croissance, le métabolisme, la reproduction et la réponse au stress. Un déséquilibre hormonal peut entraîner des troubles " +
          "importants, comme le diabète, l'hyperthyroïdie ou les déséquilibres hormonaux liés au stress.",
        summary: [
          "1. Introduction au système endocrinien : rôle et fonctionnement",
          "2. Les principales hormones et leurs effets sur l'organisme",
          "3. Mécanismes de régulation hormonale : feedback positif et négatif",
          "4. Interaction entre hormones et métabolisme",
          "5. Troubles hormonaux : diabète, troubles thyroïdiens, déséquilibres hormonaux",
          "6. Approches thérapeutiques : traitements hormonaux, impact de l’alimentation et du mode de vie"
        ],
        link: "/articles/physiologie/hormones-regulation"
      }
    ]
  }),

  actions: {
    updateArticle(id, newTitle, newLongDescription, newSummary) {
      const article = this.articles.find(article => article.id === id);
      if (article) {
        article.title = newTitle;
        article.longDescription = newLongDescription;
        article.summary = newSummary;
        this.saveArticles();
      }
    },
    saveArticles() {
      localStorage.setItem('articlesPhysiologie', JSON.stringify(this.articles));
    }
  }
});
