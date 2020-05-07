const Twit = require('twit');
const config = require('../config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////
const Spain = ['35.693', '-9.47', '43.66',' 3.582'];
const Spain2 = [ '37.003', '3.604', '43.373', '-8.569' ]
const Barcelona = ['41.046', '0.637',  '42.066', '3.505'];
const sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];
const bcn = '41.3897,2.1568,20km';
const Bcn = '41.046,0.637,42.066,3.505';

var stream = T.stream('statuses/filter', { locations: Bcn })

stream.on('tweet', function (tweet) {
  console.log(tweet.place.country)
})