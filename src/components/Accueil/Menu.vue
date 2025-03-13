<template>
  <div>
    <!-- Barre de navigation -->
    <div class="navbar" :class="{ 'navbar-small': isScrolled }">
      <div class="navbar-links">
        <!-- Icône Maison -->
        <button class="home-icon" @click="goToHome">🏠</button>

        <!-- Navigation utilisant vue-router -->
        <button v-for="(item, index) in menuItems" 
                :key="index"
                @click="navigateToPage(item.route)" 
                :class="{ active: page === item.route }">
          {{ item.icon }} <span>{{ item.label }}</span>
        </button>
      </div>
      
      <!-- Bouton "+" pour une future fonctionnalité -->
      <button class="plus-button" @click="createArticle">➕</button>
    </div>

   <BoutonRetour textBouton = 'Retour'> </BoutonRetour>
  </div>
</template>

<script>
import BoutonRetour from '../boutonRetour.vue';

export default {
  data() {
    return {
      page: '',
      isScrolled: false,
      menuItems: [
        { route: 'physiologie', label: 'Physiologie', icon: '🧬' },
        { route: 'biologie', label: 'Biologie', icon: '🔬' },
        { route: 'immunologie', label: 'Immunologie', icon: '🛡️' }
      ]
    };
  },
  methods: {
    goBack() {
      this.resetPage();
    },
    goToHome() {
      this.resetPage();
    },
    navigateToPage(page) {
      this.page = page;
      this.$router.push(`/${page}`);
    },
    createArticle() {
      alert("Fonction de création d'article en cours de développement !");
    },
    resetPage() {
      this.page = '';
      this.$router.push('/');
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 28, 63, 0.85);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 0 4px 25px rgba(0, 128, 255, 0.3);
  border-bottom: 2px solid rgba(0, 206, 209, 0.5);
  z-index: 1000;
}

.navbar-small {
  padding: 8px 15px;
  background: rgba(0, 28, 63, 0.95);
  box-shadow: 0 2px 15px rgba(0, 128, 255, 0.3);
}

.navbar-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.navbar-links button {
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(135deg, #00c9ff, #92fe9d);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.navbar-links button:hover {
  background: linear-gradient(135deg, #d16ba5, #86a8e7, #5ffbf1);
  transform: scale(1.1);
}

.plus-button {
  font-size: 20px;
  background: linear-gradient(135deg, #5ffbf1, #92fe9d);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 255, 191, 0.5);
  transition: all 0.4s ease;
}

.plus-button:hover {
  background: linear-gradient(135deg, #d16ba5, #86a8e7);
  transform: scale(1.1);
}

.content {
  padding: 40px;
  text-align: center;
  margin-top: 80px;
  background: radial-gradient(circle at top, #020024, #090979, #00d4ff);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 255, 255, 0.3);
  max-width: 80%;
  margin: 30px auto;
}
</style>
