// Show a section and hide others with a transition
function showSection(section) {
  // Hide all sections
  document.querySelectorAll('main > section').forEach(sec => {
    sec.classList.add('hidden');
    sec.style.opacity = 0;
    sec.style.transform = 'scale(0.95)';
  });

  // Show the selected section with a transition
  const activeSection = document.getElementById(`section-${section}`);
  activeSection.classList.remove('hidden');
  setTimeout(() => {
    activeSection.style.opacity = 1;
    activeSection.style.transform = 'scale(1)';
  }, 50);

  // Update sidebar
  document.querySelectorAll('#sidebar .chapter').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`sidebar-${section}`).classList.add('active');

  // Toggle subsections
  document.querySelectorAll('#sidebar .subsections').forEach(sub => sub.classList.add('hidden'));
  document.getElementById(`subsections-${section}`).classList.remove('hidden');
}

// Show a subsection
function showSubsection(subsection) {
  document.querySelectorAll(`#section-${subsection.split('-')[0]} > div`).forEach(div => div.classList.add('hidden'));
  document.getElementById(`subsection-${subsection}`).classList.remove('hidden');
}

// Initial State: Show CO2 Section
showSection('co2');
showSubsection('co2-1');



