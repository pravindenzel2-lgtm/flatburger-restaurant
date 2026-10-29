// FLATBURGER RESTAURANT

// TASK 1: GLOBAL SCOPE

const burgers = ["Hamburger", "Cheeseburger"];

let featuredBurger = "Cheeseburger";

let featuredDrink = "Milkshake";

// TASK 2: FUNCTION SCOPE

function displayRestaurant() {
    var restaurantName = "Flatburger Restaurant";

    console.log("Welcome to " + restaurantName);
    console.log("Available burgers:", burgers);
    console.log("Featured drink:", featuredDrink);
}

// TASK 3: UPDATE FEATURED BURGER

function updateFeaturedBurger() {
    featuredBurger = "Double Cheeseburger";

    console.log("Featured burger:", featuredBurger);
}

// TASK 4: BLOCK SCOPE

function addBurger() {
    if (true) {
        const newBurger = "Bacon Cheeseburger";

        burgers.push(newBurger);

        console.log(newBurger + " added successfully!");
    }

    console.log("Updated burger menu:", burgers);
}

// RUN FUNCTIONS

displayRestaurant();
updateFeaturedBurger();
addBurger();

// FINAL RESULTS

console.log("FINAL MENU");
console.log("Burgers:", burgers);
console.log("Featured burger:", featuredBurger);
console.log("Featured drink:", featuredDrink);