// Imports
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes');

//Express server
const app = express();
app.use(express.json());

//constants
const mongoURI = 'mongodb://localhost:27017/taskdb'
const PORT = 3000;

//MongoDB Connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Connected to Mongo DB'))
.catch (err => console.error('Mongo DB connection error:', err));

//Task routes
app.use('/', taskRoute);

//Start the server
app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});