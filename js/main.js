document.addEventListener('DOMContentLoaded', function() {
  // Initialize FullPage.js with smooth easing
  new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 700,
    easingcss3: 'ease-in-out',
  });

  // Initialize Reveal.js with fast, smooth slide transitions
  Reveal.initialize({
    controls: true,
    progress: true,
    slideNumber: true,
    history: false,
    center: true,
    transition: 'slide', // Options: 'slide', 'fade', 'convex', 'concave', 'zoom'
    transitionSpeed: 'fast'
  });
});
