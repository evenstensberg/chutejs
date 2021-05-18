'use strict';

const Linter = require('./linter');

const defaultConfig = {
    exitOnError: false,
    lint: true,
    testStyles: true
};

class ChuteJS {
    constructor(config=defaultConfig) {
        this.linter = new Linter();
    }

    configureReporters() {}

    beforeTests() {}

    afterTestsCompleted() {}

    onError() {}

    beforeLint() {}

    afterLintCompleted() {}
    afterCompleted() {}

    async run(incomingTests) {
        let tests = [];
        if (typeof tests === 'object') {
            tests = [incomingTests];
        } else if (Array.isArray(tests)) {
            tests = tests.push(incomingTests);
        }
        await Linter.runLinting();
        return;
    }
}

module.exports = ChuteJS;
