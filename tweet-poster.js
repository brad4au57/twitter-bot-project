console.log('My twitter bot has started up!');

var Twit = require('twit');

var config = require('./config');
 
var T = new Twit(config);

var tweet = { 
	status: 'My very first tweet using #NodeJS and a twitter-bot I created! #WeekendProgramming' 
};

/*** Used to post tweets to Twitter ***/

// T.post('statuses/update', tweet, gotData);

function gotData(err, data, response) {
  console.log(data);
  console.log('My twitter bot has finished!');
};

