document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.certificado-lista');
  const slides = document.querySelectorAll('.certificado');
  const btnVoltar = document.getElementById('btn-voltar');
  const btnAvancar = document.getElementById('btn-avancar');
  const indicadoresContainer = document.querySelector('.indicadores');
  
  let currentSlide = 0;
  
  // Criar indicadores
  slides.forEach((_, index) => {
    const indicador = document.createElement('div');
    indicador.classList.add('indicador');
    if (index === 0) indicador.classList.add('ativo');
    indicador.addEventListener('click', () => goToSlide(index));
    indicadoresContainer.appendChild(indicador);
  });
  
  const indicadores = document.querySelectorAll('.indicador');
  
  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Atualizar indicadores
    indicadores.forEach((ind, index) => {
      ind.classList.toggle('ativo', index === currentSlide);
    });
  }
  
  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }
  
  btnAvancar.addEventListener('click', nextSlide);
  btnVoltar.addEventListener('click', prevSlide);
});