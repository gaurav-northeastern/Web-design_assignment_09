const express = require('express');
const mongoose = require('mongoose');
const routes = require('./api/routes/userAuth');
const cors = require('cors')
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));


const PORT = 3001;


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})

mongoose.connect("mongodb+srv://turbo:gaurav123@ass8.75gvp.mongodb.net/?retryWrites=true&w=majority&appName=ass8")
    .then(() => {
        console.log("MongoDB is connected");
    })

app.use('/user', routes);