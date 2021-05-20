'use strict';

const Linter = require('./linter');
const TestRunner = require('./test-runner');
const ConfigReader = require('./config-reader');

const defaultConfig = {
    exitOnError: false,
    lint: true,
    testStyles: true,

};

class ChuteJS {
    constructor(config=defaultConfig) {
        this.linter = new Linter();
        this.runner = new TestRunner();
        this.configReader = new ConfigReader();
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

    parseSingleItemToArray(object) {
        let array = [];
        if (typeof object === 'object') {
            array = [object];
        } else if (Array.isArray(object)) {
            array = array.push(object);
        }
        return array;
    }

    parseTests(incomingTests, incomingLints) {
        let lints = this.parseSingleItemToArray(incomingTests);
        let tests = this.parseSingleItemToArray(incomingLints);
        return [lints, tests];
    }
    async run(incomingTests, incomingLints) {
        const [tests, lints] = this.parseTests(incomingTests, incomingLints);
        await this.configReader.readFiles();
        await this.linter.runLinting();
        await this.runner.run();
    }
}

module.exports = ChuteJS;
