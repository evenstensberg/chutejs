'use strict';

class ChuteJS {
    constructor(config, incomingTests) {
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

    afterTestCompleted() {}

    onError() {}

    beforeLint() {}

    afterLint() {}
    afterCompleted() {}
}

module.exports = ChuteJS;
