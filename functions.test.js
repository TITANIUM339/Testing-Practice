const { capitalize, reverseString } = require("./functions.js");

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
