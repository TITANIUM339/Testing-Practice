function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

const calculator = (() => {
    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    function divide(x, y) {
        return x / y;
    }

    function multiply(x, y) {
        return x * y;
    }

    return { add, subtract, divide, multiply };
})();

module.exports = { capitalize, reverseString, calculator };
