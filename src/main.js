const modal = document.querySelector('.modal')
const GokuN = document.querySelector('#GokuN')
const ssj2 = document.querySelector('#ssj2')
const ssj3 = document.querySelector('#ssj3')
const closeButton = document.querySelector('.modal__content--close')

GokuN.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

ssj2.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

ssj3.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

closeButton.addEventListener('click', () => {
    console.log('here')
    modal.classList.add('hidden')
    modal.classList.remove('visible')
})