const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const source = fs.readFileSync(
    path.join(__dirname, "..", "index.js"),
    "utf8"
);

function createContext() {
    const context = {};
    vm.createContext(context);
    vm.runInContext(source, context);
    return context;
}

describe("Flatburger Restaurant Scope Lab", function () {
    it("creates the burgers array with Hamburger and Cheeseburger", function () {
        const context = createContext();
        const burgers = Array.from(
            vm.runInContext("burgers", context)
        );

        assert.ok(burgers.includes("Hamburger"));
        assert.ok(burgers.includes("Cheeseburger"));
    });

    it("initializes featuredDrink as Strawberry Milkshake", function () {
        const context = createContext();

        assert.strictEqual(
            vm.runInContext("featuredDrink", context),
            "Strawberry Milkshake"
        );
        assert.strictEqual(
            vm.runInContext('typeof featuredDrink', context),
            "string"
        );
    });

    it("adds Flatburger using addBurger", function () {
        const context = createContext();

        assert.strictEqual(
            vm.runInContext("typeof addBurger", context),
            "function"
        );

        vm.runInContext("addBurger()", context);

        const burgers = Array.from(
            vm.runInContext("burgers", context)
        );

        assert.ok(burgers.includes("Flatburger"));
    });

    it("adds Maple Bacon Burger in a block scope", function () {
        const context = createContext();

        const burgers = Array.from(
            vm.runInContext("burgers", context)
        );

        assert.ok(burgers.includes("Maple Bacon Burger"));
        assert.strictEqual(
            vm.runInContext("typeof anotherNewBurger", context),
            "undefined"
        );
    });

    it("changes featuredDrink to The JavaShake", function () {
        const context = createContext();

        assert.strictEqual(
            vm.runInContext("typeof changeFeaturedDrink", context),
            "function"
        );

        vm.runInContext("changeFeaturedDrink()", context);

        assert.strictEqual(
            vm.runInContext("featuredDrink", context),
            "The JavaShake"
        );
    });
});
