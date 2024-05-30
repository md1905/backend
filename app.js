const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const numberToWords = require('./helper/numberToWords');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => { res.send('ok')});


app.post('/convert', (req, res) => {
    const { number } = req.body;

    // Validate input
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return res.status(400).json({ status: 'error', message: 'Invalid input: must be an integer' });
    }
    if (number < 0 || number > 999) {
        return res.status(400).json({ status: 'error', message: 'Invalid input: number out of range (0-999)' });
    }

    // Convert number to words
    const words = numberToWords(number);
    if (words === null) {
        return res.status(400).json({ status: 'error', message: 'Number out of range' });
    }

    // Return success response
    res.json({ status: 'success', words });
});


app.listen(port, () => {
    console.log('server listen on port', port);
});
