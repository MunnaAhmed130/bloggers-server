// express
const express = require("express");
const app = express();

// mongodb
const { MongoClient, ServerApiVersion } = require("mongodb");

// cors
var cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// dotenv
require("dotenv").config();

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 4000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dgg2e.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);

app.get("/", (req, res) => {
    res.json("hello world");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
