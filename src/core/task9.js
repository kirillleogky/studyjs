export default function showReverse(array) {

    const revArray = [];

    for (let i = (array.length - 1); i > -1; i--) {
        revArray.push(array[i]);
    }

    return revArray;
}
