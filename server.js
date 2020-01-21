const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const api = express();


//Middlewares:

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('build'))
app.use('/api', api);



app.get('/games', (req, res) => {
    return res
} )


//Listen to port

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Boardgames-shop is running at port: http://localhost:${port}`)
})