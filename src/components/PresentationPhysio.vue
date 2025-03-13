<template>
  <section class="section-presentation color">
    <header class="section-header color2">
      <h2 class="section-title color3">Section de Physiologie</h2>
      <p class="section-intro color4">
        Découvrez les fondements de la physiologie, la science qui étudie les fonctions du corps humain.
      </p>
    </header>

    <div class="section-content color5">
      <div class="overview-card color6">
        <h3>Faits clés en physiologie</h3>
        <ul>
          <li>Le cœur bat en moyenne 100 000 fois par jour.</li>
          <li>Le cerveau consomme environ 20% de l'énergie corporelle.</li>
          <li>Le sang parcourt environ 96 000 kilomètres de vaisseaux.</li>
          <li>Les poumons contiennent plus de 300 millions d'alvéoles.</li>
          <li>Le système digestif peut transformer les aliments en nutriments en moins de 6 heures.</li>
        </ul>
      </div>

      <div class="interactive-container">
        <div v-for="system in systems" :key="system.name" class="info-card system" @click="selectSystem(system)">
          <h3>{{ system.name }}</h3>
          <p>{{ system.description }}</p>
        </div>
      </div>

      <div v-if="selectedSystem" class="image-container">
        <h3>{{ selectedSystem.name }}</h3>
        <img :src="selectedSystem.image" :alt="selectedSystem.name" />
        <div class="button-container">
          <button @click="resetSelection">Réinitialiser la sélection</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PhysiologySection",
  data() {
    return {
      selectedSystem: null,
      systems: [
        {
          name: "Système nerveux",
          description: "Contrôle les fonctions vitales du corps et traite les informations sensorielles.",
          image: "https://media.istockphoto.com/id/451819237/fr/photo/syst%C3%A8me-nerveux.jpg?s=612x612&w=0&k=20&c=gAok-HtcLSxbF-7C6DuUjwbu3e-WdDpDW1ZdcmV1u48="
        },
        {
          name: "Système digestif",
          description: "Transforme les aliments en nutriments essentiels pour l'organisme.",
          image: "https://www.ikonet.com/fr/ledictionnairevisuel/images/qc/appareil-digestif-93460.jpg"
        },
        {
          name: "Système respiratoire",
          description: "Permet les échanges gazeux pour assurer l'oxygénation du corps.",
          image: "https://ressources.lacitec.on.ca/bioweb2/static/images/diagram_systeme_respiratoire.png"
        },
        {
          name: "Système cardiovasculaire",
          description: "Transporte le sang, les nutriments et l'oxygène dans tout le corps.",
          image: "https://media.gettyimages.com/id/97537745/fr/vectoriel/heart-and-circulatory-system-with-blood-vessels.jpg?s=612x612&w=gi&k=20&c=UWe1XqJR6S8yTMd687soGMVBvuZf2LxAbXo-Mu9BV74="
        },
        {
          name: "Système endocrinien",
          description: "Régule les fonctions corporelles à l'aide d'hormones.",
          image: "https://img-3.journaldesfemmes.fr/x0LzY-08M5LyEMts5gCKE01Jy5I=/1080x/smart/2caea2db5bc34e73a5b9bda11262a698/ccmcms-jdf/32912314.jpg"
        }
      ]
    };
  },
  methods: {
    selectSystem(system) {
      this.selectedSystem = system;
    },
    resetSelection() {
      this.selectedSystem = null;
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

.color { background: #F5F5DC !important; }
.color2 { background: #EAE7DC !important; }
.color3 { color: #333 !important; }
.color4 { color: #555 !important; }
.color6 { background: #D5C9B1 !important; }

.color5 {
  background: linear-gradient(45deg, #F5F5DC, #EAE7DC, #D5C9B1, #C4B79D) !important;
  background-size: 400% 400% !important;
  animation: movingBackground 10s infinite alternate !important;
  padding: 20px !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.color5:hover {
  transform: scale(1.02) !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15) !important;
}

.system {
  background: rgba(0, 0, 0, 0.05) !important;
  color: #333 !important;
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
  background: #C4B79D !important;
  color: #333 !important;
  padding: 10px 15px !important;
  border: none !important;
  border-radius: 5px !important;
  cursor: pointer !important;
  transition: 0.3s !important;
}

button:hover {
  background: #A89F87 !important;
  transform: scale(1.05) !important;
}
</style>
