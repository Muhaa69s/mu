<template>
  <section class="faq-testimonials">
    <section class="testimonials">
      <h2>Ils parlent de nous</h2>

      <!-- Transition sur le témoignage actif -->
      <transition name="fade-scale" mode="out-in">
        <div class="testimonial-wrapper" :key="state.currentTestimonialIndex">
          <blockquote class="styled-blockquote">
            "{{ currentTestimonial.text }}"
            <span>- {{ currentTestimonial.author }}</span>
          </blockquote>

          <div class="rating-stars">
            <span
              v-for="starIndex in 5"
              :key="starIndex"
              @click="rateCurrentTestimonial(starIndex)"
              class="star"
              :class="{ filled: currentTestimonial.rating >= starIndex }"
            >
              ★
            </span>
          </div>
        </div>
      </transition>

      <div class="navigation-arrows">
        <button @click="showPreviousTestimonial">⬅</button>
        <button @click="showNextTestimonial">➡</button>
      </div>

      <p class="read-more">Lisez les avis</p>

      <div class="add-testimonial">
        <h3>Ajoutez un avis</h3>
        <input type="text" v-model="state.newAuthor" placeholder="Qui êtes-vous ?" class="input-field" />
        <textarea v-model="state.newText" placeholder="Votre avis :" class="input-field"></textarea>
        <button @click="addTestimonial" class="submit-button">Envoyer</button>
      </div>
    </section>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue';

const state = reactive({
  testimonials: [
    {
      text: "For'Science m'a permis de mieux comprendre ma pathologie grâce aux échanges avec des experts.",
      author: "Sophie M., patiente",
      rating: 0
    },
    {
      text: "Une communauté bienveillante où l'on peut partager et apprendre continuellement.",
      author: "Dr. Pierre L., cardiologue",
      rating: 0
    },
    {
      text: "Une plateforme enrichissante pour découvrir les dernières avancées scientifiques.",
      author: "Camille B., chercheuse",
      rating: 0
    },
    {
      text: "J'ai trouvé des ressources utiles pour accompagner mes patients.",
      author: "Dr. Nadia K., médecin généraliste",
      rating: 0
    }
  ],
  currentTestimonialIndex: 0,
  newAuthor: '',
  newText: ''
});

// Utilisation de computed pour calculer dynamiquement le témoignage actuel
const currentTestimonial = computed(() => state.testimonials[state.currentTestimonialIndex]);

function showNextTestimonial() {
  state.currentTestimonialIndex = (state.currentTestimonialIndex + 1) % state.testimonials.length;
}

function showPreviousTestimonial() {
  state.currentTestimonialIndex =
    (state.currentTestimonialIndex - 1 + state.testimonials.length) % state.testimonials.length;
}

function addTestimonial() {
  if (state.newAuthor && state.newText) {
    state.testimonials.push({
      text: state.newText,
      author: state.newAuthor,
      rating: 0
    });
    state.newAuthor = '';
    state.newText = '';
  } else {
    alert("Veuillez remplir les deux champs pour soumettre un avis.");
  }
}

function rateCurrentTestimonial(starCount) {
  state.testimonials[state.currentTestimonialIndex].rating = starCount;
}
</script>

<style scoped>
.testimonials {
  background: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.testimonials h2 {
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.testimonial-wrapper {
  background: #dff3fc;
  padding: 20px;
  border-radius: 12px;
  margin: 20px auto;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  transition: all 0.3s;
}

.testimonial-wrapper:hover {
  background: #c5e8f9;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.styled-blockquote {
  position: relative;
  background: #ecf0f1;
  padding: 20px;
  border-left: 5px solid #1abc9c;
  font-size: 1.2rem;
  color: #7f8c8d;
  border-radius: 8px;
  border: 2px solid #3498db;
  box-shadow: 0 8px 15px rgba(52, 152, 219, 0.3);
  margin: 0;
}

.styled-blockquote span {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  color: #16a085;
  font-size: 14px;
}

.rating-stars {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.star {
  font-size: 24px;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
}

.star.filled {
  color: #f1c40f;
}

.navigation-arrows {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.navigation-arrows button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.navigation-arrows button:hover {
  background-color: #2980b9;
}

.read-more {
  font-size: 14px;
  color: #7f8c8d;
  margin-top: 10px;
}

.add-testimonial {
  margin-top: 30px;
  text-align: left;
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.submit-button {
  background-color: #1abc9c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.submit-button:hover {
  background-color: #16a085;
}

/* ✨ Animation personnalisée */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
