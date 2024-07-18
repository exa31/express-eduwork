const express = require('express');
const app = express();
const route = require('./routes/routes');


app.use(route)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});