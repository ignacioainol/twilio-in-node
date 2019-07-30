require('dotenv').config();

const accountSId = process.env.ACCOUNT_SID;
const authToken  = process.env.AUTH_TOKEN; 

const client = require('twilio')(accountSId,authToken);

