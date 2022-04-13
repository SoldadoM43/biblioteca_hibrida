const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

let db = [
    {'1': {Nome: 'User 1', Idade: '18'}},
    {'2': {Nome: 'User 2', Idade: '14'}},
    {'3': {Nome: 'User 3', Idade: '28'}}
]

app.get('/', (req, res) => {
    return res.json(db);
});

app.listen(3001, () => {
    console.log(`Servidor aberto em https://localhost:3001`);
})