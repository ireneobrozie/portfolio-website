const bars = document.getElementsByClassName('.bars')[0]
const links = document.getElementsByClassName('.links')[0]

bars.addEventListener('click', () => {
    links.classList.toggle('active')
})