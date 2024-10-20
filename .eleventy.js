require('dotenv').config() // API keys in de env worden toegevoegd aan de process.env
// console.log(process.env)

const fs = require('fs');

module.exports = function(eleventyConfig) { //kan zonder en met function maar met function kan je meer
    
    eleventyConfig.addPassthroughCopy('redirect.njk')
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