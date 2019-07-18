export default function compare(first, second) {

    return (first > second) ? first : second;

}


function exponentiation(first, second) {

    if (first < 0 && second < 0) return "Invalid Value";
    return first ** second;

}
