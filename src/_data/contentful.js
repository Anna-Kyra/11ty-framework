const contentful = require("contentful") // Wordt de Contentful JavaScript SDK (client library) geimporteert
console.log('space = ' + process.env.CONTENTFUL_SPACE_ID) 
console.log('access token = ' + process.env.CONTENTFUL_ACCESS_TOKEN)

const space = process.env.CONTENTFUL_SPACE_ID 
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN 

const client = contentful.createClient({ // nieuwe client aangemaakt met de tokens van de env file, zorgt ervoor dat het dynamisch word
    space: space,
    accessToken: accessToken
})

// console.log(client)
module.exports = function() {
    return client.getEntries({ 
        content_type: 'page', 
        order: 'sys.createdAt'
    })
    .then(function(response) {
        const page = response.items
        // console.log(JSON.stringify(page))
        .map(function(page) {
            page.fields.date = new Date(page.sys.updatedAt);
            // console.log(page.fields.components)
            console.log(page.fields.components)
            // console.log(JSON.stringify(page.sys.id))
            // console.log(page.fields.sys.contentType.sys.id)
            // console.log(JSON.stringify(page.fields.components))
            return page.fields;
        });
        return page;
    })
    .catch(console.error);
};


