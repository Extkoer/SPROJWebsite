/**********************************************
 * TRANSITION FROM HERO TO SLIDE-BASED SECTION
 **********************************************/
function transitionToSection(topic) {
  const heroSection = document.getElementById("hero");
  const mainContent = document.getElementById("main-content");
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  const clickedHero = document.getElementById(`hero-${topic}`);

  clickedHero.classList.add("expand-full");
  setTimeout(() => {
    heroSection.style.display = "none";
    mainContent.style.display = "block";
    sidebarWrapper.classList.remove("hidden");
    updateSidebar(topic);
    showSlides(topic);
  }, 1000);
}

/**********************************************
 * UPDATE SIDEBAR CONTENT BASED ON TOPIC
 **********************************************/
function updateSidebar(topic) {
  const sidebarSections = document.getElementById("sidebar-sections");
  sidebarSections.innerHTML = "";

  if (topic === "co2") {
    sidebarSections.innerHTML = `
      <h2 class="text-xl font-bold mb-2">CO2 Emissions</h2>
      <ul class="space-y-1">
        <li><button class="w-full text-left px-4 py-1 hover:bg-gray-700" onclick="goToSlide('co2', 1)">Global Trends</button></li>
        <li><button class="w-full text-left px-4 py-1 hover:bg-gray-700" onclick="goToSlide('co2', 2)">Major Sources</button></li>
      </ul>
    `;
  } else if (topic === "stock") {
    sidebarSections.innerHTML = `
      <h2 class="text-xl font-bold mb-2">Stock Market</h2>
      <ul class="space-y-1">
        <li><button class="w-full text-left px-4 py-1 hover:bg-gray-700" onclick="goToSlide('stock', 1)">Market Trends</button></li>
        <li><button class="w-full text-left px-4 py-1 hover:bg-gray-700" onclick="goToSlide('stock', 2)">Carbon Policies</button></li>
      </ul>
    `;
  }
}

/**********************************************
 * GO TO SPECIFIC SLIDE
 **********************************************/
function goToSlide(topic, slideNumber) {
  const slides = document.getElementById(`${topic}-slides`).children;
  slides[slideNumber - 1].scrollIntoView({ behavior: "smooth" });
}

/**********************************************
 * GO HOME
 **********************************************/
function goHome() {
  document.getElementById("hero").style.display = "grid";
  document.getElementById("main-content").style.display = "none";
  document.getElementById("sidebar-wrapper").classList.add("hidden");
}

/**********************************************
 * TOGGLE SIDEBAR
 **********************************************/
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("translate-x-0");
  sidebar.classList.toggle("-translate-x-full");
}









