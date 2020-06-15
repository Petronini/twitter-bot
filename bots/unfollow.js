// hace un unfollow a toda la gente que
// no te sigue
const Twit = require("twit");
const config = require("../config.js");
// API's Twitter config
let T = new Twit(config);
/////////////////////////
let accountTwitter = "escarabajus";
function unfollow(seguidorBorrar) {
  const path = "friendships/show";
  const params = {
    source_screen_name: accountTwitter,
    target_screen_name: seguidorBorrar,
  };
  T.get(path, params, (err, data, response) => {
    console.log(
      "source: " + params.source_screen_name,
      data.relationship.source.following,
      "target: " + params.target_screen_name,
      data.relationship.target.following
    );
    unfollowing(data.relationship.target.following, seguidorBorrar);
  });
}
let limit = 0;
function unfollowing(target, seguidorBorrar) {  
  if (target == false && limit <= 2) {
    const path = "friendships/destroy";
    const params = { screen_name: seguidorBorrar };
    T.delete(path, params, (err, data, response) => {
      // console.log(data.users[1].name)
      //data.users.forEach( element => console.log(element.name));
      console.log(data.screen_name, "✔️ unfollowed");
    });
    limit++;
  }
}

function friendsList() {
  //Returns a cursored collection of user objects for users following the specified user.
  // Lista de gente que sigo.
  // console.log(data.users[1].name)
  //data.users.forEach( element => console.log(element.name));
  const path = "friends/list";
  const params = { screen_name: accountTwitter, count: 150 };
  T.get(path, params, (err, data, response) => {
    for (let i = 0; i < data.users.length; i++) {
      const element = data.users[i];
      unfollow(element.screen_name);
      console.log(i, element.screen_name);
    }
  });
}

friendsList();
