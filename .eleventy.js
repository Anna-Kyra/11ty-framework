module.exports = function(eleventyConfig) {
    // Waar komen de source files vandaan
    return {
        dir: {
            input: "src", //in de src folder
            output: "public" //in de public folder
        }
    }
}