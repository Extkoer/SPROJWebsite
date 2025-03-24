document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 700,
    easingcss3: 'ease-in-out',
  });

  Reveal.initialize({
    controls: true,
    progress: true,
    slideNumber: true,
    history: false,
    center: true,
    transition: 'slide',
    transitionSpeed: 'fast'
  });
});
