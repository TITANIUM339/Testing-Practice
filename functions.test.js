const { capitalize } = require("./functions.js");

test("capitalize", () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
    expect(capitalize("anIMaL")).toBe("AnIMaL");
    expect(capitalize("Chocolate")).toBe("Chocolate");
});
