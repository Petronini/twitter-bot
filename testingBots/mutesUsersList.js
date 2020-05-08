const Twit = require('twit');
const config = require('../config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////
// id: 3307541050,
// id_str: '3307541050',
// screen_name: 'Neo_End',

const path = 'mutes/users/list';
// const params = {stringify_ids: true }

T.get( path,  (err, data, response) => {
  // console.log(data.users[1].name)
  //data.users.forEach( element => console.log(element.name));
  console.log( data );
  
} );  