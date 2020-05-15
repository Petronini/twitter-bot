// hace  un unReTweet de tu lista de reTweets
const Twit = require("twit");
const config = require("../config.js");
// API's Twitter config
let T = new Twit(config);
/////////////////////////
getStarting();

function getStarting() {
  const path = "statuses/user_timeline";
  const params = { count: 15 };
  T.get(path, params, (err, data, response) => {
    // console.log(data);
    let users = data.map((el) => el.id_str);
    console.log(users);
    unreTweet(users);

  });
}

// let numbers = [1, 5, 10, 15];
// let doubles = numbers.map( (x) =>  console.log(x * 2));

// función que deshace un reTweet (RT)
// function unRT(users) {
//   users.forEach((el) => {
//     T.post("statuses/unretweet/:id", { id: el }, (err, data, response) => {
//       console.log("✔️  unRT ✪", el);
//     });
//   });
// }

function unreTweet(users) {
  let count = 0;
  let start = setInterval(() => {
    if (count < users.length) {
      T.post("statuses/unretweet/:id", { id: users[count] }, (err, data, response) => console.log("✔️  unRT ✪", users[count]));
      count++;
    } else {clearInterval(start); getStarting();}
    
  }, timeRandom());
  
}

let timeRandom = () => Math.floor(Math.random() * 100 * 1000);
