require('dotenv').config();
const Twit = require('twit');
const config = require('../config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////

// let stream = T.stream('user'); // user stream

// console.log('listening...'); 
// stream.on('follow', followed);

// function followed(event) {
//   console.log('I was followed by' + event.source.name + ' | ' + event.source.screen_name );
  
// }

//Returns a cursored collection of user objects for users following the specified user.
// Lista de gente que te sigue.

const path = 'followers/list'; 
const params = {screen_name: 'escarabajus', count: 100};  
T.get( path, params, (err, data, response) => {
    // console.log(data.users[1].name)
    data.users.forEach( (element, index) => console.log(index, element.id_str ,element.screen_name) );
    
  } );