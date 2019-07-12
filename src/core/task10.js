export default function Number() {

    this.first = prompt("Введите первое число");

    this.second = prompt("Введите второе число");

    this.plus = function() {
        const plus = (+this.first) + (+this.second);
        if (isNaN(plus) || !plus) return "Неверные значения";
        return plus;
    };

    this.multiply = function() {
        const plus = (+this.first) * (+this.second);
        if (isNaN(plus) || !plus) return "Неверные значения";
        return plus;
    };
}

const obj = new Number();
