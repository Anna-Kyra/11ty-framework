const contentful = require("contentful") // Wordt de Contentful JavaScript SDK (client library) geimporteert
const space = 'ujjnpzbu47yu'; 
const accessToken = 'CgGJdRcykhP8nVcS1XTiF9yzouz6ZHqLuk6yK3_QVfc';  

const client = contentful.createClient({ // nieuwe client aangemaakt met de tokens van de env file, zorgt ervoor dat het dynamisch word
    space: space,
    accessToken: accessToken
})

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

