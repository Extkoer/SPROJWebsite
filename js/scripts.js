/**********************************************
 * TRANSITION FROM HERO TO SLIDE-BASED SECTION
 **********************************************/
function transitionToSection(topic) {
  const heroSection = document.getElementById('hero');
  const mainContent = document.getElementById('main-content');
  const sidebar = document.getElementById('sidebar');
  const clickedHero = document.getElementById(`hero-${topic}`);
  const otherHero = document.querySelectorAll('.hero-button:not(#hero-' + topic + ')');

  clickedHero.style.zIndex = '100';
  clickedHero.classList.add('expand-center');

  otherHero.forEach((hero) => {
    hero.classList.add('shrink-fade-out');
  });

  setTimeout(() => {
    heroSection.style.display = 'none';
    mainContent.style.display = 'block';
    sidebar.classList.remove('hidden'); // Show the sidebar
    updateSidebar(topic);
    showSlides(topic);
  }, 1200);
}



function updateSidebar(topic) {
  const sidebarSections = document.getElementById('sidebar-sections');
  sidebarSections.innerHTML = ''; // Clear current content

  if (topic === 'co2') {
    sidebarSections.innerHTML = `
      <h2 class="text-xl font-bold mb-2">CO2 Emissions</h2>
      <ul class="space-y-1">
        <li>
          <button 
            class="w-full text-left px-4 py-1 hover:bg-gray-700" 
            onclick="goToSlide('co2', 1)"
          >
            Global Trends
          </button>
        </li>
        <li>
          <button 
            class="w-full text-left px-4 py-1 hover:bg-gray-700" 
            onclick="goToSlide('co2', 2)"
          >
            Major Sources
          </button>
        </li>
      </ul>
    `;
  } else if (topic === 'stock') {
    sidebarSections.innerHTML = `
      <h2 class="text-xl font-bold mb-2">Stock Market</h2>
      <ul class="space-y-1">
        <li>
          <button 
            class="w-full text-left px-4 py-1 hover:bg-gray-700" 
            onclick="goToSlide('stock', 1)"
          >
            Market Trends
          </button>
        </li>
        <li>
          <button 
            class="w-full text-left px-4 py-1 hover:bg-gray-700" 
            onclick="goToSlide('stock', 2)"
          >
            Carbon Policies
          </button>
        </li>
      </ul>
    `;
  }
}


/**********************************************
 * TOGGLE SIDEBAR
 **********************************************/
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('show');
  } else {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('show');
  }
}

/**********************************************
 * SHOW SLIDES FOR A GIVEN TOPIC
 **********************************************/
function showSlides(topic) {
  const co2Slides = document.getElementById('co2-slides');
  const stockSlides = document.getElementById('stock-slides');

  // Hide both slide sections
  co2Slides.classList.add('hidden');
  stockSlides.classList.add('hidden');

  // Show the relevant section
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
  showSlides(topic); // Show the relevant topic's slides
  
  const container = (topic === 'co2')
    ? document.getElementById('co2-slides')
    : document.getElementById('stock-slides');

  const slides = container.children;
  if (slideNumber <= slides.length) {
    // Scroll to the target slide
    const targetSlide = slides[slideNumber - 1];
    targetSlide.scrollIntoView({ behavior: 'smooth' });
  }
}


/**********************************************
 * GO HOME (RETURN TO HERO)
 **********************************************/
function goHome() {
  document.getElementById('hero').style.display = 'grid';
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('hamburgerBtn').classList.remove('show');

  // Reset hero button expansion
  document.querySelectorAll('.hero-button').forEach(button => {
    button.classList.remove('expand');
  });

  // Hide Sidebar
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('show');
  sidebar.classList.add('-translate-x-full');
}









