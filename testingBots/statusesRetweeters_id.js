const Twit = require('twit');
const config = require('../config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////
// id: 3307541050,
// id_str: '3307541050',
// screen_name: 'Neo_End',

const path = 'statuses/retweeters/id';
const params = { id: 3307541050 };  
T.get( path, params, (err, data, response) => {
  // console.log(data.users[1].name)
  // data.ids.forEach( element => console.log(element.ids) );
  console.log(data);
  

} ); 