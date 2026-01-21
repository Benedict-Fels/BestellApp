
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

function loadBasketDish(){
    let basketDishes = "";
    let categories = Object.keys(dishes);
    categories.forEach((category) => {
        dishes[category].forEach((dish) => {
        if (dish.amount > 0) {
            basketDishes += loadBasketDishTemplate(dish);
            console.log(dish);
            
        }
        });
    });
    
    return basketDishes
}

function addToBasket(dish){
    dish.amount += 1;
    loadBasketDish();
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

function numberToEuro(number){
    let currency = `${number.toFixed(2).toString().replace('.', ',')} Є`;
    return currency;
}
