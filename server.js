const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());

// MongoDB Connection String (uses the container name 'mongodb' from your network)
const url = 'mongodb://admin:password@mongodb:27017';
const client = new MongoClient(url);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint to receive website changes and update database
app.post('/update-db', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('greenfit_db');
        const collection = db.collection('workouts');
        
        await collection.insertOne(req.body);
        console.log("Data saved to MongoDB:", req.body);
        res.status(200).send("Update Successful");
    } catch (err) {
        console.error(err);
        res.status(500).send("Database Error");
    }
});

app.listen(3000, () => {
    console.log("GreenFit App listening on port 3000!");
});