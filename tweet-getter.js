console.log('My twitter bot has started up!');

var Twit = require('twit');

var config = require('./config');
 
var T = new Twit(config);

/*** Used to get tweets from Twitter ***/

var params = {
	q: '#NodeJS',
	count: 10
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var returnedTweets = data.statuses;
  for (i = 0; i < returnedTweets.length; i++){
  	console.log('(' + [i + 1] + '.) ' + returnedTweets[i].text);
  };
  console.log('My twitter bot has finished!');
};
