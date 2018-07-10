const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
const stream = T.stream('user'); 

//Gets my imbedded user name from config file to compare in reply function
const myUsername = require('./config').userName;   

//Turns on the stream to see when people follow me
stream.on('follow', followReply);
console.log('Your twitter bot has started up!');

//This is the function that sends the reply message
function followReply (eventMsg){
	var userName = eventMsg.source.screen_name; //Grabs the follower's username
  const {screen_name, name} = eventMsg.source;
  
  if (userName != myUsername){
  	const tyMsg = 'Hi ' + screen_name + '!' + '\n\nThanks for following me! \n\nThis message was generated with a twitter bot I made using node.js! If you\'d like to see how I did it, then follow this GitHub link! https://github.com/brad4au57/twitter-bot-project';

  	const obj = {
  		screen_name,
  		text: tyMsg 
  	}
  	
	  T.post('direct_messages/new', obj);

	  console.log('Message sent!');
  }  
}
