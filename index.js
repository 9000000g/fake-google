const express = require('express');
const fs = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);
app.listen(6785);
app.use('/static', express.static('files'));
app.use('/images', express.static('images'));

app.get('/google', (req, res) => {
    res.render(`google/index.html`);
})
app.get('/google/search', (req, res) => {
    let params = req.query;
    params = Object.assign(params, {
        result: require('./views/search/result.json')
    });
    res.render(`search/index.html`, params);
})
