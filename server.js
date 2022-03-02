import express from 'express';
import cors from 'cors';
import {Person, persons} from "./person.js";
import {fruits} from "./Fruit.js";
const app = express();
const corsOptions = {origin: '*'};
const port = 3000;

app.use(cors(corsOptions));
app.use(express.json());

app.get('/',
    (req, res) => res.send('This is hello api'));

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.post('/api/persons', (req, res) => {
    persons.push(req.body);
    res.send(req.body);    // echo the result back
});

app.get('/api/fruits', (req, res) => {
    res.json(fruits);
});

app.post('/api/fruits', function(request, response){
    fruits.push(request.body);
    response.send(request.body);    // echo the result back
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});