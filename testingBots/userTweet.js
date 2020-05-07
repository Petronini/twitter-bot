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

//
// I only want to see tweets about my favorite fruits
//
 
// same result as doing { track: 'bananas,oranges,strawberries' }
// var stream = T.stream('statuses/filter', { track: [ 'leñes', 'cojones' ] })
// var stream = T.stream('followers/ids', {count: 5})
 
// stream.on('follow', t => console.log(t)  )
const path = 'users/show'; 
const params = {screen_name: 'Neo_end' }; 
T.get( path, params, (err, data, response) => {
    // console.log(data.users[1].name)
    //data.users.forEach( element => console.log(element.name));
    console.log(data);
    
  } );

