function transitionToSection(topic) {
  const heroSection = document.getElementById("hero");
  const mainContent = document.getElementById("main-content");
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  const clickedHero = document.getElementById(`hero-${topic}`);
  const otherHero = document.querySelectorAll(`.hero-button:not(#hero-${topic})`);

  // Get the clicked button's current position and size
  const rect = clickedHero.getBoundingClientRect();

  // Calculate uniform scale factor
  const scale = Math.max(window.innerWidth / rect.width, window.innerHeight / rect.height);

  // Calculate translation to center the button
  const centerX = window.innerWidth / 2 - (rect.left + rect.width / 2);
  const centerY = window.innerHeight / 2 - (rect.top + rect.height / 2);

  // Animate the clicked hero to expand and immerse
  gsap.to(clickedHero, {
    duration: 1,
    x: centerX,
    y: centerY,
    scale: scale,
    zIndex: 100,
    ease: "power2.inOut",
    onComplete: () => {
      // After animation, hide the hero and show the main content
      heroSection.style.display = "none";
      mainContent.style.display = "block";
      sidebarWrapper.classList.remove("hidden");
      updateSidebar(topic);
      showSlides(topic);
    },
  });

  gsap.to(heroSection, {
    duration: 0.5,
    opacity: 0.5,
    filter: "blur(10px)",
    ease: "power2.inOut",
  });

  // Fade out other buttons
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
      <h2 class="text-4xl font-bold mb-6">CO2 Emissions</h2>
      <ul class="space-y-4 text-2xl">
        <li>
          <button 
            class="w-full text-left px-4 py-2 hover:bg-gray-700" 
            onclick="goToSlide('co2', 1)"
          >
            Global Trends
          </button>
        </li>
        <li>
          <button 
            class="w-full text-left px-4 py-2 hover:bg-gray-700" 
            onclick="goToSlide('co2', 2)"
          >
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
          <button 
            class="w-full text-left px-4 py-2 hover:bg-gray-700" 
            onclick="goToSlide('stock', 1)"
          >
            Market Trends
          </button>
        </li>
        <li>
          <button 
            class="w-full text-left px-4 py-2 hover:bg-gray-700" 
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
  const sidebar = document.getElementById("sidebar");
  const heroButtons = document.querySelectorAll(".hero-button");

  // Hide main content and sidebar with animation
  gsap.to(mainContent, {
    duration: 0.5,
    opacity: 0,
    onComplete: () => {
      mainContent.style.display = "none";
      heroSection.style.display = "grid";
    },
  });

  // Hide sidebar with animation
  gsap.to(sidebar, {
    x: "-100%",
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => {
      sidebarWrapper.classList.add("hidden");
    },
  });

  // Reset hero buttons
  heroButtons.forEach((button) => {
    gsap.set(button, {
      opacity: 1,
      width: "50%",
      height: "100%",
      top: "0",
      left: button.id === "hero-co2" ? "0" : "50%",
      zIndex: 0,
    });

    button.classList.remove("expand-full");
  });
}











