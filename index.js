const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes'))







app.listen(port,function(err){
    if(err){
        console.log(`Error is running on ${err}`);
    }
    console.log(`Server is running on ${port}`);
})