export default function Bar() {
    let penicillin = {
        name: "penicillin",
        price: 10
    };
    let whiskeysour = {
        name: "whiskey sour",
        price: 15
    };
    let negroni = {
        name: "negroni",
        price: 13
    };
    let oldfashioned = {
        name: "old fashioned",
        price: 15
    };
    let whiterussian = {
        name: "white russian",
        price: 13
    };

    function enterCocktail() {
        return eval(prompt("enter the drink").toLowerCase().replace(' ', ''));
    };

    function namePriceCheck(cocktailName) {
        if (cocktailName.name == undefined) return alert("invalid value");
        if (cocktailName.price > this.totalMoney) return alert("not enough money");
    }

    function makeCocktail(cocktailName) {
        alert("Here you go " + cocktailName.name);
    };


    this.totalMoney = +prompt("Yours budget");

    this.menu = "You can buy: \nPenicillin - 10 \nWhiskey Sour - 15 \nNegroni - 13 \nOld Fashioned -15 \nWhite Russian - 13";
    alert(this.menu);

    this.buyCocktail = function() {
        let cocktailName = enterCocktail();
        namePriceCheck(cocktailName);
        makeCocktail(cocktailName);
        this.totalMoney -= cocktailName.price;
    };
}
let bar = new Bar();
