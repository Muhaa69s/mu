<template>
    <div :class="['joke-section', darkMode ? 'dark-mode' : '']">
      <header>
        <h2>😂 Blague du jour</h2>
        <button @click="toggleDarkMode" class="toggle-mode">🌙/☀️</button>
      </header>
      
      <div class="category-selector">
        <label for="category">Choisir une catégorie :</label>
        <select v-model="category" @change="fetchJoke">
          <option value="Any">Toutes</option>
          <option value="Programming">Programmation 💻</option>
          <option value="Misc">Divers 🎭</option>
          <option value="Dark">Noir 🌑</option>
          <option value="Pun">Jeux de mots 🤪</option>
          <option value="Spooky">Horreur 👻</option>
          <option value="Christmas">Noël 🎄</option>
        </select>
      </div>
      
      <div v-if="loading" class="loading">⏳ Prépare-toi à rigoler...</div>
      
      <transition name="fade">
        <div v-if="joke" key="joke">
          <p>{{ translatedJoke }}</p>
          <img v-if="jokeImage" :src="jokeImage" :key="jokeImage" alt="Illustration" class="joke-image" />
        </div>
      </transition>
      
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      
      <div class="button-container">
        <button @click="fetchJoke" class="joke-button" :disabled="loading">🔄 Nouvelle blague</button>
        <button @click="speakJoke" class="speak-button" :disabled="!joke">🔊 Écouter</button>
        <button @click="saveJoke" class="save-button" :disabled="!joke">📌 Sauvegarder</button>
        <button @click="toggleAutoJokes" class="auto-joke">⏳ Auto</button>
        <button @click="copyJoke" class="copy-button" :disabled="!joke">📋 Copier</button>
        <button @click="surpriseMode" class="surprise-button">🎭 Surprise</button>
      </div>
      
      <transition name="slide">
        <div v-if="showSavedJokes" class="saved-jokes">
          <h3>📚 Blagues enregistrées</h3>
          <ul>
            <li v-for="(savedJoke, index) in savedJokes" :key="index">
              {{ savedJoke }}
              <button @click="removeJoke(index)" class="delete-button">❌</button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from "vue";
  
  const joke = ref(null);
  const translatedJoke = ref("");
  const loading = ref(false);
  const errorMessage = ref(null);
  const category = ref("Any");
  const darkMode = ref(false);
  const showSavedJokes = ref(false);
  const savedJokes = ref(JSON.parse(localStorage.getItem("savedJokes")) || []);
  const jokeImage = ref(null);
  const autoMode = ref(false);
  
  const imageList = [
    "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif",
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif"
  ];
  
  const fetchJoke = async () => {
    loading.value = true;
    errorMessage.value = null;
    joke.value = null;
  
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/${category.value}`);
      if (!response.ok) throw new Error("Impossible de récupérer une blague.");
      const data = await response.json();
      joke.value = data.type === "single" ? data.joke : `${data.setup} - ${data.delivery}`;
      translatedJoke.value = await translateJoke(joke.value);
      jokeImage.value = imageList[Math.floor(Math.random() * imageList.length)];
    } catch (error) {
      errorMessage.value = "❌ Oups, impossible de charger une blague.";
    } finally {
      loading.value = false;
    }
  };
  
  const translateJoke = async (text) => {
    return text.replace("Chuck Norris", "Carlos");
  };
  
  const speakJoke = () => {
    if (translatedJoke.value) {
      const utterance = new SpeechSynthesisUtterance(translatedJoke.value);
      utterance.lang = "fr-FR";
      speechSynthesis.speak(utterance);
    }
  };
  
  const saveJoke = () => {
    if (translatedJoke.value && !savedJokes.value.includes(translatedJoke.value)) {
      savedJokes.value.push(translatedJoke.value);
      localStorage.setItem("savedJokes", JSON.stringify(savedJokes.value));
    }
  };
  
  const removeJoke = (index) => {
    savedJokes.value.splice(index, 1);
    localStorage.setItem("savedJokes", JSON.stringify(savedJokes.value));
  };
  
  const copyJoke = () => {
    navigator.clipboard.writeText(translatedJoke.value);
  };
  
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
  };
  
  const toggleAutoJokes = () => {
    autoMode.value = !autoMode.value;
    if (autoMode.value) {
      setInterval(fetchJoke, 30000);
    }
  };
  
  const surpriseMode = () => {
    fetchJoke();
    toggleDarkMode();
  };
  
  onMounted(fetchJoke);
  
  watch(savedJokes, () => {
    localStorage.setItem("savedJokes", JSON.stringify(savedJokes.value));
  });
  </script>
  
<style> 

.joke-section {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, color 0.3s;
}

.joke-section.dark-mode {
  background: #1e1e1e;
  color: #f5f5f5;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  font-size: 22px;
  font-weight: bold;
}

.toggle-mode {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.toggle-mode:hover {
  transform: rotate(180deg);
}

.category-selector {
  margin-top: 15px;
  text-align: center;
}

select {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

select:hover {
  background: #f4f4f4;
}

.loading {
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease-in-out;
}

.slide-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.joke-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

button {
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.joke-button {
  background: #ff9800;
  color: white;
}

.speak-button {
  background: #673ab7;
  color: white;
}

.save-button {
  background: #4caf50;
  color: white;
}

.auto-joke {
  background: #ff4081;
  color: white;
}

.copy-button {
  background: #2196f3;
  color: white;
}

.surprise-button {
  background: #e91e63;
  color: white;
}

button:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.saved-jokes {
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.05);
  padding: 15px;
  border-radius: 10px;
}

.saved-jokes h3 {
  margin-bottom: 10px;
}

.saved-jokes ul {
  list-style: none;
  padding: 0;
}

.saved-jokes li {
  background: white;
  padding: 8px 12px;
  margin: 5px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.saved-jokes li .delete-button {
  background: red;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 5px;
}

@media (max-width: 480px) {
  .button-container {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}

</style>