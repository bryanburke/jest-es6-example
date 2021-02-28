import foo from "../modules/foo.js";

describe("foo", () => {
    it("reveals bar's value", () => {
        expect(foo("baz")).toBe("bar: baz");
    });
});
