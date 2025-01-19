/**********************************************
 * TRANSITION FROM HERO TO SLIDE-BASED SECTION
 **********************************************/
function transitionToSection(topic) {
  const heroSection = document.getElementById("hero");
  const mainContent = document.getElementById("main-content");
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  const clickedHero = document.getElementById(`hero-${topic}`);
  const otherHero = document.querySelectorAll(`.hero-button:not(#hero-${topic})`);

  // Animate the clicked hero to expand and cover the screen
  gsap.to(clickedHero, {
    duration: 1,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    x: 0,
    y: 0,
    scale: 1, // Reset scale if any was applied
    zIndex: 100,
    ease: "power2.inOut",
    onComplete: () => {
      // Hide the hero section after animation completes
      heroSection.style.display = "none";
      mainContent.style.display = "block"; // Show main content
      sidebarWrapper.classList.remove("hidden"); // Show sidebar
      updateSidebar(topic); // Update sidebar content dynamically
      showSlides(topic); // Display relevant slides
    },
  });

  // Animate the other hero buttons to fade out
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
  sidebarSections.innerHTML = ""; // Clear current content

  // Populate the sidebar with topic-specific sections
  if (topic === "co2") {
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
  } else if (topic === "stock") {
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
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("hidden")) {
    gsap.to(sidebar, {
      x: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onStart: () => {
        sidebar.classList.remove("hidden");
      },
    });
  } else {
    gsap.to(sidebar, {
      x: "-100%",
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        sidebar.classList.add("hidden");
      },
    });
  }
}

/**********************************************
 * SHOW SLIDES FOR A GIVEN TOPIC
 **********************************************/
function showSlides(topic) {
  const co2Slides = document.getElementById("co2-slides");
  const stockSlides = document.getElementById("stock-slides");

  // Hide both slide sections
  co2Slides.classList.add("hidden");
  stockSlides.classList.add("hidden");

  // Show the relevant section
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
  showSlides(topic); // Show the relevant topic's slides

  const container =
    topic === "co2"
      ? document.getElementById("co2-slides")
      : document.getElementById("stock-slides");

  const slides = container.children;
  if (slideNumber <= slides.length) {
    // Scroll to the target slide
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
  const sidebarWrapper = document.getElementById("sidebar-wrapper");

  // Reset animations and show hero
  gsap.to(mainContent, {
    duration: 0.5,
    opacity: 0,
    onComplete: () => {
      mainContent.style.display = "none"; // Hide main content
      heroSection.style.display = "grid"; // Show hero page
      sidebarWrapper.classList.add("hidden"); // Hide sidebar
    },
  });

  // Reset hero button states
  document.querySelectorAll(".hero-button").forEach((button) => {
    button.classList.remove("expand-full");
    gsap.set(button, { opacity: 1, transform: "scale(1)" });
  });
}










