<template>
    <header class="header">
        <div class="header-container">
            <div class="header-left">
                <router-link to="/" class="logo-link">
                    <img src="../assets/itert.png" alt="Iter-AR Logo" class="logo" />
                </router-link>

                <nav class="nav-links">
                    <a href="#" class="nav-item" @click.prevent="scrollToTop">Inicio</a>
                    <a href="#features" class="nav-item">Características</a>
                    <a href="#projects" class="nav-item">Proyectos</a>
                    <a href="#contact" class="nav-item">Contacto</a>
                </nav>
            </div>

            <div class="header-right">
                <a href="#contact" class="cta-button">
                    <span>Comenzar</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
// Header completamente funcional sin dependencias extras
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.header-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-grow: 1;
}

.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.logo-link:hover {
    transform: scale(1.05);
}

.logo {
    height: 2.5rem;
    width: auto;
    transition: filter 0.3s ease;
}

.logo:hover {
    filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3));
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-item {
    position: relative;
    padding: 0.7rem 1.2rem;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--secondary-color, #333);
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    overflow: hidden;
}

.nav-item::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary-gradient, linear-gradient(90deg, #6366f1, #22d3ee));
    transform: translateX(-50%);
    transition: width 0.3s ease;
}

.nav-item:hover {
    color: var(--primary-color, #6366f1);
    background: rgba(99, 102, 241, 0.05);
    transform: translateY(-2px);
}

.nav-item:hover::before {
    width: 80%;
}

.nav-item.router-link-active {
    color: var(--primary-color, #6366f1);
    background: rgba(99, 102, 241, 0.08);
}

.nav-item.router-link-active::before {
    width: 80%;
}

/* CTA Button con animación */
.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--primary-gradient, linear-gradient(90deg, #6366f1, #22d3ee));
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    border-radius: 0.6rem;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.cta-button:active {
    transform: translateY(0) scale(0.98);
}

.arrow-icon {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
    transform: translateX(4px);
    animation: arrowBounce 0.6s ease infinite;
}

@keyframes arrowBounce {

    0%,
    100% {
        transform: translateX(4px);
    }

    50% {
        transform: translateX(8px);
    }
}

/* Efecto de scroll */
.header.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.98);
}

/* Responsive */
@media (max-width: 900px) {
    .header-container {
        padding: 0 1rem;
    }

    .header-left {
        gap: 1.5rem;
    }

    .nav-links {
        gap: 0.2rem;
    }

    .nav-item {
        padding: 0.6rem 0.9rem;
        font-size: 0.9rem;
    }

    .cta-button {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .header-left {
        justify-content: center;
        flex-grow: 0;
    }

    .cta-button span {
        display: none;
    }

    .cta-button {
        padding: 0.7rem;
        border-radius: 50%;
        width: 42px;
        height: 42px;
        justify-content: center;
    }
}
</style>
