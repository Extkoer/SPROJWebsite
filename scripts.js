function transitionToSection(section) {
  const heroSection = document.getElementById('hero');
  const mainContent = document.getElementById('main-content');
  const clickedHero = document.getElementById(`hero-${section}`);

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

function goHome() {
  document.getElementById('hero').style.display = 'grid';
  document.getElementById('main-content').classList.add('hidden');
  document.getElementById('main-content').classList.remove('active');
  document.getElementById('sidebar').classList.add('hidden');
}






