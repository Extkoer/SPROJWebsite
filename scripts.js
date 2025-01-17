// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Chart.js: CO2 Emissions Line Chart
const co2Ctx = document.getElementById('co2Chart').getContext('2d');
new Chart(co2Ctx, {
  type: 'line',
  data: {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020'], // Example years
    datasets: [{
      label: 'CO2 Emissions (Million Tons)',
      data: [5000, 5200, 5400, 5600, 5900, 6000], // Example data
      borderColor: 'rgba(34, 197, 94, 1)',
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      borderWidth: 2,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  },
});

// Chart.js: Stock Market Bar Chart
const stockCtx = document.getElementById('stockChart').getContext('2d');
new Chart(stockCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example months
    datasets: [{
      label: 'Stock Returns (%)',
      data: [5, 8, -3, 4, 6, 2], // Example data
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  },
});

