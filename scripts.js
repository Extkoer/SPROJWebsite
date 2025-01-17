// Function to handle section transition
function transitionToSection(section) {
  // Step 1: Add zoom effect to the clicked hero button
  const heroSection = document.getElementById('hero');
  const mainContent = document.getElementById('main-content');
  const clickedHero = document.getElementById(`hero-${section}`);
  const allHeroes = document.querySelectorAll('.hero-button');

  // Disable all buttons temporarily
  allHeroes.forEach(hero => hero.classList.add('pointer-events-none'));

  // Zoom effect on the clicked button
  clickedHero.classList.add('zoom');

  // Step 2: After the zoom effect, show the associated section
  setTimeout(() => {
    // Hide the hero section
    heroSection.style.display = 'none';

    // Show the main content
    mainContent.classList.add('active');
    mainContent.classList.remove('hidden');

    // Show the selected section and hide others
    document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(`section-${section}`).classList.remove('hidden');
  }, 700); // Duration of the zoom effect
}




