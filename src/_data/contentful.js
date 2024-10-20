const contentful = require("contentful") // Wordt de Contentful JavaScript SDK (client library) geimporteert
// console.log('space = ' + process.env.CONTENTFUL_SPACE_ID) 
// console.log('access token = ' + process.env.CONTENTFUL_ACCESS_TOKEN)

const space = process.env.CONTENTFUL_SPACE_ID 
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN 

const client = contentful.createClient({ // nieuwe client aangemaakt met de tokens van de env file, zorgt ervoor dat het dynamisch word
    space: space,
    accessToken: accessToken
})


// console.log(client) 

// console.log(client)

module.exports = function() {
    return client.getEntries({ content_type: 'page', order: 'sys.createdAt' })
    .then(function(response) {
        const page = response.items
        .map(function(page) {
            page.fields.date= new Date(page.sys.updatedAt);
            return page.fields;
        });
        return page;
    })
    .catch(console.error);
};

