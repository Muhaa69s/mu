import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';

// 📌 Importation des pages principales
import PhysiologieMain from './pages/PhysiologieMain.vue';
import Immunologie from './pages/Immunologie.vue';
import Biologie from './pages/Biologie.vue';

// 📌 Importation des composants globaux
// 📂 Import des composants dans les sous-dossiers
import Menu from './components/Accueil/Menu.vue';
import Opinions from './components/Accueil/opinions.vue';

import SystemeCardiovasculaireArticle from './components/Article/SystemeCardiovasculaireArticle.vue'; // Ajout du composant

import Enbas from './components/ElementGeneral/Enbas.vue';
import Entete from './components/ElementGeneral/Entete.vue';

// 📂 Import des composants qui sont directement dans "components"
import Article from './components/Article.vue';
import ArticleCardCV from './components/ArticleCardCV.vue';
import BioArtPre from './components/BioArtPre.vue';
import ImArtPre from './components/ImArtPre.vue';
import Pb from './components/Pb.vue';
import PhArtPre from './components/PhArtPre.vue';
import PresentationBioCell from './components/PresentationBioCell.vue';
import PresentationImmunologie from './components/PresentationImmunologie.vue';
import PresentationPhysio from './components/PresentationPhysio.vue';
import HelloWorld from './components/HelloWorld.vue';
import apiActivite from './components/apiActivite.vue';
import HormonesRegulation from './components/article/HormonesRegulation.vue';
import BiologieCellulaire from './components/article/BiologieCellulaire.vue';



// 📌 Import du style global
import "./style.css";

// 📌 Création du store Pinia
const pinia = createPinia();

// 📌 Définition des routes
const routes = [
  { path: '/', component: HelloWorld, name: 'home' },
  { path: '/physiologie', component: PhysiologieMain, name: 'physiologie' },
  { path: '/immunologie', component: Immunologie, name: 'immunologie' },
  { path: '/biologie', component: Biologie, name: 'biologie' },
  { path: '/articles/systeme-cardiovasculaire', component: SystemeCardiovasculaireArticle, name: 'systeme-cardiovasculaire' }, // Ajout de la route pour l'article
  { path: '/articles/hormones-regulation', component : HormonesRegulation, name: 'hormones-regulation'},
  { path: '/articles/biologie-cellulaire', component : BiologieCellulaire, name : 'biologie-cellulaire'},
];

// Création du router
export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 📌 Création de l'application Vue
const app = createApp(App);

// 📌 Utilisation de Pinia
app.use(pinia);

// 📌 Enregistrement des composants globaux
const components = {
  Entete,
  Menu,
  Enbas,
  Pb,
  Opinions,
  Article,
  PresentationPhysio,
  PresentationBioCell,
  PresentationImmunologie,
  BioArtPre,
  ImArtPre,
};

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component);
});

// 📌 Utilisation du router et montage de l'application
app.use(router);
app.mount('#app');
