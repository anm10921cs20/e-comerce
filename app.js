//open function navbar
function openbars() {
    const bars = document.querySelector('.nav-menu');
    const bars1 = document.getElementById('fa-bars');
    const barclose = document.getElementById('fa-close');
    bars1.style.display = "none";
    barclose.style.display = "block"
    bars.style.display = "block";

}
//close functin nav-bar
function closebars() {
    const barsclose = document.querySelector('.nav-menu');
    const bars2 = document.getElementById('fa-bars');
    const barclose1 = document.getElementById('fa-close');
    barsclose.style.display = "none"
    bars2.style.display = "block";
    barclose1.style.display = "none";
}

//close button nav bar dropdown

const productsclose = document.querySelector('.products');
const productitems = document.querySelector('.dropdown')
const dropclose = document.querySelector('.fa-xmark');
productsclose.addEventListener('click', function () {
    productitems.style.display = "block";
    dropclose.style.display = "block";
})

function productclose() {
    
    const productitems = document.querySelector('.dropdown')
    const dropclose = document.querySelector('.fa-xmark');

        productitems.style.display = "block";
        dropclose.style.display = "block";
}

// dropdown close function


const productitems1 = document.querySelector('.dropdown')
const dropclose1 = document.getElementById('button-xmark');

dropclose1.addEventListener('click',function()
{
    productitems1.style.display = "none";
    dropclose1.style.display = "none";

}
)

//button

const button = document.getElementById('button-form');







