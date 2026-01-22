
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
    dishes[category][i].amount += 1;
    loadBasketTemplate();
    updateBtn(category, i);
}

function removeFromBasket(category, i) {
    dishes[category][i].amount -= 1;
    loadBasketTemplate();
    updateBtn(category, i);
}

function updateBtn(category, i) {
    if (dishes[category][i].amount == 0) {
        restoreBtn(category, i);
    } else {
        changeBtn(category, i);
    }
}

function calcSubTotal() {
    let categories = Object.keys(dishes);
    let SubTotal = 0;
    categories.forEach((category) => {
        dishes[category].forEach((dish) => {
            SubTotal += dish.amount * dish.price;
        });
    });
    return SubTotal
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
    document.getElementById(`${category}${i}${Icontype}ID`).src = `./assets/icons/active-${Icontype}.png`;
}

