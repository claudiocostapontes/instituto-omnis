<template>
  <main class="hero-container">
    <div class="hero-content">
      <span class="subtitle">Atendimento Especializado</span>
      <h1>Excelência e Acolhimento em Saúde Mental</h1>
      <p>
        Unimos o rigor científico à empatia para oferecer diagnósticos precisos
        e tratamentos individualizados, colocando a sua qualidade de vida
        sempre em primeiro lugar.
      </p>
      
      <div class="cta-group">
        <button class="btn btn-primary">Agendar Consulta</button>
        <button class="btn btn-secondary">Conhecer o Instituto</button>
      </div>
    </div>

    <div class="hero-image-wrapper">
      <img src="/recovery-center.jpg" alt="Representação abstrata de fluidez e saúde mental" class="abstract-mind-img" />
    </div>
  </main>
</template>

<style scoped>
.hero-container {
  display: flex;
  align-items: center; /* Mantém tudo centralizado verticalmente */
  justify-content: space-between;
  /* O padding exato para a "linha azul" alinhar com o cabeçalho */
  padding: 0 max(5%, calc((100% - 1300px) / 2));
  background-color: #f4f7f6;
  min-height: calc(100vh - 160px);
}

.hero-content {
  flex: 0 0 45%; /* Trava o texto na metade esquerda */
  text-align: left;
  padding-right: 2rem;
}

.subtitle {
  display: block;
  color: #2e7d32;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.hero-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  color: #1a4321;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero-content p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555555;
  margin-bottom: 2.5rem;
}

.cta-group {
  display: flex;
  justify-content: flex-start; 
  gap: 1.5rem;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: #2e7d32;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(46, 125, 50, 0.3);
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
  background-color: rgba(46, 125, 50, 0.05);
}

/* =========================================
   ÁREA DA IMAGEM (QUADRADO AMARELO)
   ========================================= */
.hero-image-wrapper {
  flex: 0 0 50%; /* Trava a área da imagem na metade direita */
  display: flex;
  justify-content: flex-end; /* Empurra a imagem toda para a direita */
  align-items: center;
}

.abstract-mind-img {
  width: 100%;
  max-width: 650px; /* Largura máxima (limite do quadrado amarelo) */
  height: 480px;    /* Altura da imagem */
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  margin: 0; /* Remove qualquer margem que estava empurrando a imagem para baixo */
}

/* Responsividade Mobile */
@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .hero-content {
    flex: 1;
    text-align: center;
    padding-right: 0;
    margin-bottom: 3rem;
  }
  .cta-group {
    justify-content: center;
  }
  .hero-image-wrapper {
    flex: 1;
    justify-content: center;
  }
}
</style>