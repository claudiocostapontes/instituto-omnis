<script setup lang="ts">
import { ref } from 'vue';

// Controla qual pop-up está aberto.
const activeModal = ref<string | null>(null);
</script>

<template>
  <main class="specialty-wrapper">
    <div class="specialty-card">
      <span class="subtitle">Nossa Especialidade</span>
      <h2>A Psiquiatria</h2>
      
      <div class="specialty-text">
        <p>
          A psiquiatria é a especialidade médica dedicada ao diagnóstico, tratamento, prevenção e reabilitação dos variados transtornos mentais e de comportamento. O nosso objetivo primário é o alívio do sofrimento psíquico e a restauração do bem-estar global do paciente.
        </p>
      </div>

      <div class="carousel-section">
        <div class="carousel-header">
          <h3>Principais Quadros Tratados</h3>
          <span class="swipe-hint">Deslize para ver mais &rarr;</span>
        </div>

        <div class="carousel-track">
          
          <div class="condition-card">
            <img :src="'/depressao.jpg'" alt="Depressão" class="card-image-link" @click="activeModal = 'depressao'" />
            <h4>Depressão</h4>
            <p>Tratamento focado na recuperação do ânimo, energia e qualidade de vida, combatendo a tristeza profunda e a apatia.</p>
          </div>

          <div class="condition-card">
            <img :src="'/ansiedade.jpg'" alt="Ansiedade" class="card-image-link" @click="activeModal = 'ansiedade'" />
            <h4>Transtornos de Ansiedade</h4>
            <p>Controle de crises de pânico, ansiedade generalizada (TAG) e fobias, buscando devolver a tranquilidade ao dia a dia.</p>
          </div>

          <div class="condition-card">
            <img :src="'/transtorno-bipolar.jpg'" alt="Transtorno Bipolar" class="card-image-link" @click="activeModal = 'bipolar'" />
            <h4>Transtorno Bipolar</h4>
            <p>Estabilização do humor e prevenção de oscilações entre episódios de mania (euforia) e depressão.</p>
          </div>

          <div class="condition-card">
            <img :src="'/tdah.jpg'" alt="TDAH" class="card-image-link" @click="activeModal = 'tdah'" />
            <h4>TDAH</h4>
            <p>Diagnóstico e manejo do Transtorno de Déficit de Atenção e Hiperatividade em adultos e adolescentes.</p>
          </div>

          <div class="condition-card">
            <img :src="'/toc.jpg'" alt="TOC" class="card-image-link" @click="activeModal = 'toc'" />
            <h4>Transtorno Obsessivo-Compulsivo (TOC)</h4>
            <p>Abordagem terapêutica para atenuar pensamentos intrusivos e comportamentos repetitivos.</p>
          </div>

          <div class="condition-card">
            <img :src="'/transtorno-sono.jpg'" alt="Transtornos do Sono" class="card-image-link" @click="activeModal = 'sono'" />
            <h4>Transtornos do Sono</h4>
            <p>Investigação e tratamento de insônia e outras alterações que impedem um sono reparador.</p>
          </div>

          <div class="condition-card">
            <img :src="'/esquizofrenia.jpg'" alt="Esquizofrenia" class="card-image-link" @click="activeModal = 'esquizofrenia'" />
            <h4>Esquizofrenia e Psicoses</h4>
            <p>Acompanhamento rigoroso e humanizado para controle de sintomas e reintegração social.</p>
          </div>

          <div class="condition-card">
            <img :src="'/transtornos-alimentares.jpg'" alt="Transtornos Alimentares" class="card-image-link" @click="activeModal = 'alimentares'" />
            <h4>Transtornos Alimentares</h4>
            <p>Apoio no tratamento de anorexia, bulimia e compulsão alimentar, focando na saúde integral.</p>
          </div>

        </div>
      </div>
      </div>
  </main>

  <div v-if="activeModal === 'depressao'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Tratamento para Depressão</h3>
      <img :src="'/depressao.jpg'" alt="Depressão" class="modal-image" />
      <div class="modal-text">
        <p>A abordagem para o tratamento da depressão envolve uma avaliação médica e psicológica abrangente.</p>
        <p>Utilizamos uma combinação de abordagens terapêuticas modernas, incluindo terapia cognitivo-comportamental (TCC) e suporte medicamentoso personalizado para restaurar o equilíbrio e a qualidade de vida.</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>

  <div v-if="activeModal === 'ansiedade'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Tratamento para Ansiedade</h3>
      <img :src="'/ansiedade.jpg'" alt="Ansiedade" class="modal-image" />
      <div class="modal-text">
        <p>O tratamento dos transtornos de ansiedade visa mapear os gatilhos das crises de pânico e do estresse crônico.</p>
        <p>Através de estratégias de regulação comportamental e suporte clínico, auxiliamos o paciente a retomar o controle e a tranquilidade no seu cotidiano.</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>

  <div v-if="activeModal === 'bipolar'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Transtorno Bipolar</h3>
      <img :src="'/transtorno-bipolar.jpg'" alt="Transtorno Bipolar" class="modal-image" />
      <div class="modal-text">
        <p>A estabilização do humor é o pilar central do tratamento. Combinamos terapias de psicoeducação com estratégias farmacológicas precisas para prevenir recaídas e oscilações bruscas entre episódios de mania e depressão.</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>

  <div v-if="activeModal === 'tdah'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Manejo do TDAH</h3>
      <img :src="'/tdah.jpg'" alt="TDAH" class="modal-image" />
      <div class="modal-text">
        <p>O tratamento do TDAH em adultos e adolescentes foca no desenvolvimento de estratégias de organização, foco e regulação da impulsividade.</p>
        <p>O acompanhamento combina intervenções comportamentais com suporte farmacológico direcionado para melhorar o desempenho acadêmico, profissional e as relações interpessoais.</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>

  <div v-if="activeModal === 'toc'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Tratamento para TOC</h3>
      <img :src="'/toc.jpg'" alt="TOC" class="modal-image" />
      <div class="modal-text">
        <p>O Transtorno Obsessivo-Compulsivo é abordado por meio de terapias integradas que visam reduzir o impacto dos pensamentos intrusivos e aliviar a necessidade de comportamentos repetitivos (compulsões).</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>

  <div v-if="activeModal === 'sono'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Transtornos do Sono</h3>
      <img :src="'/transtorno-sono.jpg'" alt="Transtornos do Sono" class="modal-image" />
      <div class="modal-text">
        <p>A investigação da insônia e de outros distúrbios do sono busca identificar as causas físicas e psicológicas subjacentes.</p>
        <p>O tratamento foca na higiene do sono, terapias específicas e regulação clínica para devolver ao paciente um descanso verdadeiramente reparador.</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>

  <div v-if="activeModal === 'esquizofrenia'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Esquizofrenia e Psicoses</h3>
      <img :src="'/esquizofrenia.jpg'" alt="Esquizofrenia" class="modal-image" />
      <div class="modal-text">
        <p>Oferecemos um acompanhamento humanizado e rigoroso focado no controle de crises, estabilização dos sintomas psicóticos e reabilitação contínua para promover a autonomia e a reintegração social segura do paciente.</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>

  <div v-if="activeModal === 'alimentares'" class="modal-overlay" @click.self="activeModal = null">
    <div class="modal-content">
      <button class="close-btn" @click="activeModal = null">×</button>
      <h3>Transtornos Alimentares</h3>
      <img :src="'/transtornos-alimentares.jpg'" alt="Transtornos Alimentares" class="modal-image" />
      <div class="modal-text">
        <p>O tratamento de condições como anorexia, bulimia e transtorno da compulsão alimentar é conduzido sob uma perspectiva médica e terapêutica integrada, visando a recuperação da saúde física e uma relação saudável com a alimentação.</p>
      </div>
      <button class="btn-fechar" @click="activeModal = null">Entendi</button>
    </div>
  </div>
