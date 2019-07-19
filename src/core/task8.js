export default function createArray(number) {
    const array = [];

    if (number < 0) {
        for (let i = 0; i > number; i--) {
            array.push(i);
        }

    } else {
        for (let i = 0; i < number; i++) {
            array.push(i);
        }
    }

    return array;
}
