var express = require('express');
var router = express.Router();
var request = require('request');
var appConfig = require('./app.config');

/* app服务 */
try {
  router.all('/*', function(req, res, next) {
    var method = req.method.toUpperCase();
    var proxyUrl = appConfig['app-center'].api;
    var reqUrl = req.baseUrl.replace('/app-center/','');
    var options = {
          headers: {"Connection": "close"},
          url: proxyUrl + reqUrl,
          method: method,
          json: true,
          body: req.body
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
          res.json(data)
        }else{
        	res.json(error)
        }
    }
    request(options, callback);
  });
} catch (e) {
    console.log(appConfig['app-center'].title + '接口出错！')
}

module.exports = router;
