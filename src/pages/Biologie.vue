<script setup lang="ts">
import BioArtPre from '../components/BioArtPre.vue';
import PresentationBioCell from '../components/PresentationBioCell.vue';
import boutonRetour from '../components/boutonRetour.vue';
</script>

<template>
  <div>
    <boutonRetour textBouton="Revenir à l'accueil" />
    <PresentationBioCell />
    <BioArtPre />
  </div>
</template>
