/* eslint-disable global-require, import/no-commonjs */
jest.mock("../modules/foo.js");
const { foo } = require("../modules/foo.js");

describe("main.js", () => {
    it("calls foo()", () => {
        $("body").append('<p id="foo"></p>');
        foo.mockReturnValue("baz");
        require("../main.js"); // Module has a side effect.
        expect(foo).toHaveBeenCalledWith("bar");
        expect($("#foo").text()).toBe("baz");
    });
});
