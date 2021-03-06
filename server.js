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
    const studentOneName    = request.body.studentOneName;
    const studentTwoName    = request.body.studentTwoName;
    const studentThreeName  = request.body.studentThreeName;

    const amountOne     = Number( request.body.studentOneDebt );
    const amountTwo     = Number( request.body.studentTwoDebt );
    const amountThree   = Number( request.body.studentThreeDebt );

    
    // const total = Number(request.body.amountOne + request.body.amountTwo + request.body.amountThree);
    const total = amountOne + amountTwo + amountThree ;

    // calculate the expenses everyone should pay
    // if we were to scale up we would take in number of students as part of post but here we hardcode to 3 for simplicity
    const average = total/3;

    // calculate what each student owes, if they owe negative amount it means they are owed 
    const studentOneOwes    = (average - amountOne).toFixed(2);
    const studentTwoOwes    = (average - amountTwo).toFixed(2);
    const studentThreeOwes  = (average - amountThree).toFixed(2);

    let studentOneFinalBill = '';
    let studentTwoFinalBill = '';
    let studentThreeFinalBill = '';

    if (studentOneOwes > 0) {
        studentOneFinalBill = studentOneName + " owes $" + studentOneOwes;
    }
    else {

        studentOneFinalBill = studentOneName + " is owed $" + Math.abs(studentOneOwes);
    }

    if (studentTwoOwes > 0) {
        studentTwoFinalBill = studentTwoName + " owes $" + studentTwoOwes;
    }
    else {
        studentTwoFinalBill = studentTwoName + " is owed $" + Math.abs(studentTwoOwes);
    }

    if (studentThreeOwes > 0) {
        studentThreeFinalBill = studentThreeName + " owes $" + studentThreeOwes;
    }
    else {
        studentThreeFinalBill = studentThreeName + " is owed $" + Math.abs(studentThreeOwes);
    }

// lets send 1 string of instructions for mvp 1

const equalizeInstructions =" To be equal each student should have paid " + average + ".  " + studentOneFinalBill + ".  " + studentTwoFinalBill + ".  " + studentThreeFinalBill;

    response.json({ instructions: equalizeInstructions });
});


const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));



