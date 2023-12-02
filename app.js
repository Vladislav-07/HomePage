let root = document.querySelector(':root')
let button = document.querySelector('.buttonColorTheme')

button.addEventListener('click', () => {
  event.preventDefault()
  root.classList.toggle('dark')
})



const swiper = new Swiper('.swiper', {
  
  navigation: {

    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },

  direction: 'horizontal',
  loop: true,

  pagination: {

    el: '.swiper-pagination',
    clickable: true,

  },

  spaceBetween: 20,

  // autoplay: {

  //   delay: 3000,

  //   stopOnLastSlide: false,

  //   disableOnInteraction: false,

  // },

  speed: 1500,

});

