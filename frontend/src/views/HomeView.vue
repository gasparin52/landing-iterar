<template>
  <BaseLayout>
    <!-- Hero Section -->
    <section id="hero" class="section hero" data-animate>
      <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>Innovación en automatización</span>
        </div>

        <h1 class="hero-title">
          Transformá tu negocio con
          <span class="gradient-text">automatización inteligente</span>
        </h1>

        <p class="hero-subtitle">
          Potenciá tu empresa con soluciones tecnológicas que optimizan procesos,
          reducen costos y aumentan la productividad de forma exponencial.
        </p>

        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">
            <span>Comenzar ahora</span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#features" class="btn btn-secondary">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12l4 4 4-4" />
            </svg>
            <span>Descubrir más</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section features" data-animate>
      <div class="container">
        <h2 class="section-title">¿Qué ofrecemos?</h2>
        <div class="features-grid">
          <article class="feature-card" data-animate-delay="0">
            <div class="feature-icon">
              <img :src="AutomatizacionIcon" alt="Automatización" />
            </div>
            <h3>Automatización</h3>
            <p>Optimizá tus procesos con flujos inteligentes y eficientes</p>
          </article>
          <article class="feature-card" data-animate-delay="100">
            <div class="feature-icon">
              <img :src="DesarrolloIcon" alt="Desarrollo" />
            </div>
            <h3>Desarrollo</h3>
            <p>Webs y APIs robustas, escalables y seguras</p>
          </article>
          <article class="feature-card" data-animate-delay="200">
            <div class="feature-icon">
              <img :src="AnaliticsIcon" alt="Analytics" />
            </div>
            <h3>Analytics</h3>
            <p>Métricas claras para mejores decisiones de negocio</p>
          </article>
          <article class="feature-card" data-animate-delay="300">
            <div class="feature-icon">
              <img :src="IaIcon" alt="IA & ML" />
            </div>
            <h3>IA & ML</h3>
            <p>Soluciones inteligentes para resolver problemas complejos</p>
          </article>
          <article class="feature-card" data-animate-delay="400">
            <div class="feature-icon">
              <img :src="SeguridadIcon" alt="Seguridad" />
            </div>
            <h3>Seguridad</h3>
            <p>Protección de datos y cumplimiento normativo</p>
          </article>
          <article class="feature-card" data-animate-delay="500">
            <div class="feature-icon">
              <img :src="PerformanceIcon" alt="Performance" />
            </div>
            <h3>Performance</h3>
            <p>Optimización y velocidad en cada proyecto</p>
          </article>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about" data-animate>
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">Sobre Nosotros</h2>
            <p>
              Somos un equipo especializado en crear soluciones tecnológicas innovadoras.
              Combinamos experiencia en desarrollo, automatización e inteligencia artificial
              para transformar ideas en productos reales.
            </p>
            <ul class="about-list">
              <li>✓ +5 años de experiencia</li>
              <li>✓ Equipo multidisciplinario</li>
              <li>✓ Soporte continuo</li>
            </ul>
          </div>
          <div class="about-image">
            <div class="about-placeholder">
              <div class="rocket-trail">
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
                <span class="trail-line"></span>
              </div>
              <div class="rocket-container">
                <img :src="RocketIcon" alt="Cohete" class="rocket" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects" data-animate>
      <div class="container">
        <h2 class="section-title">Nuestros Proyectos</h2>
        <div class="carousel-container">
          <button @click="prevSlide" class="carousel-btn prev-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div class="carousel-wrapper">
            <div class="carousel-track" ref="carouselTrack">
              <div v-for="(project, index) in projects" :key="index" :class="['carousel-slide', getSlideClass(index)]"
                :style="getSlideStyle(index)">
                <div class="project-image">
                  <img :src="project.image" :alt="project.title" />
                </div>
                <div class="project-content">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click="nextSlide" class="carousel-btn next-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div class="carousel-dots">
          <button v-for="(project, index) in projects" :key="index" @click="goToSlide(index)"
            :class="['dot', { active: currentSlide === index }]"></button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact" data-animate>
      <div class="container">
        <h2 class="section-title">Contactanos</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Información de Contacto</h3>
            <div class="contact-item">
              <img :src="MailIcon" alt="Email" class="icon" />
              <span>contacto@iter-ar.com</span>
            </div>
            <div class="contact-item">
              <img :src="PhoneIcon" alt="Teléfono" class="icon" />
              <span>+54 11 1234-5678</span>
            </div>
            <div class="contact-item">
              <img :src="MapIcon" alt="Ubicación" class="icon" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <label>
                <span>Nombre</span>
                <input type="text" placeholder="Tu nombre" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="tu@email.com" required />
              </label>
            </div>
            <label>
              <span>Mensaje</span>
              <textarea rows="5" placeholder="¿En qué te ayudamos?" required></textarea>
            </label>
            <BaseButton type="submit" subclass="btn-primary">Enviar Mensaje</BaseButton>
          </form>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseLayout from '../components/BaseLayout.vue'
