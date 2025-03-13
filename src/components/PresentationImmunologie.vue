<template>
    <section class="section-presentation">
      <header class="section-header">
        <h2 class="section-title">Section d'Immunologie</h2>
        <p class="section-intro">
          Découvrez les mécanismes fascinants du système immunitaire, qui protège l'organisme contre les infections et maintient l'équilibre de la santé.
        </p>
      </header>
  
      <div class="section-content">
        <div class="overview-card">
          <h3>Faits clés en Immunologie</h3>
          <ul>
            <li>Le système immunitaire est composé de cellules, tissus et organes spécialisés.</li>
            <li>Les lymphocytes T et B jouent un rôle central dans la défense immunitaire.</li>
            <li>Les anticorps neutralisent les agents pathogènes.</li>
            <li>La mémoire immunitaire permet une réponse rapide lors d'une réinfection.</li>
          </ul>
        </div>
  
        <div class="interactive-container">
          <div
            v-for="structure in structures"
            :key="structure.name"
            class="info-card"
            @click="selectStructure(structure)"
          >
            <h3>{{ structure.name }}</h3>
            <p>{{ structure.description }}</p>
          </div>
        </div>
  
        <div v-if="selectedStructure" class="image-container">
          <h3>{{ selectedStructure.name }}</h3>
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
    name: "ImmunologieSection",
    data() {
      return {
        selectedStructure: null,
        structures: [
          {
            name: "Lymphocyte T",
            description: "Coordonne la réponse immunitaire et détruit les cellules infectées.",
            image: "https://media.istockphoto.com/id/538032878/fr/photo/cellule-t-plan.jpg?s=612x612&w=0&k=20&c=LZK53dbFa6FrUhc2Njk6y51RKLHLKoG-GXsf8dfU-hM="
          },
          {
            name: "Lymphocyte B",
            description: "Produit des anticorps pour neutraliser les agents pathogènes.",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Human_B_Lymphocyte_-_NIAID.jpg"
          },
          {
            name: "Macrophage",
            description: "Dévore les agents pathogènes et active d'autres cellules immunitaires.",
            image: "https://cdn.britannica.com/89/20889-050-9137C72F/Macrophages-components-immune-system-bacteria-particles.jpg"
          },
          {
            name: "Anticorps",
            description: "Protéines spécialisées qui ciblent et neutralisent les antigènes.",
            image: "https://ichef.bbci.co.uk/news/1024/branded_afrique/A134/production/_120586214_206e9175-a2f5-419a-a11f-dce898e4b0ba.jpg"
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
      }
    }
  };
  </script>
  
