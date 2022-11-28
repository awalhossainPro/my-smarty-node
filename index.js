    const express = require('express');
    const app = express();
    const cors = require('cors');
    const port = process.env.PORT || 5000;

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hello from my smarty SHOP SHOP')
    });

    const users = [
        {id:1, name: "Shabana", email: "shabana@gmail.com", phone: "01788888888"},
        {id:2, name: "Shuchonda", email: "shuchonda@gmail.com", phone: "01788888888"},
        {id:3, name: "Shabnoor", email: "shabnoor@gmail.com", phone: "01788888888"},
        {id:4, name: "Shuchorita", email: "shuchorita@gmail.com", phone: "01788888888"},
        {id:5, name: "Shohana", email: "shohana@gmail.com", phone: "01788888888"},
        {id:6, name: "Saba", email: "saba@gmail.com", phone: "01788888888"},
        {id:7, name: "Shomi Kaiser", email: "shomikaiser@gmail.com", phone: "01788888888"}
    ];

    app.get('/users', (req, res) => {
        if (req.query.name) {
            const search = req.query.name.toLowerCase();
            const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
            res.send(matched);
        }
        res.send(users)
    });

    app.get('/fruits', (req, res) => {
        res.send(['mango', 'orange', 'banana', 'guava', 'pineapple', 'lemon'])
    });

    app.get('/user/:id', (req, res) => {
        console.log(req.params);
        const id = parseInt(req.params.id);
        const user = users.find(u => u.id === id);
        res.send(user);
    });

    app.post('/user', (req, res) => {
        console.log('request', req.body);
        const user = req.body;
        user.id = users.length + 1;
        users.push(user);
        res.send(user);
    });

    app.listen(port, ()=>{
        console.log('Listening to port', port);
    });