'use strict';

import Jasmine from 'jasmine';
const jasmine = new Jasmine();

export default function test() {
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
    jasmine.execute();

}

test()
