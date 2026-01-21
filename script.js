
function loadDishes(){
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

function loadDishTemplate(type, i){
    const dishElement = document.getElementById(`${type}ID`);
    console.log(dishes[type][i].name);
    
    dishElement.innerHTML += `
     <div class="dish">
         <img class="dish-img" src="./assets/food/${type+i}.png" alt="${dishes[type][i].name}">
         <div class="dish-description">
             <h3>${dishes[type][i].name}</h3>
             <p>${dishes[type][i].description}</p>
         </div>
         <div class="dish-price">
             <p>${dishes[type][i].price}</p>
             <button>add to basket</button>
         </div>
     </div>`
}