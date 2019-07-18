export default function multiply() {

    if (arguments.length > 0) {

        const number = 1;
        for (let i = 0; i < arguments.length; i++) {
            number *= arguments[i];
        }
        return number;
    }
    return 0;
}
