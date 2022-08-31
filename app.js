// パッケージ読み込み
const express = require('express');
const { Client } = require('pg');
const app = express();
const Log = require('./utils/Log');
require('dotenv').config();
//

const log = new Log();

var client = new Client({
  user: 'demoapi_sql_user',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432
});

var db = () => {
  client.connect()
  client.query('SELECT NOW()', (err, res) => {
    var reString = JSON.stringify(res);
    log.log('[Application] deployed at ' + reString.rows);
    client.end;
  })
}

db();

app.get('/', (req, res) => {
  log.log('[Application] from '  + req.ip + ' to /');
  res.json({'name': 'taro'});
});

// 404ページ表示するやつ
app.use(function(req, res, next) {
  log.error('[Application] ' + req.ip + ' is accessed to unknown page');
  res.status(404);
  res.json({'error': 'page not found'});
})

app.listen(process.env.PORT || 8080, function() {
  log.log('[Application] App listening at port ' + process.env.PORT || 8080);
});
