export default function MultiplyOfNum() {

    this.values = [prompt("Введите первое число"), prompt("Введите второе число")];

    this.plus = function() {
        const plus = (+this.values[0]) + (+this.values[1]);
        if (isNaN(plus) || !plus) return "Неверные значения";
        return "Сумма ваших значений: " + plus;
    };

    this.multiply = function() {
        const multiply = (+this.values[0]) * (+this.values[1]);
        if (isNaN(multiply) || !multiply) return "Неверные значения";
        return "Произведение ваших значений: " + multiply;
    };
}

const obj = new MultiplyOfNum();
