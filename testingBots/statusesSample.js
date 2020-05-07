const Twit = require('twit');
const config = require('../config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////


const stream = T.stream('user', { stringify_friend_ids: true })
stream.on('user_update', function (tweet) {
  console.log(tweet)
  console.log('________');
  


// // const stream =  T.stream('user', { stringify_friend_ids: true });
// const path = 'followers/list'; 
// const params = {screen_name: 'Neo_end'};  
// const path = 'statuses/sample';

// const params = undefined;
// const stream =  T.stream( path, params );

// stream.on('tweet', t => console.log(t)  )


// T.get( path, params, (err, data, response) => {
//     // console.log(data.users[1].name)
//     data.users.forEach( element => console.log(element.id_str ,element.screen_name));
    
//   } );