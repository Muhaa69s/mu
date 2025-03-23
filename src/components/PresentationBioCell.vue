<template>
  <section class="section-presentation color5">
    <header class="section-header">
      <h2 class="section-title text-black">Section de Biologie Cellulaire</h2>

      <!-- 🎯 SLOT nommé "intro" pour afficher du contenu personnalisé -->
      <slot name="intro"></slot>

      <p class="section-intro text-black">
        Explorez les fondamentaux de la biologie cellulaire, une science qui étudie les composants de base de la vie.
        Découvrez les structures et fonctions essentielles des cellules.
      </p>
    </header>

    <div class="section-content">
      <div class="overview-card system">
        <h3 class="text-black">Faits clés en Biologie Cellulaire</h3>
        <ul>
          <li>Les cellules sont les unités fonctionnelles de base de la vie.</li>
          <li>Chaque cellule contient environ 2 mètres d'ADN.</li>
          <li>Le corps humain contient environ 37 000 milliards de cellules.</li>
          <li>Les mitochondries sont les centrales énergétiques des cellules.</li>
        </ul>
      </div>

      <!-- 🆕 Slot pour contenu supplémentaire après les faits clés -->
      <div class="slot-extra">
        <slot name="extra"></slot>
      </div>

      <div class="interactive-container">
        <div
          v-for="structure in structures"
          :key="structure.name"
          class="info-card system"
          @click="selectStructure(structure)"
        >
          <h3 class="text-black">{{ structure.name }}</h3>
          <p class="text-black">{{ structure.description }}</p>
        </div>
      </div>

      <div v-if="selectedStructure" class="image-container color">
        <h3 class="text-black">{{ selectedStructure.name }}</h3>
        <img :src="selectedStructure.image" :alt="selectedStructure.name" />
        <div class="button-container">
          <button @click="resetSelection">Réinitialiser la sélection</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BiologieCellulaireSection",
  data() {
    return {
      selectedStructure: null,
      structures: [
        {
          name: "Noyau",
          description: "Centre de commande de la cellule qui contient l'ADN.",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Nucleus_ER.png"
        },
        {
          name: "Mitochondrie",
          description: "Produit l'énergie nécessaire au fonctionnement cellulaire.",
          image: "https://micro.magnet.fsu.edu/cells/mitochondria/images/mitochondriafigure1.jpg"
        },
        {
          name: "Réticulum endoplasmique",
          description: "Assure la production et le transport des protéines et des lipides.",
          image: "https://monde.ccdmd.qc.ca/media/image1024/81323.jpg"
        },
        {
          name: "Membrane plasmique",
          description: "Contrôle les échanges entre la cellule et son environnement.",
          image: "https://i.ytimg.com/vi/mJZlFieiP_8/sddefault.jpg"
        },
        {
          name: "Lysosome",
          description: "Organite cellulaire chargé de la dégradation des déchets et des molécules inutiles.",
          image: "https://www.genome.gov/sites/default/files/tg/en/illustration/lysosome.jpg"
        }
      ]
    };
  },
  methods: {
    selectStructure(structure) {
      this.selectedStructure = structure;
    },
    resetSelection() {
      this.selectedStructure = null;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
@keyframes movingBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.color {
  background: #ECEFF1 !important;
}
.color2 {
  background: #CFD8DC !important;
}
.color3 {
  color: #37474F !important;
}
.color4 {
  color: #455A64 !important;
}
.color6 {
  background: #B0BEC5 !important;
}
.color5 {
  background: linear-gradient(45deg, #ECEFF1, #CFD8DC, #B0BEC5, #90A4AE) !important;
  background-size: 400% 400% !important;
  animation: movingBackground 12s infinite alternate !important;
  color: #37474F !important;
  padding: 30px !important;
  border-radius: 12px !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.color5:hover {
  transform: scale(1.01) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
}

.text-black {
  color: #37474F !important;
  font-weight: bold !important;
}

.section-header {
  text-align: center;
  margin-bottom: 25px;
}

.section-title {
  font-size: 2em;
  margin-bottom: 10px;
}

.section-intro {
  font-size: 1.1em;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

::v-deep [slot="intro"] {
  font-size: 1.1em;
  color: #37474F;
  font-style: italic;
  margin-bottom: 10px;
  display: block;
}

/* ✅ Style pour le slot "extra" */
.slot-extra {
  margin-top: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1em;
  color: #263238;
  font-style: italic;
}

/* Cartes */
.overview-card {
  background-color: #ffffff !important;
  padding: 20px !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
}

.interactive-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.system {
  background: rgba(0, 0, 0, 0.05) !important;
  color: #37474F !important;
  padding: 15px !important;
  border-radius: 10px !important;
  text-align: center !important;
  transition: all 0.3s ease-in-out !important;
  cursor: pointer !important;
  width: 240px;
}

.system:hover {
  background: rgba(0, 0, 0, 0.1) !important;
  transform: scale(1.05) !important;
}

.image-container {
  background-color: #ffffff !important;
  padding: 25px !important;
  margin-top: 25px;
  border-radius: 12px !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12) !important;
  text-align: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 15px 0;
}

.button-container {
  margin-top: 10px;
}

button {
  background: #90A4AE !important;
  color: #ffffff !important;
  border: none !important;
  padding: 10px 18px !important;
  border-radius: 6px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: 0.3s !important;
}

button:hover {
  background: #78909C !important;
  transform: scale(1.05) !important;
}
</style>
