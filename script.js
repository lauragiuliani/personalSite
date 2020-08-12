const modalOverlay = document.querySelector('.modal-overlay');
const items = document.querySelectorAll('.grid-item');

for (let item of items) {
    item.addEventListener('click', function(){
        modalOverlay.classList.add('.active')
    })
}

document.querySelector('.close-overlay').addEventListener('click', function(){
    modalOverlay.classList.remove('.active')
})