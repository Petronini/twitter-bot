const Twit = require('twit');
const config = require('../config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////
// id: 3307541050,
// id_str: '3307541050',
// screen_name: 'Neo_End',

// created_at: 'Thu May 07 15:10:22 +0000 2020',
// id: 1258413872282767400,
// id_str: '1258413872282767361',
// text: '#BillyElNiño un cabrón menos en el mundo.',

const path = 'statuses/retweeters/ids';
const params = { id: '1258413872282767361', stringify_ids: false };  
T.get( path, params, (err, data, response) => {
  // console.log(data.users[1].name)
  // data.ids.forEach( element => console.log(element.ids) );
  console.log(data);
  

} ); 