</template>

<style scoped>
.specialty-wrapper {
  padding: 4rem 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f4f7f6;
  min-height: calc(100vh - 120px);
}

.specialty-card {
  background: #ffffff;
  max-width: 950px;
  width: 100%;
  padding: 4rem 5rem;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-top: 6px solid #2e7d32;
}

.subtitle {
  display: block;
  color: #2e7d32;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1a4321;
  margin-bottom: 2rem;
  text-align: center;
}

.specialty-text p {
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
  text-indent: 2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: #4a4a4a;
  font-size: 1.05rem;
}

/* =========================================
   ESTILOS DO CARROSSEL E BARRA DE ROLAGEM
   ========================================= */
.carousel-section {
  margin-top: 2rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 2rem;
}

.carousel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.carousel-header h3 {
  font-family: 'Playfair Display', serif;
  color: #1a4321;
  font-size: 1.8rem;
}

.swipe-hint {
  font-size: 0.85rem;
  color: #757575;
  font-style: italic;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.6; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(5px); }
  100% { opacity: 0.6; transform: translateX(0); }
}

.carousel-track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 2rem; /* Espaço pro trilho grosso */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  
  /* Liberando a espessura para navegadores modernos */
  scrollbar-width: auto; 
  scrollbar-color: #2e7d32 #e8f5e9;
}

