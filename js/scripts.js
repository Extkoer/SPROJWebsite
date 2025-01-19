/**********************************************
 * TRANSITION FROM HERO TO SLIDE-BASED SECTION
 **********************************************/
function transitionToSection(topic) {
  const heroSection = document.getElementById('hero');
  const mainContent = document.getElementById('main-content');
  const hamburgerBtn = document.getElementById('hamburgerBtn');

  // Zoom effect on clicked hero area
  const clickedHero = document.getElementById(`hero-${topic}`);
  clickedHero.classList.add('zoom');

  // Timeout to let the zoom animation play, then fade out
  setTimeout(() => {
    // Hide Hero, show main content
    heroSection.style.display = 'none';
    mainContent.style.display = 'block';

    // Show relevant slides
    showSlides(topic);

    // Show hamburger button
    hamburgerBtn.classList.add('show');
  }, 700);
}

/**********************************************
 * TOGGLE SIDEBAR
 **********************************************/
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  // If sidebar is hidden, show it
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
    sidebar.classList.add('-translate-x-full');
  } else {
    sidebar.classList.add('show');
    sidebar.classList.remove('-translate-x-full');
  }
}

/**********************************************
 * SHOW SLIDES FOR A GIVEN TOPIC
 **********************************************/
function showSlides(topic) {
  const co2Slides = document.getElementById('co2-slides');
  const stockSlides = document.getElementById('stock-slides');

  // Hide both sets of slides first
  co2Slides.classList.add('hidden');
  stockSlides.classList.add('hidden');

  // Show the chosen set of slides
  if (topic === 'co2') {
    co2Slides.classList.remove('hidden');
  } else if (topic === 'stock') {
    stockSlides.classList.remove('hidden');
  }
}

/**********************************************
 * SHOW SPECIFIC SECTION
 **********************************************/
function showSection(section) {
  // This toggles the main content slides
  showSlides(section);
}

/**********************************************
 * GOTO SPECIFIC SLIDE
 **********************************************/
function goToSlide(topic, slideNumber) {
  showSlides(topic);
  // Each slide is simply the nth child; we can scroll to it
  // Using scroll-snap, we can scroll to it with DOM APIs
  const container = (topic === 'co2')
    ? document.getElementById('co2-slides')
    : document.getElementById('stock-slides');

  const slides = container.children;
  if (slideNumber <= slides.length) {
    // The slide is (slideNumber - 1) index
    const targetSlide = slides[slideNumber - 1];
    targetSlide.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Close sidebar automatically if desired
  toggleSidebar();
}

/**********************************************
 * GO HOME (RETURN TO HERO)
 **********************************************/
function goHome() {
  document.getElementById('hero').style.display = 'grid';
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('hamburgerBtn').classList.remove('show');

  // Reset hero zoom
  document.querySelectorAll('.hero-button').forEach(button => {
    button.classList.remove('zoom');
  });

  // Hide Sidebar
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('show');
  sidebar.classList.add('-translate-x-full');
}









