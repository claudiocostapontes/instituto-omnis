<script setup>
import { ref } from 'vue';

// Declara a variável que controla o pop-up
const showAppointmentModal = ref(false);
</script>

<template>
  <main class="hero-container">
    <div class="hero-content">
      <span class="subtitle">Atendimento Especializado</span>
      
      <h1>Sua saúde mental tratada com excelência</h1>
      <p>Oferecemos um espaço de acolhimento focado no seu bem-estar, unindo ciência e humanização para restaurar sua qualidade de vida.</p>
      
      <div class="cta-group">
        <button class="btn btn-primary" @click="showAppointmentModal = true">Agendar Consulta</button>
        <button class="btn btn-secondary">Conheça o Instituto</button>
      </div>
    </div> 

    <div v-if="showAppointmentModal" class="modal-overlay" @click.self="showAppointmentModal = false">
      <div class="contact-modal appointment-modal">
        <button class="close-btn" @click="showAppointmentModal = false">×</button>
        
        <div class="modal-header">
          <img src="/pyha.png" alt="Instituto Omnis" class="modal-logo-img" />
          <h2>Agende sua Consulta</h2>
          <p>Escolha um canal para agendamentos ou informações.</p>
        </div>

        <div class="contact-grid">
          <a href="https://wa.me/5561984080875" target="_blank" class="contact-card whatsapp">
            <img src="/whatsapp.png" alt="WhatsApp" class="modal-icon-img" />
            <div class="info">
              <strong>Celular & WhatsApp</strong>
              <span>(61) 9.8408-0875</span>
            </div>
          </a>

          <a href="tel:+556135264600" class="contact-card phone">
            <img src="/telefone-comercial.png" alt="Telefone Fixo" class="modal-icon-img" />
            <div class="info">
              <strong>Telefone Fixo</strong>
              <span>(61) 3526-4600</span>
            </div>
          </a>
        </div>
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
  align-items: center; 
  justify-content: space-between;
  padding: 0 max(5%, calc((100% - 1300px) / 2));
  background-color: #f4f7f6;
  min-height: calc(100vh - 160px);
}

.hero-content {
  flex: 0 0 45%; 
  text-align: left;
  padding-right: 2rem;
  /* Garante que o texto e os botões fiquem acima de qualquer imagem invisível */
  position: relative;
  z-index: 10; 
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
   ÁREA DA IMAGEM
   ========================================= */
.hero-image-wrapper {
  flex: 0 0 50%; 
  display: flex;
  justify-content: flex-end; 
  align-items: center;
}

.abstract-mind-img {
  width: 100%;
  max-width: 650px; 
  height: 480px;    
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  margin: 0; 
}

/* =========================================
   ESTILOS ESPECÍFICOS DESTE POP-UP
   ========================================= */
.modal-logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 15px;
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