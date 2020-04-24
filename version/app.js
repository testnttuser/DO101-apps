const express = require('express');
app = express();

var response;

app.get('/v1', function (req, res) {

    response = 'This is version 1 of the app lol.' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/v2', function (req, res) {

  response = 'This is version 2 of the app lol.' + '\n';

  //send the response to the client
  res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
