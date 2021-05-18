class Linter {
    constructor() {}

    async runLinting() {
        const lintingData = await stylelint.lint({
                files: './*.css',
            })
        console.log(lintingData)
    }
}
