'use strict';

const Linter = require('./linter');
const TestRunner = require('./test-runner');

const defaultConfig = {
    exitOnError: false,
    lint: true,
    testStyles: true
};

class ChuteJS {
    constructor(config=defaultConfig) {
        this.linter = new Linter();
        this.runner = new TestRunner()
    }

    configureReporters() {}

    beforeTests() {}

    afterTestsCompleted() {}

    onError() {}

    beforeLint() {}

    afterLintCompleted() {}
    afterCompleted() {}

    async lint(incomingLints) {
        let tests = [];
        if (typeof tests === 'object') {
            tests = [incomingLints];
        } else if (Array.isArray(incomingLints)) {
            tests = tests.push(incomingLints);
        }
        await this.linter.lint();
        return;
    }
    async runTests(incomingTests) {
        let tests = [];
        if (typeof incomingTests === 'object') {
            tests = [incomingTests];
        } else if (Array.isArray(incomingTests)) {
            tests = tests.push(incomingTests);
        }
        await this.runner.run()
    }

    async run(incomingTests, incomingLints) {
        let tests = [];
        if (typeof incomingTests === 'object') {
            tests = [incomingTests];
        } else if (Array.isArray(incomingTests)) {
            tests = tests.push(incomingTests);
        }

        let lints = [];
        if (typeof incomingLints === 'object') {
            lints = [incomingLints];
        } else if (Array.isArray(incomingLints)) {
            lints = lints.push(incomingLints);
        }
        await this.linter.runLinting();
        await this.runner.run();
    }
}

module.exports = ChuteJS;
