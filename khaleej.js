const bars = document.getElementsByClassName('bars-menu')[0]
const links = document.getElementsByClassName('main-links')[0]

bars.addEventListener("click", () => {
    links.classList.toggle('main-heading')
}
)
