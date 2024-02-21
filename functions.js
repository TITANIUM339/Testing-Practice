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

function caesarCipher(plainText, key) {
    plainText = plainText.toUpperCase();

    let cipherText = "";

    const Z = 90,
        A = 65;

    for (let i = 0; i < plainText.length; i++) {
        if (plainText[i].toLowerCase() !== plainText[i]) {
            let newCharCode = plainText.charCodeAt(i) + key;

            if (newCharCode > Z) {
                cipherText += String.fromCharCode(newCharCode - Z + A - 1);
            } else {
                cipherText += String.fromCharCode(newCharCode);
            }
        } else {
            cipherText += plainText[i];
        }
    }

    return cipherText;
}

function analyzeArray(arr) {
    let min = arr[0],
        max = arr[0],
        total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];

        total += arr[i];
    }

    return { average: total / arr.length, min, max, length: arr.length };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};
