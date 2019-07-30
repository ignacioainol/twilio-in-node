require('dotenv').config();

const accountSId = process.env.ACCOUNT_SID;
const authToken  = process.env.AUTH_TOKEN; 

const client = require('twilio')(accountSId,authToken);

client.messages.create({
    to: process.env.MY_PHONENUMBER,
    from: '+56937610190',
    body: 'Hello world :D'
})
    .then(message => console.log(message.sid))