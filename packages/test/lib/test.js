#!/usr/bin/env node

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

function test(options) {
  /*   jasmine.loadConfigFile('spec/support/jasmine.json'); */

    jasmine.loadConfig({
        spec_dir: 'style-tests',
        spec_files: [
            '**/*[sS]yletest.js',
            '*styletest.js',
            '*.styletest.js'
          ],
    });
    jasmine.configureDefaultReporter({
        showColors: true
    });

    jasmine.onComplete(function(passed) {
        if(passed) {
            console.log('All specs have passed');
        }
        else {
            console.log('At least one spec has failed');
        }
    });
    console.log(options);
    const proc_pwd = process.cwd();
    const path = require('path');
    const fp = path.resolve(proc_pwd, options[2]);
    jasmine.execute([fp]);

}

test(process.argv)
