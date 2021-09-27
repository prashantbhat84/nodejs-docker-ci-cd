const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => res.send({status: "Hi Prashant I am working well all set!"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));