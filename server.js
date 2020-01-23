const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


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




app.get('/games', async (req, res) => {
    return res.json()
} )


//Listen to port

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Boardgames-shop server is running at port: http://localhost:${port}`)
})