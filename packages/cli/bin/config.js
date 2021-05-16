module.exports = function (yargs) {
    yargs
        .scriptName('chute')
        .help('help')
        .alias('help', 'h')
        .version()
        .alias('version', 'v')
        .usage('Usage: $0 ./path/to/styletest/test.styletest.js')
        .options({
            watch: {
                type: 'boolean',
                describe: 'Invoke watch mode',
            },
        })
        .strict();
};
