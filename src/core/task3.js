export default function addUnicode(words) {

    const numbers = [];

    for (let i = 0; i < words.length; i++) {
        numbers.push(words.charCodeAt(i));
    }

    return numbers.join(", ");
}