import BaseButton from '../components/Buttons/BaseButton.vue'
import AutomatizacionIcon from '../assets/icons/automatizacion.svg'
import DesarrolloIcon from '../assets/icons/desarrollo.svg'
import AnaliticsIcon from '../assets/icons/analitics.svg'
import IaIcon from '../assets/icons/ia.svg'
import SeguridadIcon from '../assets/icons/seguridad.svg'
import PerformanceIcon from '../assets/icons/performance.svg'
import RocketIcon from '../assets/icons/rocket.svg'
import AutomatizacionImg from '../assets/automatizacion.webp'
import ApiRestImg from '../assets/api-rest.png'
import DashboardImg from '../assets/dashboard analisis.png'
import SistemaGestionImg from '../assets/sistema de gestion.png'
import MailIcon from '../assets/icons/mail.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import MapIcon from '../assets/icons/map-pin.svg'

// Carrusel de proyectos
const carouselTrack = ref(null)
const currentSlide = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)
const touchStartY = ref(0)
const touchEndY = ref(0)
const minSwipeDistance = 50
const projects = ref([
  {
    title: 'Automatización Empresarial',
    description: 'Automatización de procesos empresariales con inteligencia artificial y machine learning para optimizar tus operaciones.',
    image: AutomatizacionImg,
    tags: ['Automatización', 'IA', 'Python']
  },
  {
    title: 'API REST',
    description: 'Desarrollo de plataforma web escalable con arquitectura moderna y APIs REST robustas y seguras.',
    image: ApiRestImg,
    tags: ['Web', 'API', 'Node.js']
  },
  {
    title: 'Dashboard de Análisis',
    description: 'Dashboard de análisis en tiempo real con visualización de datos avanzada y reportes personalizados.',
    image: DashboardImg,
    tags: ['Analytics', 'Dashboard', 'React']
  },
  {
    title: 'Sistema de Gestión',
    description: 'Sistema de gestión integral con módulos personalizados para optimizar todas tus operaciones empresariales.',
    image: SistemaGestionImg,
    tags: ['ERP', 'Gestión', 'Base de datos']
  }
])

const getSlideClass = (index) => {
  const total = projects.value.length
  const diff = (index - currentSlide.value + total) % total

  if (diff === 0) return 'active'
  if (diff === 1 || diff === total - 1) return 'side'
  return 'hidden'
}

const getSlideStyle = (index) => {
  const total = projects.value.length
  const diff = (index - currentSlide.value + total) % total

  if (diff === 0) {
    // Slide activo - centrado
    return { transform: 'translate(-50%, -50%) scale(1)' }
  } else if (diff === 1) {
    // Slide derecho
    return { transform: 'translate(calc(-50% + 400px), -50%) scale(0.8)' }
  } else if (diff === total - 1) {
    // Slide izquierdo
    return { transform: 'translate(calc(-50% - 400px), -50%) scale(0.8)' }
  }
  // Slides ocultos
  return { transform: 'translate(-50%, -50%) scale(0.7)' }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % projects.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + projects.value.length) % projects.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Funciones para swipe/touch
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
}

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX
  touchEndY.value = e.touches[0].clientY
}

