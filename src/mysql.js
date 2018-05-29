var db = require('mysql');

var settings = {
  "host": "localhost",
  "database": "work",
  "user": "root",
  "password": "password"
};

var connection = db.createConnection(settings);
  connection.query("select count(*) from users;", function(err, result) {
  if (err) {
    // 接続失敗
    return;
  }

  console.log(result);  // [ { 'count(*)': 8 } ]

  connection.end(function() {
    // 接続終了
  });
});
