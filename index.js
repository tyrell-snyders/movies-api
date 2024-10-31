const express = require('express');
const app = express();
const route = require('./routes/routes.js');
// TODO: create a default route that returns hello world
//  HINT: get
app.use('/', route);

// Get trending movies
app.use('/trending', route);

//Get tv movies
app.use('/tv', route);

// This uses an environment variable to set the port. If the variable cannot be found,
// it will default to 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})