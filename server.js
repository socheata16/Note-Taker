const express = require('express');

const apiRoutes = require('fs');
const htmlRoutes = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


require('')(app);

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});