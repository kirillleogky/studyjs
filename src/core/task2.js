export default function makeReverse(string) {

    let word = "";

    for (let i = (string.length - 1); i > -1; i--) {
        word += string[i];
    }

    return word;
}
