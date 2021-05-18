const stylelint = require('stylelint')
class Linter {
    constructor(lintConfiguration) {
        
    }

    async lint() {
        const lintingData = await stylelint.lint({
                files: './*.css',
            })
        console.log(lintingData)
    }
}

module.exports = Linter;