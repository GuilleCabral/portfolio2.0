const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

//access to .env variables
require('dotenv').config();
const dbURI = process.env.ATLAS_URI;

//routes
const contactsRoutes = require('./routes/contacts');

//middleware
app.use(cors());
app.use(express.json());
app.use('/contact', contactsRoutes)

//static files for heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//connect to db
mongoose
    .connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB has been connected"))
    .catch((err) => console.log(err));

//listen for port 5000 or prod
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});