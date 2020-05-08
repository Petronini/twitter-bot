const Twit = require("twit");
const config = require("./config.js");
// API's Twitter config
let T = new Twit(config);
/////////////////////////

function checkingFriendship(seguidorBorrar, index) {
  let seguidor_a_borrar = seguidorBorrar;

  const path = "friendships/show";
  const params = {
    source_screen_name: "Neo_end",
    target_screen_name: seguidor_a_borrar,
  };

  T.get(path, params, (err, data, response) => {
     console.log(
      index,
      "source: " + params.source_screen_name,
      data.relationship.source.following,
      "target: " + params.target_screen_name,
      data.relationship.target.following
    );

    unFollow(data.relationship.target.following, seguidor_a_borrar);
  });
}

function unFollow(checkoutTarget, seguidor_a_borrar) {
  if (checkoutTarget = false) {
    const path = "friendships/destroy";
    const params = { screen_name: seguidor_a_borrar };
    T.delete(path, params, (err, data, response) => {
      // console.log(data.users[1].name)
      //data.users.forEach( element => console.log(element.name));
      console.log(data.screen_name, "unfollowed");
    });
  }
}

function friendsList() {
  //Returns a cursored collection of user objects for users following the specified user.
  // Lista de gente que sigo.
  const path = "friends/list";
  const params = { screen_name: "Neo_end", count: 100 };
  T.get(path, params, (err, data, response) => {
    data.users.forEach((element, index) =>
      checkingFriendship(element.screen_name, index)
    );
  });
}

friendsList();
