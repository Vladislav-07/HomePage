let bodyTheme = document.querySelector('.body')
let button = document.querySelector('.buttonColorTheme')

button.addEventListener('click', () => {
  event.preventDefault()
  bodyTheme.classList.toggle('darkTheme')
})
