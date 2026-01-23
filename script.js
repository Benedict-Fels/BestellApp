const basketRef = document.getElementById('basketID');
const shopCart = document.getElementById('shopping-cartID');
const CartAmountRef = document.getElementById('shoppingCartAmountID');
let subTotal = 0;
let basketVis = true;
let screenWidth = '';

function registerWidth() {
    if (window.screen.width >= 660) {
        screenWidth = 'wide';
    }
    else {
        screenWidth = 'narrow';
    }
    // return screenWidth;
}

function loadDishes() {
    for (let i = 0; i < dishes.burger.length; i++) {
        loadDishTemplate('burger', i);
    }
    for (let i = 0; i < dishes.pizza.length; i++) {
        loadDishTemplate('pizza', i);
    }
    for (let i = 0; i < dishes.salad.length; i++) {
        loadDishTemplate('salad', i);
    }
}

function loadBasketDish() {
    let basketDishes = "";
    let categories = Object.keys(dishes);
    categories.forEach((category) => {
        dishes[category].forEach((dish, i) => {
            if (dish.amount > 0) {
                basketDishes += loadBasketDishTemplate(dish, category, i);
            }
        });
    });
    return basketDishes
}

function addToBasket(category, i) {
    if (subTotal == 0 && screenWidth == 'wide') {
        basketRef.classList.remove('display-none');
        basketVis = true;
    }
    dishes[category][i].amount += 1;
    loadBasketTemplate();
    updateBtn(category, i);
    toggleShoppingCartIcon();
    calcAmountTotal();
}

function removeFromBasket(category, i) {
    dishes[category][i].amount -= 1;
    loadBasketTemplate();
    updateBtn(category, i);
    calcAmountTotal();
}

function updateBtn(category, i) {
    if (dishes[category][i].amount == 0) {
        restoreBtn(category, i);
    } else {
        changeBtn(category, i);
    }
}

function calcAmountTotal() {
    let amountTotal = 0;
    let categories = Object.keys(dishes);
    categories.forEach((category) => {
        dishes[category].forEach((dish) => {
            amountTotal += dish.amount;
        });
    });
    if (amountTotal == 0) {
        CartAmountRef.classList.add('display-none');
    } else {
        CartAmountRef.innerHTML = `${amountTotal}`
        if (screenWidth == 'narrow') {
            CartAmountRef.classList.remove('display-none');
        }
    }

}

function calcSubTotal() {
    subTotal = 0;
    let categories = Object.keys(dishes);
    categories.forEach((category) => {
        dishes[category].forEach((dish) => {
            subTotal += dish.amount * dish.price;
        });
    });
    if (subTotal == 0) {
        basketRef.classList.add('display-none');
        basketVis = false;
        shopCart.src = './assets/icons/shopping-cart.png';
    }
    return subTotal
}

function numberToEuro(number) {
    let currency = `${number.toFixed(2).toString().replace('.', ',')} Є`;
    return currency;
}

function deleteOrder(category, i) {
    dishes[category][i].amount = 0;
    loadBasketTemplate();
    restoreBtn(category, i);
}

function resetIcon(Icontype) {
    document.getElementById(`${Icontype}ID`).src = `./assets/icons/${Icontype}.png`;
}

function registerClick(category, i, Icontype) {
    if (Icontype !== 'shopping-cart') {
        document.getElementById(`${category}${i}${Icontype}ID`).src = `./assets/icons/active-${Icontype}.png`;
    }
    else {
        if (shopCart.src !== './assets/icons/active-shopping-cart.png') {
            shopCart.src = './assets/icons/active-shopping-cart.png'
        } else {
            shopCart.src = './assets/icons/shopping-cart.png';
        }
    }
}

function toggleBasket() {
    basketRef.classList.toggle('display-none');
    basketVis = !basketVis;
    console.log(basketVis);
}

function toggleShoppingCart() {
    toggleBasket();
    toggleShoppingCartIcon();
}

function toggleShoppingCartIcon() {
    if (basketVis == true) {
        shopCart.src = './assets/icons/active-shopping-cart.png';
    } else if (subTotal == 0) {
        shopCart.src = './assets/icons/shopping-cart.png';
    } else {
        shopCart.src = './assets/icons/shopping-cart-filled.png';
    }
}
