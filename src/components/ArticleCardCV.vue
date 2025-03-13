<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>

    <h3>Modifier l'article :</h3>
    <form @submit.prevent="updateArticle">
      <label for="title">Titre :</label>
      <input id="title" v-model="updatedTitle" placeholder="Nouveau titre" />

      <label for="content">Contenu :</label>
      <textarea id="content" v-model="updatedContent" placeholder="Nouveau contenu"></textarea>

      <button type="submit">Mettre à jour</button>
    </form>
  </div>
</template>

<script>
import { useArticleStore } from '../stores/articleStore'; // Correction du chemin
import { ref, computed } from 'vue';

export default {
  props: {
    articleId: Number, // On passe l'ID en prop pour identifier l'article à modifier
  },
  setup(props) {
    const articleStore = useArticleStore();

    // Trouver l'article à partir de son ID
    const article = computed(() => 
      articleStore.articles.find(a => a.id === props.articleId) || { title: '', content: '' }
    );

    // Variables pour stocker les nouvelles données
    const updatedTitle = ref(article.value.title);
    const updatedContent = ref(article.value.content);

    // Fonction de mise à jour
    const updateArticle = () => {
      articleStore.updateArticle(props.articleId, updatedTitle.value, updatedContent.value);
    };

    return {
      article,
      updatedTitle,
      updatedContent,
      updateArticle,
    };
  },
};
</script>
