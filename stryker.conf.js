module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    htmlReporter: {
      baseDir: 'reports/common/html'
    },
    reporters: ["html", "clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mutate: [
      "generators/common/**/*.js",
    ],
    mochaOptions: {
      files: [
        "test/common.spec.js",
      ],
      timeout: 3000,
    },
  });
};
