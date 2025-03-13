<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h2 class="footer-title">4'Science Forum</h2>
        <p class="footer-text">Un espace d'échange et de collaboration pour les passionnés de science.</p>
      </div>
      
      <div class="footer-right">
        <p class="footer-contact">Contactez-nous : contact@4scienceforum.com</p>
        <div class="social-icons">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
          <i class="fab fa-twitter" aria-hidden="true"></i>
          <i class="fab fa-mastodon" aria-hidden="true"></i>
          <i class="fab fa-bluesky" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left, .footer-right {
  flex: 1;
  min-width: 250px;
  margin: 10px;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-text, .footer-contact {
  font-size: 0.9rem;
  opacity: 0.8;
}

.social-icons {
  display: flex;
  gap: 10px;
  justify-content: center;
  font-size: 1.2rem;
}

.social-icons i {
  cursor: pointer;
  transition: transform 0.3s;
}

.social-icons i:hover {
  transform: scale(1.2);
  color: #64b5f6;
}
</style>
