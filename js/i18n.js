/**
 * ICHU — i18n: alternancia ES/EN en tiempo de ejecución.
 * El diccionario mapea el texto exacto en español a su versión en inglés.
 * Las cadenas sin traducción permanecen intactas (fallback seguro).
 */
(() => {
  'use strict';

  const LANG_KEY = 'ichu-lang';

  const DICT = {
    // --- Marca / global -----------------------------------------------------
    'ICHU - Inicio': 'ICHU - Home',
    'Saltar al contenido': 'Skip to content',
    'Tecnología para la ganadería inteligente · Perú': 'Technology for smart livestock farming · Peru',
    'Tecnología para la ganadería inteligente': 'Technology for smart livestock farming',
    'Abrir menú': 'Open menu',
    'Cerrar menú': 'Close menu',
    'Menú': 'Menu',
    'Menú móvil': 'Mobile menu',
    'Navegación principal': 'Main navigation',
    'Navegación móvil': 'Mobile navigation',
    'Bajar a la siguiente sección': 'Scroll to next section',
    'Cambiar idioma: español': 'Switch language: Spanish',
    'Cambiar idioma: inglés': 'Switch language: English',

    // --- Navegación ----------------------------------------------------------
    'Inicio': 'Home',
    'Conoce ICHU +': 'Meet ICHU +',
    'Quiénes somos': 'About us',
    'Nuestro propósito': 'Our purpose',
    'Web y Media': 'Web & Media',
    'Videos informativos': 'Informative videos',
    'Ganaderos': 'Farmers',
    'Para ganaderos': 'For farmers',
    'Veterinarios': 'Veterinarians',
    'Para veterinarios': 'For veterinarians',
    'Tecnología': 'Technology',
    'Sensores IoT': 'IoT Sensors',
    'Cómo funciona': 'How it works',
    'Paso a paso': 'Step by step',
    'Contacto': 'Contact',
    'Trabajemos juntos': 'Let\'s work together',
    'Submenú de Quiénes somos': 'About us submenu',
    'Submenú de Tecnología': 'Technology submenu',
    'Enlaces del sitio': 'Site links',
    'Volver al inicio': 'Back to home',

    // --- Página: Cómo funciona -----------------------------------------------
    'Cómo funciona — ICHU · Paso a paso': 'How it works — ICHU · Step by step',
    'ICHU · Cómo funciona': 'ICHU · How it works',
    'Del arete a la decisión, en tres pasos.': 'From ear tag to decision, in three steps.',
    'Registra': 'Record',
    'Arete y ficha por animal': 'Tag & record per animal',
    'Supervisa': 'Monitor',
    'Señales y alertas en vivo': 'Live signals & alerts',
    'Decide': 'Decide',
    'Con el veterinario, a tiempo': 'With the vet, on time',
    'Preparando el demo': 'Demo in preparation',
    'Las pantallas de la app llegarán muy pronto.': 'The app screens are coming very soon.',
    'Estamos preparando el recorrido paso a paso de ICHU con datos reales del campo: la ficha del ejemplar, las alertas y el mapa de pastoreo.': 'We are preparing ICHU\'s step-by-step walkthrough with real field data: the animal record, alerts and the grazing map.',

    // --- Página: Web y Media ---------------------------------------------------
    'Web y Media — ICHU · Videos informativos': 'Web & Media — ICHU · Informative videos',
    'ICHU · Web y Media': 'ICHU · Web & Media',
    'Videos informativos de ICHU.': 'ICHU informative videos.',
    'Recorridos por la plataforma y desde el terreno: fichas digitales, pastoreo y acompañamiento veterinario contados en video.': 'Walkthroughs of the platform and from the field: digital records, grazing and veterinary support told through video.',
    'Web · Recorrido del producto': 'Web · Product walkthrough',
    'La plataforma, parte por parte.': 'The platform, piece by piece.',
    'Descubre cómo ICHU convierte el registro diario en decisiones oportunas: de la ficha digital de cada ejemplar al mapa de pastoreo del hato completo.': 'Discover how ICHU turns daily logging into timely decisions: from each animal\'s digital record to the grazing map of the whole herd.',
    'Ficha clínica y productiva por animal': 'Clinical & production record per animal',
    'Mapa de lotes, aguadas y pastoreo': 'Map of paddocks, water points & grazing',
    'Alertas tempranas en la app y el tablet': 'Early alerts in the app and tablet',
    'Ver en YouTube': 'Watch on YouTube',
    'Media · Historias del campo': 'Media · Field stories',
    'El campo, en imagen y en voz.': 'The countryside, in image and voice.',
    'Entrevistas, jornadas veterinarias y el día a día de quienes llevan su hato en ICHU. Historias reales desde el potrero.': 'Interviews, veterinary visits and the daily life of those who run their herd on ICHU. Real stories from the pasture.',
    'Entrevistas a ganaderos y veterinarios': 'Interviews with farmers and veterinarians',
    'Visitas y jornadas de campo reales': 'Real field visits and farm days',
    'Tips sanitarios y de manejo': 'Health & handling tips',

    // --- Portada ---------------------------------------------------------------
    'ICHU — Tecnología para la Ganadería Inteligente': 'ICHU — Technology for Smart Livestock Farming',
    'Plataforma ganadera para todos': 'A livestock platform for everyone',
    'Cada animal tiene una': 'Every animal has a',
    'historia.': 'story.',
    'ayuda a contarla.': 'helps tell it.',
    'Información que acompaña al ganado y a quienes lo cuidan.': 'Information that supports the livestock and those who care for it.',
    'Conoce ICHU antes que nadie.': 'Get to know ICHU before anyone else.',
    'Tecnología pensada para la ganadería que conecta la información de cada ejemplar, del potrero al veterinario.': 'Technology designed for livestock that connects each animal\'s information, from the pasture to the veterinarian.',
    'Solicitar una demostración': 'Request a demonstration',
    'Solicitar demostración para mi hato': 'Request a demo for my herd',
    'Solicitar demostración para profesionales': 'Request a demo for professionals',

    // --- Estadísticas ------------------------------------------------------------
    'ICHU en números': 'ICHU in numbers',
    'variables vitales monitoreadas por animal: temperatura, actividad y ubicación.': 'vital variables monitored per animal: temperature, activity and location.',
    'etapas de trazabilidad cubiertas, de la identificación al seguimiento final.': 'traceability stages covered, from identification to final follow-up.',
    'Acompañamiento veterinario cercano': 'Close veterinary support',
    'Datos': 'Data',
    'Seguimiento': 'Follow-up',
    'Decisión': 'Decision',
    'Eventos': 'Events',
    'Inventario vivo': 'Live inventory',
    'Animal': 'Animal',

    // --- Quiénes somos -------------------------------------------------------------
    'Desde 2026 · Perú': 'Since 2026 · Peru',
    'Somos una empresa peruana que innova la ganadería con tecnología cercana, útil y pensada para la realidad del campo.': 'We are a Peruvian company innovating livestock farming with close, useful technology designed for the reality of the countryside.',
    'Desde 2026 desarrollamos ICHU: una plataforma que reúne la información de cada ejemplar, las señales del hato y el acompañamiento veterinario para tomar decisiones oportunas y cuidar mejor cada producción.': 'Since 2026 we have been developing ICHU: a platform that brings together each animal\'s information, herd signals and veterinary support to make timely decisions and better protect every production.',
    'Identificación individual por arete': 'Individual identification by ear tag',
    'Decisiones oportunas y basadas en datos': 'Timely, data-driven decisions',
    'Conocer cómo funciona': 'See how it works',
    'Arete inteligente ICHU': 'ICHU smart ear tag',
    'Arete inteligente ICHU para el monitoreo del ganado': 'ICHU smart ear tag for livestock monitoring',

    // --- El problema -----------------------------------------------------------------
    'Diagnóstico del campo': 'Field diagnosis',
    'El campo tiene información.': 'The field has information.',
    'El reto es convertirla en decisiones.': 'The challenge is turning it into decisions.',
    'La labor ganadera genera datos todos los días. Sin embargo, gran parte de este conocimiento se pierde o se queda fragmentado.': 'Livestock work generates data every day. However, much of this knowledge is lost or stays fragmented.',
    'Registros manuales y dispersos': 'Manual, scattered records',
    'Cuadernos de campo y notas sueltas que dificultan reconstruir el historial completo y continuo de cada animal cuando se necesita con urgencia.': 'Field notebooks and loose notes that make it hard to rebuild each animal\'s complete, continuous history when it is urgently needed.',
    'Detección tardía de cambios': 'Late detection of changes',
    'Un descenso en el pastoreo, una variación térmica o un aislamiento en el potrero suelen notarse cuando el problema ya ha avanzado, elevando costos y riesgos.': 'A drop in grazing, a thermal variation or isolation in the paddock is often noticed when the problem has already advanced, raising costs and risks.',
    'Brecha en visitas veterinarias': 'Gap in veterinary visits',
    'Cuando el médico veterinario llega al corral, muchas veces debe evaluar sin contar con la bitácora previa de síntomas, dosis aplicadas o fechas exactas.': 'When the veterinarian reaches the pen, they often have to assess without the prior log of symptoms, applied doses or exact dates.',
    'Control de pasturas y agua': 'Pasture & water control',
    'Supervisar la rotación de parcelas de pasto, la disponibilidad de aguadas y la ubicación de grupos de animales en terrenos amplios requiere tiempo constante.': 'Supervising pasture rotation, water point availability and the location of animal groups across wide terrain requires constant time.',
    'Seguimiento de costos y pérdidas': 'Cost & loss tracking',
    'Llevar un recuento claro de forraje adicional, tratamientos y mermas resulta complejo cuando no existe una estructura organizada para el registro.': 'Keeping a clear count of extra forage, treatments and losses is complex when there is no organized structure for logging.',
    'Coordinación del equipo': 'Team coordination',
    'Dificultad para alinear lo que observa el personal de campo, lo que registra el administrador y las pautas que indica el especialista veterinario.': 'Difficulty aligning what field staff observe, what the manager logs and the guidelines given by the veterinary specialist.',

    // --- ¿Qué es ICHU? ------------------------------------------------------------------
    '¿Qué es ICHU?': 'What is ICHU?',
    'Una nueva forma de entender la ganadería.': 'A new way to understand livestock farming.',
    'La ganadería no es una hoja de cálculo estática: es un ciclo biológico vivo. ICHU organiza los hitos fundamentales de la vida de cada ejemplar para preservar su memoria productiva y sanitaria desde sus primeros días.': 'Livestock farming is not a static spreadsheet: it is a living biological cycle. ICHU organizes the key milestones of each animal\'s life to preserve its productive and health memory from its first days.',
    'Etapa 01': 'Stage 01',
    'Etapa 02': 'Stage 02',
    'Etapa 03': 'Stage 03',
    'Etapa 04': 'Stage 04',
    'Etapa 05': 'Stage 05',
    'Etapa 06': 'Stage 06',
    'Etapa 07': 'Stage 07',
    'Cada animal, una historia continua.': 'Every animal, one continuous story.',
    'Identificado individualmente con su arete y características.': 'Individually identified with its tag and traits.',
    'Identificación': 'Identification',
    'Asignación de arete, genealogía, fecha de nacimiento y características.': 'Ear tag assignment, genealogy, birth date and traits.',
    'Registro de celos, servicios, partos, destetes o cambios repentinos.': 'Log of heats, breedings, births, weanings or sudden changes.',
    'Tratamiento': 'Treatment',
    'Aplicación de medicamentos o vacunas con registro de dosis.': 'Medication or vaccine application with dose logging.',
    'Evaluación general: condición corporal 3.5': 'Overall assessment: body condition score 3.5',
    'Aplicación antiparasitario de amplio espectro': 'Broad-spectrum antiparasitic application',
    'Comprobación de recuperación y continuidad productiva.': 'Recovery check and productive continuity.',
    'Ganadero': 'Rancher',

    // --- Ganaderos / Veterinarios (splits) ------------------------------------------------
    'Para quienes están todos los días en el campo.': 'For those who are out in the field every day.',
    'Diseñado para simplificar la jornada de trabajo. Un espacio claro para tener el control de su ganado en la palma de la mano.': 'Designed to simplify the workday. A clear space to keep your herd under control in the palm of your hand.',
    'Control de tu hato': 'Your herd under control',
    'Historial clínico': 'Clinical history',
    'El animal depende de sus pasturas, el agua y la administración del predio. ICHU ayuda a visualizar la finca como una operación ordenada.': 'The animal depends on its pastures, water and farm management. ICHU helps visualize the farm as an orderly operation.',
    'El campo en una sola vista': 'The whole farm in one view',
    'Puntos de agua': 'Water points',
    'Rotación de pastos': 'Pasture rotation',
    'Suplementación de forraje': 'Forage supplementation',
    'Disponibilidad en bebederos.': 'Water trough availability.',
    'Recuperación de canchas.': 'Paddock recovery.',
    'Alimentación': 'Feeding',
    'Nacimientos y traslados.': 'Births & transfers.',
    'Gastos & insumos': 'Expenses & supplies',
    'Gestión de insumos y aguadas:': 'Supplies & water points management:',
    'Rotación de pastos, suplementación mineral y acceso a agua.': 'Pasture rotation, mineral supplementation and water access.',
    'Control de forraje y fármacos.': 'Forage & drug control.',
    'anotación ágil de forraje, agua, gastos y registros de bajas.': 'quick logging of forage, water, expenses and loss records.',
    'identificación clara de cada animal por arete, lote, raza y edad.': 'clear identification of each animal by ear tag, lot, breed and age.',
    'expediente único por ejemplar, listo para compartir con tu veterinario.': 'a single file per animal, ready to share with your vet.',
    'Mapa del predio con lotes de pastoreo, puntos de agua y estado del pastizal': 'Farm map with grazing paddocks, water points and pasture condition',
    'Vaca Holstein en el potrero': 'Holstein cow in the paddock',
    'Vaca lechera con su ternero en el tambo': 'Dairy cow with her calf on the farm',
    'El veterinario ve más contexto. El ganadero recibe mejor acompañamiento.': 'The vet sees more context. The farmer gets better support.',
    'Accede al historial clínico completo antes y durante la visita.': 'Access the full clinical history before and during the visit.',
    'Consulta el estado general del hato y recibe alertas tempranas.': 'Check the herd\'s overall status and receive early alerts.',
    'Compartir con el veterinario:': 'Share with the veterinarian:',
    'enviar la ficha del animal con un solo toque previo a la visita.': 'send the animal\'s record with a single tap before the visit.',
    'Historial clínico consolidado:': 'Consolidated clinical history:',
    'tratamientos previos, vacunas administradas, dosis y fechas exactas de visitas.': 'previous treatments, administered vaccines, doses and exact visit dates.',
    'Alertas directas:': 'Direct alerts:',
    'notificaciones cuando un animal se aparta o registra temperaturas anormales.': 'notifications when an animal strays or registers abnormal temperatures.',
    'Visita médica': 'Medical visit',
    'Revisión clínica presencial respaldada con la lectura de datos.': 'On-site clinical review backed by data readings.',
    'Observación de actividad:': 'Activity observation:',
    'verificar si el animal recuperó su nivel de actividad regular.': 'check whether the animal regained its regular activity level.',
    'Observación de rutinas de pastoreo, desplazamiento y descanso.': 'Observe grazing, movement and resting routines.',
    'Monitoreo post-tratamiento:': 'Post-treatment monitoring:',
    'curvas de temperatura corporal y patrones de movimiento de los últimos días.': 'body temperature curves and movement patterns from recent days.',
    'Registro de observaciones técnicas:': 'Technical observations log:',
    'anotación de diagnósticos, recetas y recomendaciones para el productor.': 'logging of diagnoses, prescriptions and recommendations for the producer.',
    'Acceda a un historial cronológico fidedigno. Conozca qué ocurrió con el animal en los días previos, revise tendencias y respalde sus diagnósticos con datos contextuales reales.': 'Access a reliable chronological history. Learn what happened to the animal in previous days, review trends and back your diagnoses with real contextual data.',
    'Registro individual:': 'Individual record:',
    'vigilancia continua del hato con alertas tempranas de actividad y salud.': 'continuous herd monitoring with early alerts for activity and health.',
    'Acciones preventivas y oportunas que protegen la producción.': 'Preventive, timely actions that protect production.',
    'La tecnología observa y recopila patrones; el criterio profesional y el conocimiento ganadero definen la acción.': 'Technology observes and collects patterns; professional judgment and livestock knowledge define the action.',
    'conocer qué animales están pastando normalmente y cuáles muestran inmovilidad.': 'know which animals are grazing normally and which show immobility.',
    'Evolución de variables vitales:': 'Vital variables evolution:',
    'Manejo integral del predio': 'Whole-property management',
    'Administre la rotación de forraje, planifique los suministros hídricos y mantenga un inventario vivo de animales sin depender de hojas sueltas.': 'Manage forage rotation, plan water supplies and keep a live animal inventory without relying on loose sheets.',
    'Acceso temprano & demostraciones': 'Early access & demonstrations',
    'Simulación ilustrativa de la asistencia de ICHU. Las respuestas automáticas no reemplazan la atención del equipo.': 'Illustrative simulation of ICHU assistance. Automatic replies do not replace the team\'s attention.',
    'Ficha del ejemplar · #042': 'Animal record · #042',
    'Lote 03 - Pastizal Alto · Edad: 32 meses': 'Lot 03 - High Pasture · Age: 32 months',
    'Temperatura': 'Temperature',
    'Estado': 'Status',
    'Ubicación': 'Location',
    'Ficha clínica · Vaca Holstein #118': 'Clinical record · Holstein cow #118',
    'Registro de visita médica y seguimiento de evolución': 'Medical visit log & progress tracking',
    'Curva térmica (últimos 5 días)': 'Thermal curve (last 5 days)',
    'Óptimo': 'Optimal',
    'Dosis completada': 'Dose completed',
    'Dr. M. Quispe': 'Dr. M. Quispe',
    'Revisión de bebedero · Lote 3': 'Water trough check · Lot 3',
    'Hoy, 07:30 am': 'Today, 07:30 am',
    'Ayer, 04:15 pm': 'Yesterday, 04:15 pm',

    // --- Alertas ---------------------------------------------------------------------------
    'Señales claras': 'Clear signals',
    'Alertas preventivas, no diagnósticos automáticos.': 'Preventive alerts, not automatic diagnoses.',
    'Las alertas de ICHU funcionan como un llamado de atención oportuno para que el ganadero o veterinario inspeccione al animal a tiempo.': 'ICHU alerts work as a timely call to attention so the farmer or veterinarian can inspect the animal in time.',
    'Actividad': 'Activity',
    'Sanidad': 'Health',
    'Cambio de actividad detectado': 'Activity change detected',
    'Vaca #089 registró 45% menos desplazamiento durante las últimas 6 horas de pastoreo habitual.': 'Cow #089 logged 45% less movement during the last 6 hours of her usual grazing.',
    'Sector Potrero B · Hace 25 min': 'Potrero B Sector · 25 min ago',
    'Temperatura fuera de rango': 'Temperature out of range',
    'Toro #014 registró 39.4 °C de manera sostenida en dos lecturas consecutivas.': 'Bull #014 logged 39.4 °C sustained across two consecutive readings.',
    'Lote Reproductores · Hace 1 hora': 'Breeding Lot · 1 hour ago',
    'Animal fuera de zona habitual': 'Animal outside its usual zone',
    'Grupo de 3 vaquillonas detectadas próximas al cerco perimetral este.': 'Group of 3 heifers detected near the east perimeter fence.',
    'Cerco Este Quebrada · Hace 12 min': 'East Fence Gully · 12 min ago',
    'Seguimiento veterinario pendiente': 'Pending veterinary follow-up',
    'Recordatorio de segunda dosis de tratamiento prescrito para Ternero #201.': 'Reminder of the second dose of treatment prescribed for Calf #201.',
    'Programado para hoy · 02:00 pm': 'Scheduled for today · 02:00 pm',
    'Nota de responsabilidad técnica:': 'Technical responsibility note:',
    'las alertas y métricas mostradas son herramientas de orientación conceptual. No constituyen un diagnóstico clínico automatizado ni sustituyen el juicio profesional del médico veterinario.': 'the alerts and metrics shown are conceptual orientation tools. They do not constitute an automated clinical diagnosis nor replace the professional judgment of the veterinarian.',

    // --- Tecnología --------------------------------------------------------------------------
    'Ingeniería para el campo': 'Engineering for the field',
    'Tecnología que observa.': 'Technology that observes.',
    'Personas que deciden.': 'People who decide.',
    'ICHU está siendo concebida para conectarse progresivamente con dispositivos de telemetría e Internet de las Cosas (IoT) diseñados para soportar el clima y las condiciones de nuestra geografía.': 'ICHU is being designed to progressively connect with telemetry and Internet of Things (IoT) devices built to withstand the climate and conditions of our geography.',
    'Temperatura corporal': 'Body temperature',
    'Monitoreo de oscilaciones térmicas para identificar tempranamente cuadros febriles, estrés calórico o alteraciones metabólicas antes de síntomas visibles.': 'Monitoring thermal oscillations to early identify feverish episodes, heat stress or metabolic alterations before visible symptoms.',
    'Movimiento & dinámica': 'Movement & dynamics',
    'Detección de índices de actividad física, rumiación, tiempo de descanso o letargo que puedan sugerir malestar, celo o inicio de parto.': 'Detection of physical activity levels, rumination, resting time or lethargy that may suggest discomfort, heat or onset of labor.',
    'Ubicación en terreno': 'Field location',
    'Localización por sectores y potreros para prevenir pérdidas por extravío, optimizar el pastoreo rotativo y resguardar la seguridad del ganado.': 'Location by sectors and paddocks to prevent losses from straying, optimize rotational grazing and safeguard livestock safety.',
    'Señales de temperatura, movimiento, forraje y eventos.': 'Temperature, movement, forage and event signals.',
    'Tecnología pensada para nuestra ganadería.': 'Technology designed for our livestock.',
    'ICHU no reemplaza al veterinario. Le da más información para trabajar.': 'ICHU does not replace the veterinarian. It gives them more information to work with.',
    'Más información para mejores decisiones veterinarias.': 'More information for better veterinary decisions.',
    'También se trata de entender el campo.': 'It is also about understanding the countryside.',

    // --- Fuentes / confianza --------------------------------------------------------------------
    'Contexto nacional y buenas prácticas': 'National context & good practices',
    'La gestión ganadera involucra compromisos sanitarios y normativas oficiales. ICHU busca facilitar la organización de información útil para la gestión productiva y veterinaria, dentro del marco de las obligaciones aplicables a cada actividad.': 'Livestock management involves health commitments and official regulations. ICHU seeks to facilitate the organization of useful information for productive and veterinary management, within the framework of the obligations applicable to each activity.',
    'Normativa sanitaria': 'Health regulations',
    'SENASA Sanidad Agraria': 'SENASA Agricultural Health',
    'Servicio Nacional de Sanidad Agraria: calendarios de vacunación oficial, control zoosanitario y aretado.': 'National Agricultural Health Service: official vaccination calendars, zoosanitary control and tagging.',
    'MIDAGRI Perú': 'MIDAGRI Peru',
    'Ministerio de Desarrollo Agrario y Riego: políticas de desarrollo pecuario, pastos y fomento productivo.': 'Ministry of Agrarian Development and Irrigation: livestock development policies, pastures and productive promotion.',
    'Portal institucional': 'Institutional portal',
    'PPA (MIDAGRI): registro oficial para la identificación y acceso a servicios del Estado.': 'PPA (MIDAGRI): official registry for identification and access to State services.',
    'Padrón de Productores (PPA)': 'Producers Registry (PPA)',
    'Información PPA': 'PPA information',
    'Fuentes de referencia': 'Reference sources',
    'Identidad': 'Identity',
    'Inspirado en el pasto andino': 'Inspired by the Andean grass',
    'y la tradición ganadera del Perú. Diseñado para la realidad y el trabajo diario en el campo.': 'and the livestock tradition of Peru. Designed for the reality and daily work of the countryside.',
    'Tecnología para la ganadería inteligente. Conectando al ganadero con información útil sobre cada animal y facilitando el trabajo veterinario en el Perú.': 'Technology for smart livestock farming. Connecting farmers with useful information about each animal and supporting veterinary work in Peru.',
    'Navegación': 'Navigation',
    'Perú · Tecnología ganadera & acompañamiento veterinario': 'Peru · Livestock technology & veterinary support',
    'ICHU — Todos los derechos reservados. Etapa de presentación y demostración de producto.': 'ICHU — All rights reserved. Product presentation and demonstration stage.',

    // --- CTA final --------------------------------------------------------------------------------
    'Conoce tu ganado.': 'Know your livestock.',
    'Entiende tu campo.': 'Understand your field.',
    'Decide mejor.': 'Decide better.',
    'El campo sabe. ICHU ayuda a convertir ese conocimiento en información clara y oportuna para proteger el fruto de tu trabajo.': 'The field knows. ICHU helps turn that knowledge into clear, timely information to protect the fruit of your work.',
    'ICHU es una plataforma pensada para ayudar a ganaderos y veterinarios a organizar y entender mejor la información de cada animal y del campo.': 'ICHU is a platform designed to help farmers and veterinarians better organize and understand the information of each animal and the field.',

    // --- Contacto -----------------------------------------------------------------------------------
    'Estamos construyendo una nueva forma de conectar tecnología, ganadería y acompañamiento veterinario. Déjanos tus datos para coordinar una presentación guiada.': 'We are building a new way to connect technology, livestock farming and veterinary support. Leave your details to arrange a guided presentation.',
    'Nombre *': 'First name *',
    'Apellidos *': 'Last name *',
    'Correo electrónico *': 'Email *',
    'Teléfono / WhatsApp *': 'Phone / WhatsApp *',
    'Tipo de usuario *': 'User type *',
    'Mensaje o consulta (opcional)': 'Message or inquiry (optional)',
    'Ej. Carlos': 'E.g. Carlos',
    'Ej. Quispe': 'E.g. Quispe',
    'Selecciona tu perfil principal': 'Select your main profile',
    'Ganadero / Productor pecuario': 'Rancher / Livestock producer',
    'Médico veterinario / Zootecnista': 'Veterinarian / Animal scientist',
    'Asociación / Cooperativa agraria': 'Association / Agrarian cooperative',
    'Otro interesado': 'Other interested party',
    'Cuéntanos sobre tu hato o qué te gustaría conocer en la demostración...': 'Tell us about your herd or what you would like to learn in the demonstration...',
    'Al enviar se abrirá WhatsApp con tu solicitud lista para enviarnos. También puedes escribirnos al número de la barra superior.': 'On submit, WhatsApp will open with your request ready to send us. You can also write to us at the number in the top bar.',
    '¡Solicitud lista para enviar!': 'Your request is ready to send!',
    'Gracias por tu interés en ICHU. Se abrió WhatsApp con tu solicitud; si no se abrió automáticamente, escríbenos directo desde la barra superior.': 'Thank you for your interest in ICHU. WhatsApp opened with your request; if it did not open automatically, write to us directly from the top bar.',
    'Entendido, muchas gracias': 'Got it, thank you',

    // --- Cadenas dinámicas (JS) -----------------------------------------------------------------------
    'Ingresa tu nombre.': 'Enter your first name.',
    'Ingresa tus apellidos.': 'Enter your last name.',
    'Ingresa un correo válido.': 'Enter a valid email.',
    'Ingresa un teléfono válido.': 'Enter a valid phone number.',
    'Selecciona tu perfil.': 'Select your profile.',
    'Hola ICHU, quiero solicitar una demostración.': 'Hello ICHU, I would like to request a demonstration.',
    'Nombre': 'Name',
    'Correo': 'Email',
    'Teléfono': 'Phone',
    'Perfil': 'Profile',
    'Mensaje': 'Message',
    'ICHU está escribiendo...': 'ICHU is typing...',
    '¡Excelente! En la demo te mostraremos cómo registrar tu ganado por arete, supervisar el pastoreo y recibir alertas de temperatura al instante.': 'Great! In the demo we will show you how to register your livestock by ear tag, monitor grazing and receive temperature alerts instantly.',
    '¡Perfecto! Podrás explorar el historial térmico, la bitácora de visitas y el registro de tratamientos.': 'Perfect! You will be able to explore the thermal history, the visit log and the treatment registry.',
    'Nuestros dispositivos están diseñados para telemetría en altitud y clima andino.': 'Our devices are designed for high-altitude telemetry and Andean weather.',
    '¡Mensaje recibido! Agendemos tu demostración personalizada: deja tus datos en el formulario para coordinar.': 'Message received! Let\'s schedule your personalized demonstration: leave your details in the form to coordinate.',
    '¡Hola {n}! Registramos tu solicitud. Te contactaremos muy pronto.': 'Hi {n}! We have registered your request. We will contact you very soon.',
    'Hola, soy {n}. Solicité una demostración desde el formulario.': 'Hello, I am {n}. I requested a demonstration from the form.',
    'Demo ganaderos': 'Farmer demo',
    'Soy veterinario': 'I\'m a veterinarian',
    'Simulación — usa el formulario para contacto real': 'Simulation — use the form for real contact',
    'Enviar mensaje de prueba': 'Send test message',
    'Mensaje de prueba': 'Test message',
    'ICHU — Asistencia en vivo': 'ICHU — Live assistance',
    'En línea para demostraciones': 'Online for demonstrations',
    '¡Hola! Bienvenido a ICHU. ¿Te gustaría agendar una demostración para tu ganado o conocer el historial clínico?': 'Hello! Welcome to ICHU. Would you like to schedule a demonstration for your livestock or learn about the clinical history?',
    'Hola, tengo un hato ganadero y quiero ver cómo registran los aretes y las alertas de temperatura.': 'Hi, I have a cattle herd and I want to see how ear tags and temperature alerts are logged.',
    '¡Excelente! En la demo personalizada te mostraremos cómo opera la ficha de cada animal y cómo se conecta con el veterinario.': 'Great! In the personalized demo we will show you how each animal\'s record works and how it connects with the veterinarian.',
    'WhatsApp': 'WhatsApp',
    'Logotipo ICHU': 'ICHU logo',
    'ICHU': 'ICHU',
    'Ayuda visual': 'Visual aid',
    'Ayuda': 'Help',
  };

  // Inverso (en -> es) generado una sola vez.
  const REV = {};
  for (const k in DICT) {
    if (Object.prototype.hasOwnProperty.call(DICT, k) && REV[DICT[k]] === undefined) REV[DICT[k]] = k;
  }

  let lang = 'es';
  try {
    lang = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es';
  } catch (e) { /* almacenamiento no disponible */ }

  const SKIP_SEL = 'script,style,noscript,textarea,iframe,[data-i18n-skip]';

  function dictFor(from) {
    return from === 'es' ? DICT : REV;
  }

  function swap(root, from) {
    const dict = dictFor(from);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent || (parent.closest && parent.closest(SKIP_SEL))) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (trimmed.length < 2) continue;
      const mapped = dict[trimmed];
      if (mapped === undefined || mapped === trimmed) continue;
      const start = raw.indexOf(trimmed);
      node.nodeValue = raw.slice(0, start) + mapped + raw.slice(start + trimmed.length);
    }
    const attrEls = root.querySelectorAll('input[placeholder], textarea[placeholder], img[alt], [aria-label], [title]');
    attrEls.forEach((el) => {
      if (el.closest('script,style,noscript,iframe,[data-i18n-skip]')) return;
      ['placeholder', 'alt', 'aria-label', 'title'].forEach((attr) => {
        const val = el.getAttribute(attr);
        if (!val) return;
        const mapped = dict[val.trim()];
        if (mapped !== undefined && mapped !== val) el.setAttribute(attr, mapped);
      });
    });
  }

  function updateButton() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    const code = btn.querySelector('.lang-code');
    if (code) code.textContent = lang.toUpperCase();
    btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma: inglés' : 'Cambiar idioma: español');
    btn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  }

  function apply(target) {
    if (target !== lang) swap(document.body, lang === 'es' ? 'es' : 'en');
    lang = target;
    document.documentElement.lang = lang;
    const mappedTitle = lang === 'en' ? DICT[document.title] : REV[document.title];
    if (mappedTitle) document.title = mappedTitle;
    updateButton();
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* sin persistencia */ }
  }

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => apply(lang === 'es' ? 'en' : 'es'));
  }

  // Estado inicial: html lang + botón; traduce si la preferencia guardada es inglés.
  document.documentElement.lang = lang;
  if (lang === 'en') swap(document.body, 'es');
  updateButton();

  // API mínima para cadenas generadas por JS (main.js).
  window.ICHU_I18N = {
    get lang() { return lang; },
    t(text) {
      if (lang !== 'en') return text;
      return Object.prototype.hasOwnProperty.call(DICT, text) ? DICT[text] : text;
    },
  };
})();
