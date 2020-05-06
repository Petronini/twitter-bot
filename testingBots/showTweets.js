const Twit = require('twit');
const config = require('../config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////

// config stream
const sanfran = [ '-122.75', '36.8', '-121.75', '37.8' ]
let endpoint = 'statuses/filter';
let params   =  {
  track: [
    '#EnsEnSortirem',
    // '#QuedateEnCasa filter:media', 
    '#ElIntermedio', 
    '#QuédateEnCasa'
  ],
  location: sanfran,
  language: ''
}; 
// - config stream

const stream = T.stream( endpoint, params );

stream.on('tweet', showIt);

function showIt(tweetEvent) {
  console.log(tweetEvent.user.created_at,
    'screenName: ' + tweetEvent.user.screen_name,
    '| name: '+ tweetEvent.user.name,
    '| Location: ' + tweetEvent.user.location
    )
}