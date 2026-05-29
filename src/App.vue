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

