const paneles = document.querySelectorAll('.tarjeta')

paneles.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        removeActiveClasses()
        tarjeta.classList.add('active')
    })
})

function removeActiveClasses() {
    paneles.forEach(tarjeta => {
        tarjeta.classList.remove('active')
    })
}