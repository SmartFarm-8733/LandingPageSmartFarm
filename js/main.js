/**
 * ICHU — Interactividad: header, menú accesible, animaciones, contadores,
 * simulador de chat y formulario con envío por WhatsApp.
 */
(() => {
  'use strict';

  // IMPORTANTE: reemplaza por el número real de WhatsApp (código de país + número, sin "+" ni espacios).
  const WHATSAPP_NUMBER = '51900000000';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* 1. Header con sombra al hacer scroll */
  const header = $('#siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  /* 2. Menú móvil accesible */
  const menuToggle = $('#menuToggle');
  const drawer = $('#mobileDrawer');
  const drawerOverlay = $('#drawerOverlay');
  const closeDrawerBtn = $('#closeDrawer');
  let lastFocused = null;

  function openDrawer() {
    lastFocused = document.activeElement;
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const first = $('.drawer-link', drawer);
    if (first) first.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  menuToggle.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  $$('.drawer-link', drawer).forEach((link) => link.addEventListener('click', closeDrawer));

  /* 3. Animaciones de aparición */
  const revealEls = $$('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* 4. Contadores de estadísticas */
  const counters = $$('.stat-value[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => counterObserver.observe(el));
  } else {
    counters.forEach(animateCounter);
  }

  /* 5. Simulador de chat (uso seguro de textContent, sin innerHTML) */
  const phoneChat = $('#phoneChat');
  const phoneInput = $('#phoneInput');
  const phoneSend = $('#phoneSend');
  const chips = $$('.chip');

  function currentTime() {
    const now = new Date();
    let hours = now.getHours() % 12;
    if (hours === 0) hours = 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes} ${now.getHours() >= 12 ? 'pm' : 'am'}`;
  }

  function addBubble(text, type) {
    const bubble = document.createElement('div');
    bubble.className = `bubble ${type}`;
    const p = document.createElement('p');
    p.textContent = text;
    const time = document.createElement('span');
    time.className = 'bubble-time';
    time.textContent = currentTime();
    bubble.append(p, time);
    phoneChat.appendChild(bubble);
    phoneChat.scrollTop = phoneChat.scrollHeight;
  }

  function reply(text) {
    if (prefersReduced) {
      addBubble(text, 'in');
      return;
    }
    const typing = document.createElement('div');
    typing.className = 'bubble in typing';
    typing.textContent = 'ICHU está escribiendo...';
    phoneChat.appendChild(typing);
    phoneChat.scrollTop = phoneChat.scrollHeight;
    setTimeout(() => {
      typing.remove();
      addBubble(text, 'in');
    }, 1100);
  }

  function botResponse(text) {
    const lower = text.toLowerCase();
    if (/(ganadero|vaca|toro|hato|campo|pastoreo)/.test(lower)) {
      return '¡Excelente! En la demo te mostraremos cómo registrar tu ganado por arete, supervisar el pastoreo y recibir alertas de temperatura al instante.';
    }
    if (/(veterinario|salud|clínico|clinico|tratamiento|historial)/.test(lower)) {
      return '¡Perfecto! Podrás explorar el historial térmico, la bitácora de visitas y el registro de tratamientos.';
    }
    if (/(sensor|arete|iot|dispositivo)/.test(lower)) {
      return 'Nuestros dispositivos están diseñados para telemetría en altitud y clima andino.';
    }
    return '¡Mensaje recibido! Agendemos tu demostración personalizada: deja tus datos en el formulario para coordinar.';
  }

  function handleUserMessage() {
    const message = phoneInput.value.trim();
    if (!message) return;
    addBubble(message, 'out');
    phoneInput.value = '';
    reply(botResponse(message));
  }

  if (phoneSend && phoneInput) {
    phoneSend.addEventListener('click', handleUserMessage);
    phoneInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserMessage();
      }
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      addBubble(chip.dataset.msg, 'out');
      reply(botResponse(chip.dataset.msg));
    });
  });

  /* 6. Formulario: validación + envío por WhatsApp */
  const form = $('#demoForm');
  const modal = $('#demoModal');
  const closeModalBtn = $('#closeModal');

  function setError(id, message) {
    const input = $(`#${id}`);
    const errorEl = $(`#err-${id}`);
    input.classList.toggle('is-invalid', Boolean(message));
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (errorEl) errorEl.textContent = message || '';
  }

  function validateForm(data) {
    let firstInvalid = null;
    const rules = {
      nombre: data.nombre.trim() ? '' : 'Ingresa tu nombre.',
      apellidos: data.apellidos.trim() ? '' : 'Ingresa tus apellidos.',
      correo: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.correo.trim()) ? '' : 'Ingresa un correo válido.',
      telefono: /^[+()\d\s-]{6,20}$/.test(data.telefono.trim()) ? '' : 'Ingresa un teléfono válido.',
      tipoUsuario: data.tipoUsuario ? '' : 'Selecciona tu perfil.',
    };
    Object.entries(rules).forEach(([field, message]) => {
      setError(field, message);
      if (message && !firstInvalid) firstInvalid = $(`#${field}`);
    });
    return firstInvalid;
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const firstInvalid = validateForm(data);
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const lines = [
        'Hola ICHU, quiero solicitar una demostración.',
        `Nombre: ${data.nombre} ${data.apellidos}`,
        `Correo: ${data.correo}`,
        `Teléfono: ${data.telefono}`,
        `Perfil: ${data.tipoUsuario}`,
      ];
      if (data.mensaje && data.mensaje.trim()) lines.push(`Mensaje: ${data.mensaje.trim()}`);

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(waUrl, '_blank', 'noopener');

      if (modal) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeModalBtn.focus();
      }
      form.reset();
      addBubble(`Hola, soy ${data.nombre}. Solicité una demostración desde el formulario.`, 'out');
      reply(`¡Hola ${data.nombre}! Registramos tu solicitud. Te contactaremos muy pronto.`);
    });

    ['nombre', 'apellidos', 'correo', 'telefono', 'tipoUsuario'].forEach((id) => {
      const input = $(`#${id}`);
      input.addEventListener('input', () => setError(id, ''));
    });
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  /* 7. Tecla Escape cierra menú y modal */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (modal && modal.classList.contains('open')) {
      closeModal();
    } else if (drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  /* 8. Iconos y año del footer */
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
