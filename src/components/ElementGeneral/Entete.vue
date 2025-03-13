<template>
  <header class="header">
    <h1 class="header-title">4'Science</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Style global du header */
.header {
  background: linear-gradient(135deg, #00bcd4, #3f51b5); /* Dégradé dynamique */
  padding: 80px 0;
  text-align: center;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.15);
  position: relative;
  border-bottom: 6px solid #ff4081;
  z-index: 0;
  overflow: hidden;
}

/* Image de fond légèrement visible */
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 70%;
  width: 300%;
  height: 300%;
  background: url('https://img.freepik.com/free-vector/hand-drawn-science-pattern_1284-708.jpg?t=st=1738870579~exp=1738874179~hmac=c019b63a126f02843b8d6aefebaa91b88be84a8a3107c698bbaeb06c8fefda79&w=826');
  opacity: 0.12;
  transform: translateX(-50%) rotate(45deg);
  animation: moveParallax 12s infinite linear;
  user-select: none;
  pointer-events: none;
}

@keyframes moveParallax {
  0% {
    transform: translateX(-50%) rotate(45deg) translateY(0);
  }
  50% {
    transform: translateX(-50%) rotate(45deg) translateY(-30px);
  }
  100% {
    transform: translateX(-50%) rotate(45deg) translateY(0);
  }
}

/* Particules animées */
.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 80%);
  opacity: 0.3;
  animation: particles 15s infinite ease-in-out alternate;
}

@keyframes particles {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

.header-title {
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  font-size: 56px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, color 0.4s ease, text-shadow 0.4s ease;
}

/* Effet lumineux progressif au survol */
.header-title:hover {
  color: #ff4081;
  transform: scale(1.08) rotate(-1deg);
  text-shadow: 0 0 10px #2bac9a, 0 0 40px #1d9e4e, 0 0 60px #ff4081;
}
</style>
