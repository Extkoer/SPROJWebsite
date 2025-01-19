/**********************************************
 * TRANSITION FROM HERO TO SLIDE-BASED SECTION
 **********************************************/
function transitionToSection(topic) {
  const heroSection = document.getElementById("hero");
  const mainContent = document.getElementById("main-content");
  const clickedHero = document.getElementById(`hero-${topic}`);
  const otherHero = document.querySelectorAll(`.hero-button:not(#hero-${topic})`);

  // Get the clicked button's bounding box
  const rect = clickedHero.getBoundingClientRect();

  // Calculate scale and translation to center and expand the button
  const scale = Math.max(window.innerWidth / rect.width, window.innerHeight / rect.height);
  const translateX = window.innerWidth / 2 - (rect.left + rect.width / 2);
  const translateY = window.innerHeight / 2 - (rect.top + rect.height / 2);

  // Animate the clicked button to expand and fill the viewport
  gsap.to(clickedHero, {
    duration: 1,
    x: translateX,
    y: translateY,
    scale: scale,
    zIndex: 100,
    ease: "power2.inOut",
    onComplete: () => {
      heroSection.style.display = "none";
      mainContent.style.display = "block"; // Show main content
      document.getElementById("hamburgerBtn").classList.remove("hidden"); // Show sidebar toggle
      showSlides(topic);
    },
  });

  // Animate other buttons to fade out
  otherHero.forEach((hero) => {
    gsap.to(hero, {
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
    });
  });
}

/**********************************************
 * UPDATE SIDEBAR CONTENT BASED ON TOPIC
 **********************************************/
function updateSidebar(topic) {
  const sidebarSections = document.getElementById("sidebar-sections");
  sidebarSections.innerHTML = "";

  // Populate the sidebar with relevant sections
  if (topic === "co2") {
    sidebarSections.innerHTML = `
      <h2 class="text-4xl font-bold mb-6">CO2 Emissions</h2>
      <ul class="space-y-4 text-2xl">
        <li>
          <button class="w-full text-left px-4 py-2 hover:bg-gray-700" onclick="goToSlide('co2', 1)">
            Global Trends
          </button>
        </li>
        <li>
          <button class="w-full text-left px-4 py-2 hover:bg-gray-700" onclick="goToSlide('co2', 2)">
            Major Sources
          </button>
        </li>
      </ul>
    `;
  } else if (topic === "stock") {
    sidebarSections.innerHTML = `
      <h2 class="text-4xl font-bold mb-6">Stock Market</h2>
      <ul class="space-y-4 text-2xl">
        <li>
          <button class="w-full text-left px-4 py-2 hover:bg-gray-700" onclick="goToSlide('stock', 1)">
            Market Trends
          </button>
        </li>
        <li>
          <button class="w-full text-left px-4 py-2 hover:bg-gray-700" onclick="goToSlide('stock', 2)">
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
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    gsap.to(sidebar, { scale: 1, duration: 0.5, ease: "power2.inOut" });
  } else {
    gsap.to(sidebar, {
      scale: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => sidebar.classList.add("hidden"),
    });
  }
}

/**********************************************
 * SHOW SLIDES FOR A GIVEN TOPIC
 **********************************************/
function showSlides(topic) {
  const co2Slides = document.getElementById("co2-slides");
  const stockSlides = document.getElementById("stock-slides");

  // Hide all slides
  co2Slides.classList.add("hidden");
  stockSlides.classList.add("hidden");

  // Show the relevant slides
  if (topic === "co2") {
    co2Slides.classList.remove("hidden");
  } else if (topic === "stock") {
    stockSlides.classList.remove("hidden");
  }
}

/**********************************************
 * GO TO SPECIFIC SLIDE
 **********************************************/
function goToSlide(topic, slideNumber) {
  showSlides(topic);

  const container = topic === "co2" ? document.getElementById("co2-slides") : document.getElementById("stock-slides");
  const slides = container.children;
  if (slideNumber <= slides.length) {
    const targetSlide = slides[slideNumber - 1];
    gsap.to(container, {
      duration: 0.5,
      scrollTo: targetSlide,
      ease: "power2.out",
    });
  }
}

/**********************************************
 * GO HOME (RETURN TO HERO)
 **********************************************/
function goHome() {
  const heroSection = document.getElementById("hero");
  const mainContent = document.getElementById("main-content");
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const heroButtons = document.querySelectorAll(".hero-button");

  // Reset animations
  heroButtons.forEach((button) => {
    gsap.set(button, { scale: 1, x: 0, y: 0, zIndex: 0 });
  });

  // Reset visibility
  gsap.to(mainContent, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      mainContent.style.display = "none";
      heroSection.style.display = "grid";
    },
  });

  // Hide sidebar and sidebar toggle button
  gsap.to(sidebar, {
    scale: 0,
    duration: 0.5,
    onComplete: () => sidebar.classList.add("hidden"),
  });
  hamburgerBtn.classList.add("hidden");
}












