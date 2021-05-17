'use strict';


const defaultConfig = {
    exitOnError: false,
    lint: true,
    testStyles: true
};

class ChuteJS {
    constructor(config=defaultConfig) {
    }

    configureReporters() {}

    beforeTests() {}

    afterTestsCompleted() {}

    onError() {}

    beforeLint() {}

    afterLintCompleted() {}
    afterCompleted() {}

    run(incomingTests) {
        let tests = [];
        if (typeof tests === 'object') {
            tests = [incomingTests];
        } else if (Array.isArray(tests)) {
            tests = tests.push(incomingTests);
        }
        return;
    }
}

module.exports = ChuteJS;