const handleTouchEnd = () => {
  const diffX = touchStartX.value - touchEndX.value
  const diffY = Math.abs(touchStartY.value - touchEndY.value)

  // Solo ejecutar swipe si el movimiento horizontal es mayor que el vertical
  // Esto evita conflictos con el scroll vertical
  if (Math.abs(diffX) > diffY && Math.abs(diffX) > minSwipeDistance) {
    if (diffX > 0) {
      // Swipe izquierda - siguiente slide
      nextSlide()
    } else {
      // Swipe derecha - slide anterior
      prevSlide()
    }
  }

  // Reset
  touchStartX.value = 0
  touchEndX.value = 0
  touchStartY.value = 0
  touchEndY.value = 0
}

let observer = null

onMounted(() => {
  // Agregar event listeners para touch/swipe en el carrusel
  if (carouselTrack.value) {
    carouselTrack.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    carouselTrack.value.addEventListener('touchmove', handleTouchMove, { passive: true })
    carouselTrack.value.addEventListener('touchend', handleTouchEnd)
  }

  // Configurar Intersection Observer para detectar cuando las secciones entran en viewport
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible')

          // Animar cards con delay
          if (entry.target.id === 'features') {
            const cards = entry.target.querySelectorAll('.feature-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 100)
            })
          }

          if (entry.target.id === 'pricing') {
            const cards = entry.target.querySelectorAll('.pricing-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 150)
            })
          }

          if (entry.target.id === 'about') {
            const items = entry.target.querySelectorAll('.about-list li')
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible')
              }, index * 100)
            })
          }

          if (entry.target.id === 'contact') {
            const items = entry.target.querySelectorAll('.contact-item')
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible')
              }, index * 100)
            })
          }
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  // Observar todas las secciones
  document.querySelectorAll('.section[data-animate]').forEach(section => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  // Limpiar event listeners del carrusel
  if (carouselTrack.value) {
    carouselTrack.value.removeEventListener('touchstart', handleTouchStart)
    carouselTrack.value.removeEventListener('touchmove', handleTouchMove)
    carouselTrack.value.removeEventListener('touchend', handleTouchEnd)
  }

  // Limpiar observer
  if (observer) {
    observer.disconnect()
  }
})

function handleSubmit() {
  alert('Formulario enviado (demo)')
}
</script>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Secciones base */
.section {
  padding: 3rem 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  text-align: center;
  margin-bottom: 2rem;
  color: var(--secondary-color, #333);
}

/* Hero */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 4rem 2rem 3rem;
  text-align: center;
  opacity: 1 !important;
  transform: none !important;
  overflow: visible;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(135deg, #e6f7f7 0%, #d4e8f0 100%);
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 15s ease-in-out infinite;
  will-change: transform;
}

.orb-1 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #2D3E50 0%, #4b6cff 100%);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #00D4AA 0%, #57f57c 100%);
  bottom: -5%;
  right: -5%;
  animation-delay: 5s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #00CED1 0%, #52abff 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 10s;
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }

  20% {
    transform: translate(40px, -50px) scale(1.15);
  }

  40% {
    transform: translate(-30px, 30px) scale(0.85);
  }

  60% {
    transform: translate(50px, 40px) scale(1.1);
  }

  80% {
    transform: translate(-40px, -30px) scale(0.9);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
}

.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 212, 170, 0.3);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2D3E50;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  animation: fadeInDown 0.8s ease-out;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #00D4AA;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.15;
  margin: 0;
  font-weight: 800;
  color: #1a202c;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.gradient-text {
  background: linear-gradient(135deg, #2D3E50 0%, #00D4AA 50%, #00CED1 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  animation: gradientShift 6s ease infinite;
  padding-bottom: 1rem;
}

