const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   console.log('req ')
//   res.send(req.body);
// })

const port = 3000;

app.listen(port, () => {
  console.log('listing on port ' + port);
});


