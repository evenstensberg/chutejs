#!/usr/bin/env node

const Jasmine = require("jasmine");
const fs = require('fs');
const path = require("path");
const vm = require("vm");

const jasmine = new Jasmine();

function test(options) {
  /*   jasmine.loadConfigFile('spec/support/jasmine.json'); */

  jasmine.loadConfig({
    spec_dir: "style-tests",
    spec_files: ["**/*[sS]yletest.js", "*styletest.js", "*.styletest.js"],
  });
  jasmine.configureDefaultReporter({
    showColors: true,
  });

  jasmine.onComplete(function (passed) {
    if (passed) {
      console.log("All specs have passed");
    } else {
      console.log("At least one spec has failed");
    }
  });
  const proc_pwd = process.cwd();
  const fp = path.resolve(proc_pwd, options[2], 'styletests', 'main.styletest.js');

  const mainModule = fs.readFileSync(fp);
  console.log(mainModule)
/*   const context = {
    animal: 'cat',
    count: 2
  };

  const script = new vm.Script('');
  
  vm.createContext(context);

  script.runInContext(context);
  console.log(context) */
/* 
  jasmine.execute([fp]); */
}

test(process.argv);
