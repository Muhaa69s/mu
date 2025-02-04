<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="presentation">
    <!-- Premier en-tête avec le nom du forum centré et options d'authentification à droite -->
    <header class="header">
      <h1 class="forum-title">For'Science</h1>
      <nav class="auth-nav">
        <ul>
          <li><a href="#">S'identifier</a></li>
          <li><a href="#">S'inscrire</a></li>
        </ul>
      </nav>
    </header>
    
    <section class="pathologies">
    <h2>Pathologies</h2>
    <div class="pathology-links">
      <RouterLink to="/pathologie1">Pathologie 1</RouterLink>
      <RouterLink to="/pathologie2">Pathologie 2</RouterLink>
      <RouterLink to="/pathologie3">Pathologie 3</RouterLink>
    </div>
  </section>

   
    <!-- Section de présentation développée -->
    <div class="content">
      <section class="introduction">
        <h2>Bienvenue sur For'Science</h2>
        <p>
          For'Science est une plateforme unique dédiée aux discussions scientifiques 
          sur diverses pathologies. Nous mettons à votre disposition des ressources 
          précieuses, des études de cas approfondies, et des échanges enrichissants 
          entre professionnels et passionnés de médecine.
        </p>
        <p>
          Nos forums vous permettent de poser des questions, d'obtenir des réponses 
          d'experts, et de rester informé des dernières avancées médicales.
        </p>
      </section>

    

      <!-- Section de témoignages -->
      <section class="testimonials">
        <h2>Ils parlent de nous</h2>
        <blockquote>
          "For'Science m'a permis de mieux comprendre ma pathologie grâce aux échanges avec des experts." 
          <span>- Sophie M., patiente</span>
        </blockquote>
        <blockquote>
          "Une communauté bienveillante où l'on peut partager et apprendre continuellement." 
          <span>- Dr. Pierre L., cardiologue</span>
        </blockquote>
      </section>

       <!-- Section de statistiques -->
       <section class="statistics">
        <h2>Nos chiffres clés</h2>
        <ul>
          <li><strong>+10,000</strong> membres actifs</li>
          <li><strong>+5,000</strong> discussions en cours</li>
          <li><strong>+100</strong> experts médicaux participants</li>
          <li><strong>24/7</strong> support communautaire</li>
        </ul>
      </section>

      <section class="news">
  <h2>Actualités Scientifiques</h2>
  <p>Restez informé des dernières découvertes, avancées et événements scientifiques qui façonnent notre avenir.</p>
  <ul>
    <li><a href="#">La découverte de nouvelles cellules dans le cerveau humain</a></li>
    <li><a href="#">Les dernières avancées en traitement du cancer</a></li>
    <li><a href="#">Conférence sur l'intelligence artificielle en médecine</a></li>
  </ul>
</section>


      <!-- Section des articles récents -->
      <section class="recent-articles">
        <h2>Derniers articles publiés</h2>
        <div class="article-list">
          <article>
            <h3>Les dernières avancées sur la maladie de Parkinson</h3>
            <p>Découvrez les traitements innovants et les perspectives futures...</p>
            <a href="#">Lire plus</a>
          </article>
          <article>
            <h3>Comprendre les facteurs de risque du diabète</h3>
            <p>Une analyse approfondie des causes et de la prévention...</p>
            <a href="#">Lire plus</a>
          </article>
        </div>
      </section>

      <section class="resources">
  <h2>Ressources Éducatives</h2>
  <p>Accédez à une sélection de ressources pour enrichir vos connaissances scientifiques.</p>
  <ul>
    <li><a href="#">Cours en ligne : Introduction à la biologie moléculaire</a></li>
    <li><a href="#">Livre recommandé : La Physique des Particules</a></li>
  </ul>
</section>


      <!-- Section FAQ -->
      <section class="faq">
        <h2>Questions Fréquemment Posées</h2>
        <details>
          <summary>Comment s'inscrire sur le forum ?</summary>
          <p>Cliquez sur le bouton "S'inscrire" en haut à droite et suivez les instructions.</p>
        </details>
        <details>
          <summary>Le forum est-il gratuit ?</summary>
          <p>Oui, l'accès aux discussions et aux ressources est entièrement gratuit.</p>
        </details>
        <details>
          <summary>Puis-je poser des questions anonymement ?</summary>
          <p>Oui, une option de publication anonyme est disponible.</p>
        </details>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Conteneur principal */
.presentation {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to bottom, #74b9ff, #55efc4);
  padding: 50px;
  border-radius: 20px;
  max-width: 1100px;
  margin: 0 auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}

.presentation:hover {
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

/* Premier en-tête */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c3e50;
  padding: 30px;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.forum-title {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.auth-nav {
  position: absolute;
  right: 20px;
}

.auth-nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.auth-nav ul li a {
  color: #1abc9c;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.auth-nav ul li a:hover {
  color: #f1c40f;
  transform: translateY(-5px);
}

/* Section des statistiques */
.statistics ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.statistics ul li {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 15px 0;
  color: #34495e;
  transition: color 0.3s ease;
}

.statistics ul li:hover {
  color: #1abc9c;
}

/* Section des témoignages */
.testimonials blockquote {
  font-style: italic;
  background: #ecf0f1;
  padding: 20px;
  border-left: 5px solid #1abc9c;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #7f8c8d;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

/* Section des articles récents */
.article-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.article-list article {
  background: #1abc9c;
  padding: 20px;
  border-radius: 10px;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 48%;
  margin-bottom: 20px;
}

.article-list article:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.article-list article h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.article-list article p {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Section FAQ */
.faq details {
  background: #ecf0f1;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.faq summary {
  font-weight: bold;
  cursor: pointer;
  font-size: 1.2rem;
  color: #2c3e50;
}

.faq details[open] summary {
  color: #1abc9c;
}

.faq summary:hover {
  text-decoration: underline;
}

/* Section Actualités Scientifiques */
.news {
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.news h2 {
  font-size: 2.2rem;
  color: #34495e;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.news p {
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.news ul {
  list-style-type: none;
  padding: 0;
}

.news ul li {
  background-color: #ecf0f1;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.news ul li:hover {
  background-color: #f39c12;
  color: white;
  transform: translateY(-3px);
}

.news ul li a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: bold;
}

.news ul li a:hover {
  color: white;
}

.news ul li a:active {
  color: #f1c40f;
}

/* Section Ressources Éducatives */
.resources {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.resources h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.resources p {
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.resources ul {
  list-style-type: none;
  padding: 0;
}

.resources ul li {
  background-color: #ecf0f1;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.resources ul li:hover {
  background-color: #1abc9c;
  color: white;
  transform: translateY(-3px);
}

.resources ul li a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: bold;
}

.resources ul li a:hover {
  color: white;
}

.resources ul li a:active {
  color: #968b5e;
}

.pathologies {
  text-align: center;
  padding: 20px;
  background-color: #1c97c7;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.pathologies h2 {
  color: #050f47;
  font-size: 1.5em;
  margin-bottom: 15px;
}

.pathology-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.pathology-links a {
  text-decoration: none;
  color: #42b883;
  font-size: 1.2em;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: #ffffff;
  border: 1px solid #42b883;
}

.pathology-links a:hover {
  background-color: #42b883;
  color: #ffffff;
}
</style>
