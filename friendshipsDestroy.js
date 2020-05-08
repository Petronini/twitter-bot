const Twit = require("twit");
const config = require("./config.js");
// API's Twitter config
let T = new Twit(config);
/////////////////////////


function unFollow(seguidorBorrar) {
  let seguidor_a_borrar = seguidorBorrar;

  const path = "friendships/show";
  const params = {
    source_screen_name: "Neo_end",
    target_screen_name: seguidor_a_borrar
  };

  T.get(path, params, (err, data, response) => {
    // console.log(data.users[1].name)
    //data.users.forEach( element => console.log(element.name));
    console.log(
      "source: " + params.source_screen_name,
      data.relationship.source.following,
      "target: " + params.target_screen_name,
      data.relationship.target.following
    );

    doVerificar(data.relationship.source.following, seguidor_a_borrar);
  });
}

function doVerificar(verificandoFuente, seguidor_a_borrar) {
  if (verificandoFuente) {
    const path = "friendships/destroy";
    const params = { screen_name: seguidor_a_borrar };
    T.delete(path, params, (err, data, response) => {
      // console.log(data.users[1].name)
      //data.users.forEach( element => console.log(element.name));
      console.log(data.screen_name, "unfollowed");
    });
  }
}


const path = 'followers/list'; 
const params = {screen_name: 'Neo_end', count: 100};  
T.get( path, params, (err, data, response) => {
    // console.log(data.users[1].name)
    // data.users.forEach( (element, index) => console.log(index, element.id_str ,element.screen_name));
    data.users.forEach( (element) => unFollow(element.screen_name) );
  } );


// const path = 'friendships/destroy';
// const params1 = { screen_name: 'ChuyValdesP' }
// T.delete( path, params1, (err, data, response) => {
//   // console.log(data.users[1].name)
//   //data.users.forEach( element => console.log(element.name));
//   console.log( data );

// } );

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
