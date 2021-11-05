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

//Menu responsive 

const menuBtn = document.querySelector('.menu-btn');
const headerElement = document.querySelector('#header');
const navElement = document.querySelector('#nav');

var heightHeader = headerElement.clientHeight;

menuBtn.addEventListener('click', function () {
    var isClose =  headerElement.clientHeight === heightHeader;

    if(isClose) {
        headerElement.style.height = 'auto';
    }else {
        headerElement.style.height = null;
    }
})

// click an menu
const items = document.querySelectorAll('#nav li a[href*="#"]');

for( var i = 0; i <= items.length; i++){
    var item = items[i];

    item.onclick = function (){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            return false;
        }else {
            headerElement.style.height = null;
        }
    };
    
}

