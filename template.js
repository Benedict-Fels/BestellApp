
function loadDishTemplate(category, i) {
    const dishElement = document.getElementById(`${category}ID`);
    dishElement.innerHTML += `
     <div class="dish">
         <img class="dish-img" src="./assets/food/${category + i}.png" alt="${dishes[category][i].name}">
         <div class="dish-description">
             <h3>${dishes[category][i].name}</h3>
             <p>${dishes[category][i].description}</p>
         </div>
         <div class="dish-price">
             <p>${numberToEuro(dishes[category][i].price)}</p>
             <div class="add-basket-button" id="${category}${i}BtnID">
                <button class="addToBasketBtn" onmouseup="addToBasket('${category}',${i}); changeBtn('${category}',${i})">add to basket</button>
             </div>
         </div>
     </div>`
}

function loadBasketTemplate() {
    const basket = document.getElementById('basketID');
    basket.innerHTML = `
             <div class="basket-top">
                 <h4>Your Basket</h4>
                 <img id="closeButtonID" class="close-button" onmouseup="toggleBasket()" src="./assets/icons/close.png" alt="Close Button">
             </div>
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
                 <button class="orderButton" onmouseup="openDialog()">Buy now ${numberToEuro(calcSubTotal() + 4.99)}</button>
             </div>
    `
}

function loadBasketDishTemplate(dish, category, i) {
    return `
                <div class="basket-dish">
                    <div class="display-flex">
                        <p>${dish.amount} x ${dish.name}</p>
                        <img id="${category}${i}trashID" onmouseup="deleteOrder('${category}',${i})" onmousedown="registerClick('${category}',${i},'trash')" class="trashcan" src="./assets/icons/trash.png" alt="Papierkorb">
                    </div>
                    <div class="display-flex amount-price">
                        <div class="display-flex amount-adjust-div">
                            <svg onclick="removeFromBasket('${category}',${i})" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 8 8"><path d="M0 0v2h8v-2h-8z" transform="translate(0 3)"/></svg>
                            <p>${dish.amount}</p>
                            <svg onclick="addToBasket('${category}',${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black"><path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#030708"/></svg>
                        </div>
                        <p>${numberToEuro(dish.price)}</p>
                    </div>
                </div>
            
    `
}

function changeBtn(category, i) {
    const addButton = document.getElementById(`${category}${i}BtnID`);
    addButton.classList.add('amount-adjust-div');
    addButton.innerHTML = `
     <svg onclick="removeFromBasket('${category}',${i})" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 8 8"><path d="M0 0v2h8v-2h-8z" transform="translate(0 3)"/></svg>
     <p>${dishes[category][i].amount}</p>
     <svg onclick="addToBasket('${category}',${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black"><path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#030708"/></svg>
    `
}

function restoreBtn(category, i) {
    const addButton = document.getElementById(`${category}${i}BtnID`);
    addButton.classList.remove('amount-adjust-div');
    addButton.innerHTML = `
     <button class="addToBasketBtn" onclick="addToBasket('${category}',${i}); changeBtn('${category}',${i})">add to basket</button>
    `
}


