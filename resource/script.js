// スライド===================================================
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-item');
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');
  let currentSlide = 0;

  // スライドの切り替え
  function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
  }

  //次へ
  nextButton.addEventListener('click', () => {
    changeSlide(1);
  });

  //戻る
  prevButton.addEventListener('click', () => {
    changeSlide(-1);
  });
  
  setInterval(function() {
    changeSlide(1);
  }, 5000);
});