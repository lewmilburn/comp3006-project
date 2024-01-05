module.exports = async function(connectionString) {
    const { MongoClient, ServerApiVersion } = require('mongodb');

    const client = new MongoClient(connectionString, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();

        console.log("[DB] Connected to database.");

        return await client;
    } finally {
        await client.close();
    }
}