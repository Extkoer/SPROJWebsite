function transitionToSection(section) {
  const heroSection = document.getElementById('hero');
  const mainContent = document.getElementById('main-content');
  const sidebar = document.getElementById('sidebar');

  heroSection.style.display = 'none';
  mainContent.style.display = 'block';

  document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(`section-${section}`).classList.remove('hidden');

  sidebar.classList.remove('hidden');
}

function showSection(section) {
  document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(`section-${section}`).classList.remove('hidden');
}

function goHome() {
  document.getElementById('hero').style.display = 'grid';
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('sidebar').classList.add('hidden');
}








