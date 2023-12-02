let root = document.querySelector(':root')
let button = document.querySelector('.buttonColorTheme')

button.addEventListener('click', () => {
  event.preventDefault()
  root.classList.toggle('dark')
})
