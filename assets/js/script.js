document.querySelector('.menu-opener')
 .addEventListener('click', ()=>{
   let nav=document.querySelector('header nav');
   nav.classList.toggle('opened');
});

const toggleSlider = () => {
  const slides = document.querySelectorAll('input[name=slider]');
  if (slides.length === 0) return;

  let current = document.querySelector('input[name=slider]:checked');
  if (!current) {
      current = document.querySelector('input[name=slider]');
      current.setAttribute('checked', true);
  }

  let id = parseInt(current.getAttribute('id').split('-')[1]);
  if (id + 1 <= slides.length) {
      id++;
  } else {
      id = 1;
  }

  for (let slider of slides) slider.removeAttribute('checked');
  document.querySelector(`#slider-${id}`).setAttribute('checked', true);
}
setInterval(toggleSlider, 5000);


const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

