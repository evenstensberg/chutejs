'use strict';


const Jasmine = require('jasmine');
const Linter = require('./linter');
const TestRunner = require('./test-runner');
const ConfigReader = require('./config-reader');

const defaultConfig = {
    exitOnError: false,
    lint: true,
    testStyles: true,

};

class ChuteJS {
    constructor(config) {
        this.linter = new Linter();
        this.runner = new TestRunner();
        this.configReader = new ConfigReader();
        this.jasmine = new Jasmine();
        this.configuration = Object.assign(defaultConfig, config);
    }

    configureReporters() {
        this.jasmine.configureDefaultReporter({
            showColors: true,
          });
    }

    beforeTests(cb) {
        cb(arguments)
    }

    afterTestsCompleted(cb) {
        jasmine.onComplete(cb);
    }

    onError(cb) {
        cb(arguments)
    }

    beforeLint(cb) {
        cb(arguments);
    }

    afterLintCompleted() {}
    afterCompleted() {}

    async lint(incomingLints) {
        let tests = this.parseSingleItemToArray(incomingLints);
        await this.linter.lint();
        return;
    }
    async runTests(incomingTests) {
        let tests = this.parseSingleItemToArray(incomingTests);
        await this.configureReporters();
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
        await this.configureReporters();
        await this.runTests()
    }
}

module.exports = ChuteJS;
