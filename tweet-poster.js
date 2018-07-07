console.log('My twitter bot has started up!');

var Twit = require('twit');
var config = require('./config');
 
var T = new Twit(config);

/*** Used to post tweets to Twitter ***/

var tweet = { 
	status: 'My very first tweet using #NodeJS and a twitter-bot I created thanks to @thecodingtrain ! #WeekendProgramming' 
};

T.post('statuses/update', tweet, gotData);

function gotData(err, data, response) {
	if (err){
		console.log("Something went wrong!")
	} else {
  		console.log('Your tweet has posted!');
  		console.log('My twitter bot has finished!');
	}
};

