lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
jQuery (document).ready(function() {
   jQuery(".owl-carousel").owlCarousel({
       'items' : 6,
       'autoPlay' : 2000,
       'goToFirst': true,
       'goToFirstSpeed': 1000,
   });
});

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.querySelector('.subscription').classList.add('done');
});