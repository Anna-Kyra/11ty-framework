require('dotenv').config(); // API keys in de env worden toegevoegd aan de process.env
// console.log(process.env)
// console.log('space = ' + process.env.CONTENTFUL_SPACE_ID) werkt
// console.log('access token = ' + process.env.CONTENTFUL_ACCESS_TOKEN) werkt
// console.log(require('dotenv').config()) werkt (is om te zien dat het de goede env file vind)

module.exports = function(eleventyConfig) { //kan zonder en met function maar met function kan je meer
    eleventyConfig.addPassthroughCopy('./src/styles')
    eleventyConfig.addPassthroughCopy('./src/assets')

    // Waar komen de source files vandaan 
    // Waar zijn de public facing files located
    return {
        dir: {
            input: "src", // Waar ik in werk , nu de src map
            output: "public" // Default is _site, maar wil hem in de public folder omdat dat logischer is
        }
    }

    
}