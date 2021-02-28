module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: ["text"],
    roots: ["webapp/tests"],
    setupFiles: ["<rootDir>/webapp/tests/test-setup.cjs"],
};
