import express from 'express'
const app = express();

app.get('/games', (req, res) => {
    return res.json([]);
});

app.get('/games/:id/ads', (req, res) => {
    return res.json([
        {id: 1, name: 'kitty'},
        {id: 2, name: 'kitty2'},
        {id: 3, name: 'kitty3'},
        {id: 4, name: 'kitty4'},
        {id: 5, name: 'kitty5'},
    ])
});

app.get('/games/:id/discord', (req, res) => {
    return res.json([])
});

app.post('/ads', (req, res) => {
    return res.json([]);
});

app.post('/createdAt', (req, res) => {
    return res.json([]);
});

app.listen(3333);