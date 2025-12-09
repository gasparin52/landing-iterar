<template>
  <section class="tech-carousel">
    <div class="tech-carousel-container">
      <div class="tech-track-wrapper">
        <div class="tech-track">
          <!-- Primera vuelta de logos -->
          <div v-for="(logo, index) in logos" :key="`logo-1-${index}`" class="tech-logo">
            <img :src="logo.src" :alt="logo.name" />
          </div>
          <!-- Segunda vuelta de logos (para loop infinito) -->
          <div v-for="(logo, index) in logos" :key="`logo-2-${index}`" class="tech-logo">
            <img :src="logo.src" :alt="logo.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import VuejsLogo from '../assets/logos/Vuejs.png'
import JavaScriptLogo from '../assets/logos/javascript-logo.svg'
import HTML5Logo from '../assets/logos/HTML5_logo_and_wordmark.svg.png'
import CSS3Logo from '../assets/logos/CSS3_logo_and_wordmark.svg'
import ReactLogo from '../assets/logos/react.svg'
import PythonLogo from '../assets/logos/python.svg'
import PostgreSQLLogo from '../assets/logos/postgresql.webp'

const logos = ref([
  { name: 'Vue.js', src: VuejsLogo },
  { name: 'JavaScript', src: JavaScriptLogo },
  { name: 'HTML5', src: HTML5Logo },
  { name: 'CSS3', src: CSS3Logo },
  { name: 'React', src: ReactLogo },
  { name: 'Python', src: PythonLogo },
  { name: 'PostgreSQL', src: PostgreSQLLogo }
])
</script>

<style scoped>
/* Contenedor principal */
.tech-carousel {
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.03) 0%, rgba(0, 206, 209, 0.03) 100%);
  overflow: hidden;
}

.tech-carousel-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Wrapper del track con overflow hidden */
.tech-track-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 2rem 0;
}

/* Track en movimiento */
.tech-track {
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: scroll 40s linear infinite;
  will-change: transform;
}

/* Detener animación al hacer hover */
.tech-track:hover {
  animation-play-state: paused;
}

/* Keyframes para animación de scroll infinito */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% / 2));
  }
}

/* Contenedor de cada logo */
.tech-logo {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-logo:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Imágenes de logos en escala de grises */
.tech-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

/* Volver a color al hacer hover */
.tech-logo:hover img {
  filter: grayscale(0%);
}

/* Responsive */
@media (max-width: 900px) {
  .tech-carousel {
    padding: 3rem 0;
  }

  .tech-track {
    gap: 3rem;
    animation-duration: 35s;
  }

  .tech-logo {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 600px) {
  .tech-carousel {
    padding: 2.5rem 0;
  }

  .tech-carousel-container {
    padding: 0 1rem;
  }

  .tech-track {
    gap: 2rem;
    animation-duration: 30s;
  }

  .tech-logo {
    width: 80px;
    height: 80px;
    padding: 0.8rem;
  }

  .tech-track-wrapper {
    padding: 1.5rem 0;
  }
}
</style>
