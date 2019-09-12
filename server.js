const express = require('express');
const repositoriesRoutes = require('./routes/repositoriesRoutes');
const app = express();

app.use('/repositories', repositoriesRoutes);
const port = process.env.PORT || 8000;

app.listen(port, () => console.log("server Listening on port"+ port));

module.exports = app;