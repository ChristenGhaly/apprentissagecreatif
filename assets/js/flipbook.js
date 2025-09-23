export function initFlipbook() {
  $(".flipbook").turn({
    width: 1000,
    height: 400,
    autoCenter: true
  });

  document.getElementById('prevBtn').addEventListener('click', function() {
    $('.flipbook').turn('previous');
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
      $('.flipbook').turn('next');
  });
}