'use strict';


const defaultConfig = {
    exitOnError: false,
    lint: true,
    testStyles: true
};

class ChuteJS {
    constructor(config=defaultConfig, incomingTests) {
        let tests = [];
        if (typeof tests === 'object') {
            tests = [incomingTests];
        } else if (Array.isArray(tests)) {
            tests = tests.push(incomingTests);
        }
        return;
    }

    configureReporters() {}

    beforeTests() {}

    afterTestsCompleted() {}

    onError() {}

    beforeLint() {}

    afterLintCompleted() {}
    afterCompleted() {}
}

module.exports = ChuteJS;
