/**
 * ICHU — Tecnología para la Ganadería Inteligente
 * Interactividad moderna, animaciones y simulador interactivo de chat en smartphone
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky con Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Menú Móvil
  const menuToggle = document.getElementById('menuToggle');
  const closeMobileNav = document.getElementById('closeMobileNav');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileNavDrawer.classList.add('active');
    mobileNavOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNavDrawer.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
  if (closeMobileNav) closeMobileNav.addEventListener('click', closeMobileMenu);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 3. Animaciones al hacer Scroll (IntersectionObserver)
  const fadeElements = document.querySelectorAll('.fade-up');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });

  // 4. Simulador Interactivo de Chat en Smartphone (Celular)
  const phoneChatMessages = document.getElementById('phoneChatMessages');
  const phoneChatInput = document.getElementById('phoneChatInput');
  const phoneSendBtn = document.getElementById('phoneSendBtn');
  const quickChips = document.querySelectorAll('.quick-chip-btn');

  function getCurrentTimeString() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  }

  function addChatMessage(text, type = 'outgoing') {
    if (!phoneChatMessages) return;
    
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type}`;
    bubble.innerHTML = `
      <div>${text}</div>
      <div class="chat-time">${getCurrentTimeString()}</div>
    `;
    phoneChatMessages.appendChild(bubble);
    phoneChatMessages.scrollTop = phoneChatMessages.scrollHeight;
  }

  function simulateIncomingResponse(responseText, delay = 1200) {
    if (!phoneChatMessages) return;

    // Mostrar indicador temporal de "escribiendo..."
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-bubble incoming typing-indicator-bubble';
    typingIndicator.style.color = '#9CA3AF';
    typingIndicator.style.fontStyle = 'italic';
    typingIndicator.innerHTML = `<span>ICHU está escribiendo...</span>`;
    phoneChatMessages.appendChild(typingIndicator);
    phoneChatMessages.scrollTop = phoneChatMessages.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      addChatMessage(responseText, 'incoming');
    }, delay);
  }

  function handleUserPhoneInput() {
    if (!phoneChatInput) return;
    const message = phoneChatInput.value.trim();
    if (!message) return;

    addChatMessage(message, 'outgoing');
    phoneChatInput.value = '';

    // Respuesta inteligente automática según el texto
    const lower = message.toLowerCase();
    if (lower.includes('ganadero') || lower.includes('vaca') || lower.includes('toro') || lower.includes('hato') || lower.includes('campo')) {
      simulateIncomingResponse("¡Excelente! En la demo te mostraremos cómo registrar tu ganado por arete, supervisar pastoreo y recibir alertas de temperatura al instante.");
    } else if (lower.includes('veterinario') || lower.includes('salud') || lower.includes('clinico') || lower.includes('tratamiento')) {
      simulateIncomingResponse("¡Perfecto colega! Podrás explorar el historial térmico, bitácora de visitas y registro de tratamientos.");
    } else if (lower.includes('sensor') || lower.includes('arete') || lower.includes('iot') || lower.includes('dispositivo')) {
      simulateIncomingResponse("Nuestros dispositivos conceptuales están diseñados para telemetría en altitud y clima andino.");
    } else {
      simulateIncomingResponse("¡Mensaje recibido! Nos dará mucho gusto agendar tu demostración personalizada de ICHU. Déjanos tus datos en el formulario para coordinar.");
    }
  }

  if (phoneSendBtn) {
    phoneSendBtn.addEventListener('click', handleUserPhoneInput);
  }

  if (phoneChatInput) {
    phoneChatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserPhoneInput();
      }
    });
  }

  quickChips.forEach(chip => {
    chip.addEventListener('click', function() {
      const text = this.getAttribute('data-msg') || this.innerText;
      addChatMessage(text, 'outgoing');
      
      if (text.includes('ganaderos')) {
        simulateIncomingResponse("¡Listo! Preparamos un recorrido enfocado en control de lote, aguadas y alertas preventivas.");
      } else if (text.includes('veterinario')) {
        simulateIncomingResponse("¡Excelente! Te mostraremos cómo visualizar la curva de temperatura y prescripciones previas.");
      } else {
        simulateIncomingResponse("Los sensores IoT de ICHU recopilan temperatura, dinámica y ubicación para transmitirlos a la plataforma.");
      }
    });
  });

  // 5. Manejo del Formulario de Demostración
  const demoForm = document.getElementById('demoRequestForm');
  const demoModalOverlay = document.getElementById('demoModalOverlay');
  const closeDemoModal = document.getElementById('closeDemoModal');

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre')?.value || 'Amigo del campo';
      const submitBtn = demoForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width:18px; height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        <span>Enviando solicitud...</span>
      `;

      // Reflejar también en el smartphone simulado
      addChatMessage(`Hola, soy ${nombre}. He solicitado una demostración desde el formulario.`, 'outgoing');

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        demoForm.reset();
        
        simulateIncomingResponse(`¡Hola ${nombre}! Hemos registrado tu solicitud de demo exitosamente. Te contactaremos muy pronto.`);

        if (demoModalOverlay) {
          demoModalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }, 900);
    });
  }

  if (closeDemoModal) {
    closeDemoModal.addEventListener('click', () => {
      demoModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (demoModalOverlay) {
    demoModalOverlay.addEventListener('click', (e) => {
      if (e.target === demoModalOverlay) {
        demoModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 6. Scroll suave para enlaces ancla
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
