const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const { response } = require('express');

const app = express();

const port = process.env.PORT || 4201;

app.use(express.static(__dirname + '/dist/road-trip-calculator'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.post('/getData', (req, res) => 
{
    res.json({
        "statusCode": 200,
        "statusMessage": "SUCCESS"
    })
});



app.post('/post-test', express.urlencoded({extended: false}), express.json(), (request,response) => {
    const amountOne     = Number( request.body.amountOne );
    const amountTwo     = Number( request.body.amountTwo );
    const amountThree   = Number( request.body.amountThree );

    // const total = Number(request.body.amountOne + request.body.amountTwo + request.body.amountThree);
    const total = amountOne + amountTwo + amountThree ;

    // calculate the expenses everyone should pay
    // if we were to scale up we would take in number of students as part of post but here we hardcode to 3 for simplicity
    const average = total/3;

    // calculate what each student owes, if they owe negative amount it means they are owed 
    const studentOneOwes = average - amountOne;

    response.json({ totalExpenses: total, averageExpense: average, studentOneDebt: studentOneOwes});
});


const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));



