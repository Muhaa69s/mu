<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="header-title">
        For'Science — Explorez la science autrement
      </h1>
      <div class="header-description">
        <p>
          Bienvenue sur <strong>For'Science</strong>, une plateforme collaborative dédiée à la découverte, au partage et à la compréhension des sciences médicales et biologiques.  
          Avec nous, embarquez dans une aventure scientifique immersive et engageante.
        </p>
        <p>
          Explorez des contenus interactifs, plongez dans des études de cas captivantes, 
          suivez les découvertes médicales récentes et engagez-vous dans des discussions enrichissantes.  
          Notre mission ? Transformer la science en une expérience vivante et accessible à tous.
        </p>
        <p>
          Ensemble, repoussons les frontières de la connaissance scientifique !
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Section principale */
.header {
  background: linear-gradient(135deg, #1a237e, #0d47a1);
  padding: 80px 20px;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.header-title {
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  font-size: 56px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0 0 20px;
  transition: transform 0.3s ease, color 0.4s ease, text-shadow 0.4s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.header-title:hover {
  color: #ff4081;
  transform: scale(1.1);
  text-shadow: 0 0 30px #2bac9a, 0 0 40px #1d9e4e;
  cursor: pointer;
}

.header-description {
  font-size: 20px;
  color: #ffffff;
  line-height: 1.8;
  margin-top: 20px;
  padding: 25px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.4s ease, background-color 0.3s ease;
}

.header-description:hover {
  background-color: rgba(0, 0, 0, 0.8);
  transform: scale(1.02);
}

/* Particules animées dans le fond */
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 80%);
  opacity: 0.4;
  animation: particles 15s infinite ease-in-out alternate;
  z-index: 0;
}

@keyframes particles {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}
</style>
