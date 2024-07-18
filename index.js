const express = require('express');
const app = express();
const route = require('./routes/routes');


app.use(route)

// Menentukan port dari variabel lingkungan atau default ke 3000
const PORT = process.env.PORT || 3000;
// Menentukan host dari variabel lingkungan atau default ke '0.0.0.0' untuk deployment
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});