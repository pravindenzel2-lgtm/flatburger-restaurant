// TASK 1: GLOBAL SCOPE

const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";

// TASK 2: FUNCTION SCOPE

function addBurger() {
    const newBurger = "Flatburger";
    burgers.push(newBurger);
}

// TASK 3: BLOCK SCOPE

if (true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}

// TASK 4: CHANGE FEATURED DRINK

function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
}