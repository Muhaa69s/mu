<script setup lang="ts">
import BioArtPre from '../components/BioArtPre.vue';
import PresentationBioCell from '../components/PresentationBioCell.vue';
import boutonRetour from '../components/boutonRetour.vue';
</script>

<template>
  <div>
    <boutonRetour textBouton="Revenir à l'accueil" />

    <PresentationBioCell>
      <template #intro>
        <p>✨ Petite introduction personnalisée avec un message spécial !</p>
      </template>

      <template #extra>
        <p>📌 Info bonus : Saviez-vous que certaines cellules peuvent vivre toute une vie ?</p>
      </template>
    </PresentationBioCell>

    <BioArtPre />
  </div>
</template>
