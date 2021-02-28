/* eslint-disable import/no-commonjs */
module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/webapp/vendor/",
    ],
    coverageReporters: ["text"],
    roots: ["<rootDir>/webapp/tests"],
    setupFiles: ["<rootDir>/webapp/tests/test-setup.cjs"],
};
