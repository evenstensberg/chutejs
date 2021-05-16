#!/usr/bin/env node
'use strict';

const yargs = require('yargs');
require('./config')(yargs);

yargs.parse(process.argv, async function (error, argv) {
    const helpOutput = await yargs.getHelp();
    if (error) {
        console.error(error);
        return;
    }
    if (argv.help || argv.h) {
        console.log(helpOutput);
        return;
    }
    console.log(argv);
});
