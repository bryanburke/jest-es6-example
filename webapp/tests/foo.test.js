/* eslint-disable import/no-commonjs */
const { foo } = require("../modules/foo.js");

describe("foo.js", () => {
    describe("foo", () => {
        it("constructs a string with bar", () => {
            expect(foo("baz")).toBe("bar: baz");
        });
    });
});
