// src/main.ts
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button');
  
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      // Futura integração com WhatsApp da clínica
      console.log('Redirecionando para o WhatsApp do Instituto Omnis...');
      window.open('https://wa.me/556135264600', '_blank'); 
    });
  }
});