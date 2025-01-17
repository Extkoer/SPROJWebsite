function transitionToSection(section) {
  const heroSection = document.getElementById('hero');
  const mainContent = document.getElementById('main-content');
  const clickedHero = document.getElementById(`hero-${section}`);
  const allHeroes = document.querySelectorAll('.hero-button');

  // Disable all buttons temporarily
  allHeroes.forEach(hero => hero.classList.add('pointer-events-none'));

  // Zoom effect on the clicked button
  clickedHero.classList.add('zoom');

  setTimeout(() => {
    heroSection.style.display = 'none';
    mainContent.classList.add('active');
    mainContent.classList.remove('hidden');
    document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(`section-${section}`).classList.remove('hidden');
    document.getElementById('sidebar').classList.remove('hidden');
  }, 700);
}

function showSection(section) {
  document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(`section-${section}`).classList.remove('hidden');
}

function showSubsection(subsection) {
  document.querySelectorAll(`#section-${subsection.split('-')[0]} > div`).forEach(div => div.classList.add('hidden'));
  document.getElementById(`subsection-${subsection}`).classList.remove('hidden');
}

// Initial State
showSection('co2');
showSubsection('co2-1');





