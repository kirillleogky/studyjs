export default function Number() {

    this.first = prompt("Введите первое число");

    this.second = prompt("Введите второе число");

    this.plus = function() {
        var plus = (+this.first) + (+this.second);
        if (isNaN(plus) || !plus) return "Неверные значения";
        return plus;
    };

    this.multiply = function() {
        var plus = (+this.first) * (+this.second);
        if (isNaN(plus) || !plus) return "Неверные значения";
        return plus;
    };
}

const obj = new Number();
