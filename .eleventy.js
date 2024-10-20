require('dotenv').config() // API keys in de env worden toegevoegd aan de process.env
// console.log(process.env)
const EleventyPluginNetlifyRedirects = require("eleventy-plugin-netlify-redirects");

module.exports = function(eleventyConfig) { //kan zonder en met function maar met function kan je meer
    
    eleventyConfig.addPassthroughCopy('./src/styles')
    eleventyConfig.addPassthroughCopy('./src/assets')

    const eleventyPluginNetlifyRedirectsOptions = {};
    eleventyConfig.addPlugin(EleventyPluginNetlifyRedirects, eleventyPluginNetlifyRedirectsOptions);
    
    
    // Waar komen de source files vandaan 
    // Waar zijn de public facing files located
    return {
        dir: {
            input: "src", // Waar ik in werk , nu de src map
            output: "public" // Default is _site, maar wil hem in de public folder omdat dat logischer is
        }
    }

    
}