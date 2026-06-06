import dotenv from 'dotenv/config';

const { default: app } = await import('./src/app.js');
const serverless = require('serverless-http');


app.listen(3000, function(){
    console.log('server is running : 3000');
})