@keyframes gradientShift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  line-height: 1.7;
  color: #4a5568;
  max-width: 600px;
  margin: 0;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn-primary {
  background: linear-gradient(135deg, #00D4AA 0%, #00CED1 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(0, 212, 170, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 212, 170, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #2D3E50;
  border: 2px solid rgba(0, 212, 170, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn-secondary:hover {
  background: white;
  border-color: #00D4AA;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.btn .icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.btn:hover .icon {
  transform: translateX(4px);
}

.btn-secondary:hover .icon {
  transform: translateY(4px);
}

/* Features */
.features {
  background: rgba(0, 0, 0, .02);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: opacity 0.6s ease, transform 0.6s ease, box-shadow .3s ease;
}

.feature-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(0, 206, 209, 0.1));
  border-radius: 16px;
  transition: all 0.3s ease;
}

.feature-icon img {
  width: 40px;
  height: 40px;
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(143deg) brightness(95%) contrast(101%);
}

.feature-card:hover .feature-icon {
  background: linear-gradient(135deg, #00D4AA, #00CED1);
  transform: scale(1.1);
}

.feature-card:hover .feature-icon img {
  filter: brightness(0) invert(1);
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: var(--secondary-color, #333);
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* About */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  text-align: left;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
}

.about-list {
  list-style: none;
  padding: 0;
}

.about-list li {
  padding: 0.7rem 0;
  font-size: 1.1rem;
  color: #00D4AA;
  font-weight: 600;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.about-list li.visible {
  opacity: 1;
  transform: translateX(0);
}

.about-placeholder {
  background: linear-gradient(135deg, #2D3E50 0%, #00D4AA 50%, #00CED1 100%);
  height: 400px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
}

.rocket-container {
  position: relative;
  display: inline-block;
}

.rocket-trail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.trail-line {
  position: absolute;
  height: 3px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  animation: rainFall 1.5s linear infinite;
}

.trail-line:nth-child(1) {
  width: 80px;
  top: 15%;
  right: -80px;
  animation-delay: 0s;
}

.trail-line:nth-child(2) {
  width: 60px;
  top: 35%;
  right: -60px;
  animation-delay: 0.3s;
}

.trail-line:nth-child(3) {
  width: 70px;
  top: 55%;
  right: -70px;
  animation-delay: 0.6s;
}

.trail-line:nth-child(4) {
  width: 90px;
  top: 25%;
  right: -90px;
  animation-delay: 0.9s;
}

.trail-line:nth-child(5) {
  width: 65px;
  top: 70%;
  right: -65px;
  animation-delay: 1.2s;
}

.trail-line:nth-child(6) {
  width: 75px;
  top: 45%;
  right: -75px;
  animation-delay: 0.45s;
}

.trail-line:nth-child(7) {
  width: 85px;
  top: 10%;
  right: -85px;
  animation-delay: 0.15s;
}

.trail-line:nth-child(8) {
  width: 55px;
  top: 80%;
  right: -55px;
  animation-delay: 1.35s;
}

.trail-line:nth-child(9) {
  width: 95px;
  top: 30%;
  right: -95px;
  animation-delay: 0.75s;
}

.trail-line:nth-child(10) {
  width: 70px;
  top: 60%;
  right: -70px;
  animation-delay: 1.05s;
}

.trail-line:nth-child(11) {
  width: 80px;
  top: 20%;
  right: -80px;
  animation-delay: 0.5s;
}

.trail-line:nth-child(12) {
  width: 65px;
  top: 50%;
  right: -65px;
  animation-delay: 1.15s;
}

@keyframes rainFall {
  0% {
    transform: translateX(0);
    opacity: 0;
  }

  10% {
    opacity: 0.7;
  }

  90% {
    opacity: 0.7;
  }

  100% {
    transform: translateX(-700px);
    opacity: 0;
  }
}

.rocket {
  display: inline-block;
  animation: rocketFloat 3s ease-in-out infinite;
  position: relative;
  z-index: 2;
  width: 150px;
  height: 150px;
  filter: brightness(0) invert(1) drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
}

@keyframes rocketFloat {

  0%,
  100% {
    transform: rotate(-2deg) translateY(-20px);
  }

  25% {
    transform: rotate(1deg) translateY(0px);
  }

  50% {
    transform: rotate(0deg) translateY(0px);
  }

  75% {
    transform: rotate(2deg) translateY(10px);
  }
}

/* Projects Carousel */
.projects {
  background: rgba(0, 0, 0, .02);
  padding: 3rem 0;
}

.carousel-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 80px;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  min-height: 550px;
  overflow: visible;
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60%;
  max-width: 600px;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
  pointer-events: none;
  z-index: 1;
}

.carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 3;
}

.carousel-slide.side {
  opacity: 0.3;
  z-index: 2;
  pointer-events: none;
}

.carousel-slide.hidden {
  opacity: 0;
  z-index: 0;
}

.project-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: linear-gradient(135deg, #2D3E50, #00D4AA);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-slide:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: #2D3E50;
  font-weight: 700;
}

.project-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
}

.project-tags {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(0, 206, 209, 0.1));
  color: #00D4AA;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 55px;
  height: 55px;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
  transition: all 0.3s ease;
  z-index: 100;
}

.carousel-btn:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 6px 20px rgba(0, 0, 0, .25);
}

