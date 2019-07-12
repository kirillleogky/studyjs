export default function multiply() {

    if (arguments.length) {

        const number = 1;
        for (let i = 0; i < arguments.length; i++) {
            number *= arguments[i];
        }
        return number;
    } else {
        return 0;
    }
}
