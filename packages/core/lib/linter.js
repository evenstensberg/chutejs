const stylelint = require('stylelint')
class Linter {
    constructor(lintConfiguration) {
        
    }

    async lint() {
        stylelint.lint({
                files: './*.css',
        }).then(function (data) {
            console.log(data, "DATA")
            // do things with data.output, data.errored,
            // and data.results
          })
          .catch(function (err) {
            // do things with err e.g.
            if(err.stack.includes(' No files matching the pattern')) {
                console.log("ERROR")
            }
          });
    }
}

module.exports = Linter;