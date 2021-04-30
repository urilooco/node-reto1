const express = require('express');
const app = express();

// Settings
app.set('port', 3000);

app.get('/', function(req, res) {
    res.send("<h1>Welcome to Uri's API. I'm using NodeJS :)</h1>")
  });

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port " + app.get('port'));
});