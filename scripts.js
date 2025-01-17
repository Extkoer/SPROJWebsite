// Show a section and hide the others
function showSection(section) {
  // Hide all sections
  document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));

  // Show the selected section
  document.getElementById(`section-${section}`).classList.remove('hidden');

  // Update sidebar
  document.querySelectorAll('.chapter').forEach(chapter => chapter.classList.remove('active'));
  document.getElementById(`sidebar-${section}`).classList.add('active');

  // Expand subsections for the selected section
  document.querySelectorAll('.subsections').forEach(subsec => subsec.classList.add('hidden'));
  document.getElementById(`subsections-${section}`).classList.remove('hidden');
}

// Show a subsection within a section
function showSubsection(subsection) {
  // Hide all subsections within the visible section
  document.querySelectorAll(`#section-${subsection.split('-')[0]} > div`).forEach(subsec => subsec.classList.add('hidden'));

  // Show the selected subsection
  document.getElementById(`subsection-${subsection}`).classList.remove('hidden');
}

// Initial load: Show the first section
showSection('co2');
showSubsection('co2-1');

// Example Chart.js setup
const co2Ctx = document.getElementById('co2Chart')?.getContext('2d');
if (co2Ctx) {
  new Chart(co2Ctx, {
    type: 'line',
    data: {
      labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
      datasets: [{
        label: 'CO2 Emissions (Million Tons)',
        data: [5000, 5200, 5400, 5600, 5900, 6000],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderWidth: 2,
      }],
    },
  });
}

const stockCtx = document.getElementById('stockChart')?.getContext('2d');
if (stockCtx) {
  new Chart(stockCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Stock Returns (%)',
        data: [5, 8, -3, 4, 6, 2],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      }],
    },
  });
}