/* Forçando o scrollbar grosso via :deep */
:deep(.carousel-track::-webkit-scrollbar) {
  height: 24px !important; 
  display: block !important;
}

:deep(.carousel-track::-webkit-scrollbar-track) {
  background: #e8f5e9 !important; 
  border-radius: 12px !important;
}

:deep(.carousel-track::-webkit-scrollbar-thumb) {
  background-color: #2e7d32 !important; 
  border-radius: 12px !important;
}

:deep(.carousel-track::-webkit-scrollbar-thumb:hover) {
  background-color: #1a4321 !important; 
}

/* Setas grossas acompanhando os 24px */
:deep(.carousel-track::-webkit-scrollbar-button:single-button) {
  display: block !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: 16px !important; 
  width: 36px !important;           
  height: 24px !important;          
}

:deep(.carousel-track::-webkit-scrollbar-button:single-button:decrement) {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232e7d32'><path d='M14 7l-5 5 5 5V7z'/></svg>") !important;
}
:deep(.carousel-track::-webkit-scrollbar-button:single-button:decrement:hover) {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a4321'><path d='M14 7l-5 5 5 5V7z'/></svg>") !important;
}

:deep(.carousel-track::-webkit-scrollbar-button:single-button:increment) {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232e7d32'><path d='M10 17l5-5-5-5v10z'/></svg>") !important;
}
:deep(.carousel-track::-webkit-scrollbar-button:single-button:increment:hover) {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a4321'><path d='M10 17l5-5-5-5v10z'/></svg>") !important;
}

/* =========================================
   ESTILOS DOS CARDS
   ========================================= */
.condition-card {
  flex: 0 0 280px; 
  scroll-snap-align: start; 
  background: #fcfcfc;
  border: 1px solid #eeeeee;
  border-left: 4px solid #2e7d32;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.02);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.condition-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(46, 125, 50, 0.1);
}

.card-image-link {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: transform 0.2s ease;
}

.card-image-link:hover {
  transform: scale(1.03);
}

.condition-card h4 {
  font-family: 'Montserrat', sans-serif;
  color: #2e7d32;
  font-size: 1.15rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.condition-card p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555555;
  text-align: left;
}

/* =========================================
   ESTILOS DOS POP-UPS (MODAIS)
   ========================================= */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #ffffff;
  width: 90%;
  max-width: 500px;
  padding: 30px;
  border-radius: 12px;
  position: relative;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #888;
}

.close-btn:hover {
  color: #d32f2f;
}

.modal-content h3 {
  font-family: 'Playfair Display', serif;
  color: #1a4321;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  margin-top: 0;
}

.modal-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.modal-text p {
  font-family: 'Montserrat', sans-serif;
  color: #444444;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
}

.btn-fechar {
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  width: 100%;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s;
}

.btn-fechar:hover {
  background-color: #1a4321;
}

/* =========================================
   RESPONSIVIDADE DA PÁGINA
   ========================================= */
@media (max-width: 768px) {
  .specialty-card {
    padding: 2rem 1.5rem;
  }
  
  .specialty-text p {
    text-align: left;
    text-indent: 0;
  }

  .carousel-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .condition-card {
    flex: 0 0 240px;
  }
}
</style>