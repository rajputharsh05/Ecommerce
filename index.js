const express = require("express");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");

const server = express();
const PORT = 8000;

const html = `
    <h1>Hello World</h1>
    <p>This is fun testing .</p>
`

async function sendEmail () {


    


}
server.use(morgan("dev"));
server.use(bodyparser.urlencoded({ extended: false }))
server.use(bodyparser.json());

server.get("/home", async (req, res) => {

    console.log("ON HOME ! .");

    console.log(req.body.email);


    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:465,
        secure:false,
        auth : {
            user : testAccount.user,
            pass : testAccount.pass
        }
    })


    const response = transporter.sendMail({
        from:"hs7992476139@gmail.com",
        to : "hsd020@nist.edu",
        subject : "Testing 123,123,123",
        html : html
    }).then(()=>{

    }).catch((e) => {
        console.log(e)
        } 
    )


    
    res.json("Request accepted");
})


server.listen(PORT , () => {
    console.log(`Server id running on ${PORT}`);
})


