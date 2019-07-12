export default function showFilteredArray(array, filterFunction) {

    const newArray = array.filter(filterFunction);

    return alert(newArray.join(","));
}

function filterNumbers(number) {
    return number > 5;
}
