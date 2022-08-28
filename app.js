const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('[Application] from: ' + req.ip + ' to: /')
  res.json({'name': 'taro'});
});

app.listen(process.env.PORT || 8080);
