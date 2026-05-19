<script setup>
import { ref } from 'vue';

// Controla qual pop-up está ativo: 'redes', 'contato' ou null
const activeHeaderModal = ref(null);
</script>

<template>
  <div class="app-wrapper">
    <header class="navbar">
      <div class="brand-container">
        <div class="logo">
          <span class="phi-symbol">Φ</span>
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

      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/sobre-nos">Sobre nós</router-link>
        <router-link to="/psiquiatria">Psiquiatria</router-link>
        <a href="#" @click.prevent="activeHeaderModal = 'redes'">Redes Sociais</a>
        <a href="#" @click.prevent="activeHeaderModal = 'contato'">Contato</a>
      </nav>
    </header>

    <router-view />

    <div v-if="activeHeaderModal === 'redes'" class="modal-overlay" @click.self="activeHeaderModal = null">
      <div class="contact-modal">
        <button class="close-btn" @click="activeHeaderModal = null">×</button>
        
        <div class="modal-header">
          <span class="phi-symbol">Φ</span>
          <h2>Siga nossas redes sociais</h2>
          <p>Siga-nos para acompanhar novidades e conteúdos sobre saúde mental.</p>
        </div>

        <div class="contact-grid">
          <a href="#" target="_blank" class="contact-card instagram">
            <img src="/instagram.png" alt="Instagram" class="modal-icon-img" />
            <div class="info">
              <strong>Instagram</strong>
              <span>@instituto.omnis</span>
            </div>
          </a>

          <a href="#" target="_blank" class="contact-card facebook">
            <img src="/facebook-novo.png" alt="Facebook" class="modal-icon-img" />
            <div class="info">
              <strong>Facebook</strong>
              <span>/instituto.omnis</span>
            </div>
          </a>

          <a href="#" target="_blank" class="contact-card linkedin">
            <img src="/linkedin.png" alt="LinkedIn" class="modal-icon-img" />
            <div class="info">
              <strong>LinkedIn</strong>
              <span>Instituto Omnis de Psiquiatria</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div v-if="activeHeaderModal === 'contato'" class="modal-overlay" @click.self="activeHeaderModal = null">
      <div class="contact-modal">
        <button class="close-btn" @click="activeHeaderModal = null">×</button>
        
        <div class="modal-header">
          <span class="phi-symbol">Φ</span>
          <h2>Escolha como deseja agendar sua consulta ou tirar dúvidas.</h2>
          <p>Estamos aqui para ajudar</p>
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

          <a href="mailto:renato.br@terra.com.br" class="contact-card email">
            <img src="/e-mail.png" alt="E-mail" class="modal-icon-img" />
            <div class="info">
              <strong>E-mail</strong>
              <span>renato.br@terra.com.br</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Onde Estamos</h3>
          <p>SGAS Qd. 910 Conj. B Bloco F</p>
          <p>Salas 224/226 - Ed. Mix Park Sul</p>
          <p>Brasília / DF - CEP: 70390-100</p>
        </div>

        <div class="footer-section">
          <h3>Fale Conosco</h3>
          <p><strong>Telefone:</strong> (61) 3526-4600</p>
          <p><strong>Celular/WhatsApp:</strong> (61) 9.8408-0875</p>
          <p><strong>E-mail:</strong> renato.br@terra.com.br</p>
        </div>

        <div class="footer-section">
          <h3>Localização</h3>
          <iframe 
            src="https://maps.google.com/maps?q=Edifício+Mix+Park+Sul,+SGAS+910+-+Brasília,+DF,+70390-100&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="85%" 
            height="100" 
            style="border:0; border-radius: 8px;" 
            allowfullscreen
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <div class="footer-bottom">
       <p>Instituto Omnis de Psiquiatria / CNPJ: 10.992.674/0001-73 / Todos os direitos reservados / Responsável Técnico: <strong style="font-weight: bold;">Dr. Renato Brito de Resende</strong> | CRM/DF 10581</p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav-links a.router-link-exact-active {
  color: #25D366;
  font-weight: 700;
}

/* ESTILOS DO RODAPÉ */
.site-footer {
  background-color: #1a4321;
  color: #ffffff;
  padding: 1.5rem 5% 1.5rem; /* <-- cima, laterais, embaixo */
  font-family: 'Montserrat', sans-serif;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #25D366; 
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

.logo-text h1 {
  font-family: 'Edwardian Script ITC', 'Great Vibes', cursive !important;
  font-size: 2.5rem !important; 
  font-weight: normal !important;
  color: #1a4321 !important;  
  margin: 1px 8px 6px 0 !important; 
  letter-spacing: 1px !important;
  line-height: 1 !important;
}

.clinic-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 20px;
}

.legal-name {
  font-family: Arial, sans-serif;
  font-size: 0.60rem !important; 
  color: #2e7d32;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center !important; 
  display: block !important; 
}

.professional-info, .contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px; 
}

.specialty-crm, .address {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #555555; 
}

.doctor-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #1a4321;
}

.phone {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #2e7d32;
  font-weight: 600;
  margin-top: 10px;
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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.contact-modal {
  background-color: #ffffff;
  width: 90%;
  max-width: 460px;
  padding: 40px 30px;
  border-radius: 16px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0,0,0,0.3);
  border-top: 6px solid #1a4321;
}

.contact-modal .close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
}

.contact-modal .close-btn:hover {
  color: #d32f2f;
}

.modal-header {
  text-align: center;
  margin-bottom: 30px;
}

.modal-header .phi-symbol {
  font-size: 3rem;
  color: #2e7d32;
  display: block;
  margin-bottom: 10px;
}

.modal-header h2 {
  font-family: 'Playfair Display', serif;
  color: #1a4321;
  font-size: 1.65rem;
  line-height: 1.3;
  margin-bottom: 8px;
}

.modal-header p {
  color: #555;
  font-size: 0.95rem;
}

.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 20px;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e0e0e0;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.08);
}

/* Estilização profissional para as imagens dos logos */
.modal-icon-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.contact-card .info {
  display: flex;
  flex-direction: column;
}

.contact-card .info strong {
  color: #1a4321;
  font-size: 1.05rem;
}

.contact-card .info span {
  color: #666;
  font-size: 0.85rem;
}

/* Efeitos de foco por rede/card */
.contact-card.whatsapp:hover { border-color: #25D366; background-color: #f0fdf4; }
.contact-card.phone:hover { border-color: #2e7d32; background-color: #f1f8e9; }
.contact-card.email:hover { border-color: #fbbc05; background-color: #fffde7; }
.contact-card.instagram:hover { border-color: #e1306c; background-color: #fce4ec; }
.contact-card.facebook:hover { border-color: #1877f2; background-color: #eaf2ff; }
.contact-card.linkedin:hover { border-color: #0077b5; background-color: #f0f7ff; }
</style>