const express = require ('express');
const cors = require ('cors')
const fs = require ('fs');

let rawdata = fs.readFileSync('hndata.json');
let hnData = JSON.parse(rawdata);

const app = express();
app.use(cors())

app.get('/',(req,res) => {
    res.json(hnData);
});

app.get('/hello',(req,res) => {
    res.send('helllo to you too!');
})



app.listen('4000',() => {
    console.log('server up on port 4000')
});