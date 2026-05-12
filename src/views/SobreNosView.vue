<template>
  <main class="about-wrapper">
    <div class="about-card">
      <span class="subtitle">Conheça nossa trajetória</span>
      <h2>Sobre o Instituto Omnis</h2>
      
      <div class="about-text">
        <p>
          O Instituto Omnis de Psiquiatria foi fundado pelo <strong>Dr. Renato Brito de Resende</strong> 
          com o propósito fundamental de oferecer excelência médica e acolhimento especializado 
          na área da saúde mental. Com quase duas décadas de dedicação exclusiva à psiquiatria, 
          o Dr. Renato construiu uma sólida trajetória clínica.
        </p>
        <p>
          Sua prática profissional une a tomada de decisão ágil e resolutiva, exigida nas 
          emergências psiquiátricas, ao acompanhamento contínuo, aprofundado e humanizado 
          característico do atendimento em consultório.
        </p>
        <p>
          O compromisso central do Instituto é diagnosticar, tratar e acompanhar os pacientes 
          acometidos pelas principais patologias da mente, atuando sempre com rigor científico 
          e empatia. Por meio de uma abordagem individualizada, a clínica busca proporcionar 
          a verdadeira qualidade de vida, colocando a saúde integral e o bem-estar de cada 
          indivíduo sempre em primeiro lugar.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* O CSS isolado apenas para este componente */
.about-wrapper {
  padding: 4rem 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f4f7f6;
  min-height: calc(100vh - 120px);
}

.about-card {
  background: #ffffff;
  max-width: 850px;
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
  margin-bottom: 2.5rem;
  text-align: center;
}

.about-text p {
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
  text-indent: 2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .about-card {
    padding: 2rem;
  }
  .about-text p {
    text-align: left;
    text-indent: 0;
  }
}
</style>