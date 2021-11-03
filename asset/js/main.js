const buyBtns = document.querySelectorAll('.js-buy-ticket')
const model = document.querySelector('.js-model')
const modelContainer = document.querySelector('.js-model-container')
const modelClose = document.querySelector('.js-model-close')

// Ham show buy tickets
function showBuyTickets() {
    model.classList.add('open')
}

// Ham hide buy tickets
function hideBuyTickets() {
    model.classList.remove('open')
}

//lang nghe click cua 3 btn buy ticket
for ( const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}

//close buy ticket khi click dau X
modelClose.addEventListener('click', hideBuyTickets)

//close buyticket khi click vao ben ngoai
model.addEventListener('click', hideBuyTickets)

//ngan chan noi bot tu the con ra the cha
modelContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})