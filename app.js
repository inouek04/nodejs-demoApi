const express = require('express');
const app = express();
const Log = require('./utils/Log');
const log = new Log();

app.get('/', (req, res) => {
  log.log('[Application] from '  + req.ip + ' to /');
  res.json({'name': 'taro'});
});

app.use(function(req, res, next) {
  log.error('[Application] ' + req.ip + ' is accessed to unknown page');
  res.status(404);
  res.json({'error': 'page not found'});
})

app.listen(process.env.PORT || 8080, function() {
  log.log('[Application] App listening at port ' + process.env.PORT || 8080);
});
