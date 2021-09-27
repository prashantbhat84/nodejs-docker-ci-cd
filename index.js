const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => res.send({status: "I'm working well!"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));