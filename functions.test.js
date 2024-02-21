const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require("./functions.js");

test("capitalize", () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
    expect(capitalize("anIMaL")).toBe("AnIMaL");
    expect(capitalize("Chocolate")).toBe("Chocolate");
});

test("reverseString", () => {
    expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
    expect(reverseString("anIMaL")).toBe("LaMIna");
    expect(reverseString("Chocolate")).toBe("etalocohC");
});

test("calculator", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(0, 1)).toBe(-1);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.multiply(10, 10)).toBe(100);
});

test("caesarCipher", () => {
    expect(caesarCipher("Hello, world!", 5)).toBe("MJQQT, BTWQI!");
    expect(caesarCipher("anIMaL", 1)).toBe("BOJNBM");
    expect(caesarCipher("Chocolate", 3)).toBe("FKRFRODWH");
});

test("analyzeArray", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
    expect(analyzeArray([1, 1, 1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 3,
    });
    expect(analyzeArray([16, 8])).toEqual({
        average: 12,
        min: 8,
        max: 16,
        length: 2,
    });
});
