var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var httpPort = process.env.httpPort || 3000;

var app = express();

var loginService = require('../service-api/service')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'views')));
loginService(app);

if (require.main === module) {
  app.listen(httpPort, function() {
    console.log('Server http listening on port %d', this.address().port);
  });
}
