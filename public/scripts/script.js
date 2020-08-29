const recipes = document.querySelectorAll('.grid-item')

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener('click', function() {

        window.location.href=`recipes/${i}`
    })
}

const show = document.getElementsByClassName('ingredientsB')
const i = 0

for( hide of show) {
    show[i].addEventListener("click", function() {
        this.classList.toggle("active")
        const ingredients = this.nextElementSibling
        if( ingredients.style.display === "block") {
            ingredients.style.display = "none"
        } else {
            ingredients.style.display = "block"
        }
    })
}