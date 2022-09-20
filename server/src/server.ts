import express from 'express'
const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'kitty'},
        {id: 2, name: 'kitty2'},
        {id: 3, name: 'kitty3'},
        {id: 4, name: 'kitty4'},
        {id: 5, name: 'kitty5'},
    ])
});

app.listen(3333);