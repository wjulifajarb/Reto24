const ratings = document.querySelectorAll('.raing')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send') /*completar*/
const panel = document.querySelector('#panel')


ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>

    `
})

function removeActive() {
{
        ratings[i].classList.remove('active')
    }
}
/*quitar css raro*/