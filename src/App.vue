<template>
  <div class="app-wrapper">
    <!-- CABEÇALHO GLOBAL -->
    <header class="navbar">
      <div class="brand-container">
        <div class="logo">
          <span class="phi-symbol">&Phi;</span>
          <div class="logo-text">
            <h1>Instituto Omnis de Psiquiatria</h1>
            <span class="legal-name">Instituto Omnis de Psiquiatria Ltda-ME</span>
          </div>
        </div>

        <div class="clinic-details">
          <div class="professional-info">
            <span class="doctor-name">Dr. Renato Brito de Resende</span>
            <div class="specialty-crm">
              <span class="specialty">Psiquiatra</span>
              <span class="divider">|</span>
              <span class="crm">CRM/DF 10581</span>
            </div>
          </div>
          <div class="contact-info">
            <span class="address">Ed. Mix Park Sul - Brasília/DF</span>
            <span class="phone">Contato: (61) 3526-4600</span>
          </div>
        </div>
      </div>

      <!-- NAVEGAÇÃO -->
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/sobre-nos">Sobre nós</router-link>
        <a href="#">Especialidades</a>
        <a href="#">Blog</a>
        <a href="#">Contato</a>
      </nav>
    </header>

    <!-- CONTEÚDO DINÂMICO DAS PÁGINAS (HOME / SOBRE NÓS) -->
    <router-view />

    <!-- RODAPÉ GLOBAL -->
    <footer class="site-footer">
      <div class="footer-content">
        <!-- Coluna 1: Endereço -->
        <div class="footer-section">
          <h3>Onde Estamos</h3>
          <p>SGAS Qd. 910 Conj. B Bloco F</p>
          <p>Salas 224/226 - Ed. Mix Park Sul</p>
          <p>Brasília / DF - CEP: 70390-100</p>
        </div>

        <!-- Coluna 2: Contato -->
        <div class="footer-section">
          <h3>Fale Conosco</h3>
          <p><strong>Telefone:</strong> (61) 3526-4600</p>
          <p><strong>Celular/WhatsApp:</strong> (61) 9.8408-0875</p>
          <p><strong>E-mail:</strong> renato.br@terra.com.br</p>
        </div>

        <!-- Coluna 3: Mapa -->
        <div class="footer-section">
          <h3>Localização</h3>
          <!-- Mapa com pino fixado no Edifício Mix Park Sul -->
          <iframe 
            src="https://maps.google.com/maps?q=Edifício+Mix+Park+Sul,+SGAS+910+-+Brasília,+DF,+70390-100&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="150" 
            style="border:0; border-radius: 8px;" 
            allowfullscreen
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Instituto Omnis de Psiquiatria. Todos os direitos reservados. Responsável Técnico: Dr. Renato Brito de Resende | CRM/DF 10581</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Força o conteúdo a empurrar o rodapé para o final da tela sempre */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* O menu ativo fica verde */
.nav-links a.router-link-exact-active {
  color: #25D366;
  font-weight: 700;
}

/* ESTILOS DO RODAPÉ */
.site-footer {
  background-color: #1a4321;
  color: #ffffff;
  padding: 3rem 5% 1rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: auto; /* Empurra o rodapé para o fim da página */
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #25D366; /* Verde claro do WhatsApp para destaque */
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #2e7d32;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.footer-section p {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #2e7d32;
  font-size: 0.85rem;
  color: #b0bec5;
  line-height: 1.5;
}

/* Controle de espaçamento das informações do cabeçalho */
.clinic-details {
  display: flex;
  flex-direction: column;
  gap: 1px; /* Aumenta a distância entre o bloco do Doutor e o bloco de Endereço */
}

.professional-info, .contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Aumenta a distância linha por linha dentro de cada bloco */
}

/* Garante que a linha da especialidade e CRM continuem lado a lado */
.specialty-crm {
  display: flex;
  gap: 6px; 
}
</style>