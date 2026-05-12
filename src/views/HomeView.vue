<template>
  <main class="hero-container">
    <div class="hero-content">
      <span class="badge">Atendimento Especializado</span>
      <h1>Excelência e Acolhimento em Saúde Mental</h1>
      <p>
        Unimos o rigor científico à empatia para oferecer diagnósticos precisos e tratamentos 
        individualizados, colocando a sua qualidade de vida sempre em primeiro lugar.
      </p>
      
      <div class="cta-group">
        <a href="#" class="btn-primary">
          Agendar Consulta
        </a>
        <router-link to="/sobre-nos" class="btn-secondary">
          Conhecer o Instituto
        </router-link>
      </div>
    </div>

    <div class="hero-image-wrapper">
      <img 
        src="/public/casa-montanha.jpg" 
        alt="Representação abstrata de fluidez e saúde mental" 
        class="abstract-mind-img"
      />
    </div>
  </main>
</template>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 5%;
  background-color: #f4f7f6; /* Fundo suave combinando com o Sobre Nós */
  min-height: calc(100vh - 140px);
}

.hero-content {
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  background-color: #e8f5e9;
  color: #2e7d32;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 20px;
  margin-bottom: 1.5rem;
}

.hero-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  line-height: 1.2;
  color: #1a4321;
  margin-bottom: 1.5rem;
}

.hero-content p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 2.5rem;
}

.cta-group {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  font-family: 'Montserrat', sans-serif;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #2e7d32;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
}

.btn-primary:hover {
  background-color: #1a4321;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #2e7d32;
  border: 2px solid #2e7d32;
}

.btn-secondary:hover {
  background-color: #e8f5e9;
}

.hero-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

/* Estilo da Imagem Abstrata */
.abstract-mind-img {
  width: 100%;
  max-width: 550px;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.5s ease;
}

.abstract-mind-img:hover {
  transform: scale(1.02);
}

/* Responsividade para celulares e tablets */
@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    padding: 3rem 20px;
  }
  
  .hero-content {
    padding-right: 0;
    margin-bottom: 3rem;
  }

  .cta-group {
    justify-content: center;
  }

  .hero-image-wrapper {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
  
  .cta-group {
    flex-direction: column;
  }
}
</style>