
function loadDishTemplate(type, i) {
    const dishElement = document.getElementById(`${type}ID`);
    dishElement.innerHTML += `
     <div class="dish">
         <img class="dish-img" src="./assets/food/${type + i}.png" alt="${dishes[type][i].name}">
         <div class="dish-description">
             <h3>${dishes[type][i].name}</h3>
             <p>${dishes[type][i].description}</p>
         </div>
         <div class="dish-price">
             <p>${numberToEuro(dishes[type][i].price)}</p>
             <button>add to basket</button>
         </div>
     </div>`
}

function loadBasketTemplate() {
    const basket = document.getElementById('basketID');
    basket.innerHTML = `
             <h4>Your Basket</h4>
             <div class="basket-dishes">
                 ${loadBasketDish()}
             </div>
             <div class="basket-price-div">
                 <div class="display-flex">
                     <p>Subtotal</p>
                     <p>${numberToEuro(calcSubTotal())}</p>
                 </div>
                 <div class="display-flex">
                     <p>Delivery Fee</p>
                     <p>4,99 €</p>
                 </div>
                 <div class="white-line">
                 </div>
                 <div class="display-flex">
                     <p>Total</p>
                     <p>${numberToEuro(calcSubTotal() + 4.99)}</p>
                 </div>
                 <button class="orderButton">Buy now ${numberToEuro(calcSubTotal() + 4.99)}</button>
             </div>
    `
}

function loadBasketDishTemplate(dish) {
    return `
                <div class="basket-dish">
                <div class="display-flex">
                    <p>${dish.amount} x ${dish.name}</p>
                    <img src="" alt="Papierkorb">
                </div>
                <div class="display-flex amount-price">
                    <div class="display-flex amount-adjust-div">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 8 8"><path d="M0 0v2h8v-2h-8z" transform="translate(0 3)"/></svg>
                        <p>${dish.amount}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black"><path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#030708"/></svg>
                    </div>
                    <p>${numberToEuro(dish.price)}</p>
                </div>
                </div>
            
    `
}