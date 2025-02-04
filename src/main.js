import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import DiscoverMore from './components/DiscoverMore.vue';

// Définition des routes de l'application
const routes = [
  { path: '/', component: HelloWorld },  
  { path: '/discovermore', component: DiscoverMore },  // Correction de l'URL pour plus de cohérence
];

// Création du routeur Vue
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création et montage de l'application Vue avec le routeur
createApp(App).use(router).mount('#app');
