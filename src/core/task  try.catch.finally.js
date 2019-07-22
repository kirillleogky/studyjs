export default function siteLog() {
    let age = prompt("Please enter age", "must be more than 18");

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (age == null) return alert("Break by user");
    try {
        if (!isNumeric(age) || age < 0) {
            throw new Error("It's must be a normal number");
        }
    } catch (e) {
        alert(e.name + ": " + e.message);
        age = "Error with input";
    } finally {
        if (+age < 18) {
            alert("Sory, but MORE THAN 18");
        } else if (+age >= 18) {
            alert("Welcome Stranger!");
        } else {
            alert(age);
        }
    }
}
siteLog();
