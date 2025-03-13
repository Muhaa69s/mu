<template>
  <section class="section-presentation color5">
    <header class="section-header">
      <h2 class="section-title text-black">Section de Biologie Cellulaire</h2>
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
  animation: movingBackground 10s infinite alternate !important;
  color: #37474F !important;
  padding: 20px !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.color5:hover {
  transform: scale(1.02) !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15) !important;
}

.text-black {
  color: #37474F !important;
  font-weight: bold !important;
}

.system {
  background: rgba(0, 0, 0, 0.05) !important;
  color: #37474F !important;
  padding: 15px !important;
  border-radius: 8px !important;
  text-align: center !important;
  transition: 0.3s ease-in-out !important;
  cursor: pointer !important;
}

.system:hover {
  background: rgba(0, 0, 0, 0.1) !important;
  transform: scale(1.05) !important;
}

button {
  background: #90A4AE !important;
  color: #37474F !important;
  padding: 10px 15px !important;
  border: none !important;
  border-radius: 5px !important;
  cursor: pointer !important;
  transition: 0.3s !important;
}

button:hover {
  background: #78909C !important;
  transform: scale(1.05) !important;
}
</style>