.carousel-btn svg {
  width: 28px;
  height: 28px;
  color: #2D3E50;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: rgba(0, 212, 170, 0.5);
  transform: scale(1.3);
}

.dot.active {
  background: #00D4AA;
  width: 35px;
  border-radius: 6px;
}

@media (max-width: 900px) {
  .carousel-container {
    padding: 0 20px;
  }

  .carousel-btn {
    display: none;
  }

  .carousel-wrapper {
    overflow: hidden;
  }

  .carousel-slide {
    width: 85%;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .carousel-slide.side,
  .carousel-slide.hidden {
    display: none;
  }

  .carousel-slide.active {
    animation: slideInMobile 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-image {
    height: 250px;
  }

  .project-content {
    padding: 1.5rem;
  }
}

@keyframes slideInMobile {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

/* Contact */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info h3 {
  margin-bottom: 2rem;
  color: var(--secondary-color, #333);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.contact-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-item .icon {
  width: 24px;
  height: 24px;
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(143deg) brightness(95%) contrast(101%);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color, #333);
}

.contact-form input,
.contact-form textarea {
  padding: 0.9rem;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 0.6rem;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color .3s ease, box-shadow .3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #00D4AA;
  box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.1);
}

/* Responsive */
@media (max-width: 900px) {
  .hero {
    min-height: auto;
    padding: 6rem 1.5rem 4rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .about-text h2 {
    text-align: center;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .section {
    height: auto;
    overflow: visible;
  }

  .contact {
    padding-bottom: 6rem;
    height: auto;
    min-height: auto;
  }

  .contact-content {
    height: auto;
    overflow: visible;
  }

  .contact-form {
    padding-bottom: 2rem;
    height: auto;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 3rem 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .hero-badge {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .hero-stats {
    gap: 1rem;
    padding: 1.2rem 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .gradient-orb {
    filter: blur(60px);
  }

  .orb-1 {
    width: 300px;
    height: 300px;
  }

  .orb-2 {
    width: 250px;
    height: 250px;
  }

  .orb-3 {
    width: 200px;
    height: 200px;
  }

  /* Carousel mobile optimizations */
  .carousel-container {
    padding: 0 10px;
  }

  .carousel-wrapper {
    min-height: 50vh;
    overflow: hidden;
  }

  .carousel-slide {
    width: 95%;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .carousel-slide.side,
  .carousel-slide.hidden {
    display: none;
  }

  .carousel-slide.active {
    animation: slideInMobile 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-image {
    height: 220px;
  }

  .project-content {
    padding: 1.2rem;
  }

  .project-content h3 {
    font-size: 1.3rem;
  }

  .project-content p {
    font-size: 0.9rem;
  }

  .tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  .carousel-dots {
    margin-top: 1.5rem;
  }

  .section {
    height: auto;
    overflow: visible;
  }

  .contact {
    height: auto;
    min-height: auto;
  }

  .contact-content {
    height: fit-content;
    overflow: visible;
  }

  .contact-form {
    padding-bottom: 2rem;
    height: auto;
  }
}
</style>