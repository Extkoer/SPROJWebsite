/**********************************************
 * TRANSITION FROM HERO TO SLIDE-BASED SECTION
 **********************************************/
function transitionToSection(topic) {
  const heroSection = document.getElementById("hero");
  const mainContent = document.getElementById("main-content");
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  const clickedHero = document.getElementById(`hero-${topic}`);
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  // Disable Hamburger on Hero
  hamburgerBtn.classList.remove("show");

  // Animate Hero Expansion
  clickedHero.classList.add("expand-full");

  // Shrink Other Buttons
  document.querySelectorAll(".hero-button:not(.expand-full)").forEach(button => {
    button.classList.add("shrink-fade-out");
  });

  // Show Main Content and Sidebar After Transition
  setTimeout(() => {
    heroSection.style.display = "none";
    mainContent.style.display = "block";
    sidebarWrapper.classList.add("show");
    updateSidebar(topic);
    showSlides(topic);
  }, 1000);
}

/**********************************************
 * UPDATE SIDEBAR CONTENT BASED ON TOPIC
 **********************************************/
function updateSidebar(topic) {
  const sidebarSections = document.getElementById("sidebar-sections");
  sidebarSections.innerHTML = ""; // Clear current content

  // Populate Sidebar with Sections
  const sections = topic === "co2" ? ["Global Trends", "Major Sources"] : ["Market Trends", "Carbon Policies"];
  sections.forEach((section, index) => {
    const h1 = document.createElement("h1");
    h1.textContent = section;
    h1.onclick = () => goToSlide(topic, index + 1);
    sidebarSections.appendChild(h1);
  });
}

/**********************************************
 * TOGGLE SIDEBAR
 **********************************************/
function toggleSidebar() {
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  sidebarWrapper.classList.toggle("show");
}

/**********************************************
 * SHOW SLIDES FOR A GIVEN TOPIC
 **********************************************/
function showSlides(topic) {
  const co2Slides = document.getElementById("co2-slides");
  const stockSlides = document.getElementById("stock-slides");

  // Hide Both Sections
  co2Slides.classList.add("hidden");
  stockSlides.classList.add("hidden");

  // Show the Relevant Section
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
  const container = topic === "co2" ? document.getElementById("co2-slides") : document.getElementById("stock-slides");
  const slides = container.children;

  if (slideNumber <= slides.length) {
    slides[slideNumber - 1].scrollIntoView({ behavior: "smooth" });
  }
}

/**********************************************
 * GO HOME (RETURN TO HERO)
 **********************************************/
function goHome() {
  const heroSection = document.getElementById("hero");
  const mainContent = document.getElementById("main-content");
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  heroSection.style.display = "grid";
  mainContent.style.display = "none";
  sidebarWrapper.classList.remove("show");
  hamburgerBtn.classList.add("show");

  // Reset Hero Expansion
  document.querySelectorAll(".hero-button").forEach(button => {
    button.classList.remove("expand-full", "shrink-fade-out");
  });
}










