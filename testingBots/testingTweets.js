const Twit = require("twit");   // módulos necesarios
var config = require('../config.js');

//configuración API's Twitter
var T = new Twit(config);
// Barcelona 41.3897, 2.1568
const loc = '41.3897,2.1568,20km';
T.get('search/tweets', { 
  q: '#covid19 OR #quedateencasa since:7 days', 
  geocode: loc, 
  language: 'cat', 
  count: 100 }, gotData);

function gotData(err, data) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(
      tweets[i].created_at,
      tweets[i].user.screen_name,
      tweets[i].user.location);
  }
}
