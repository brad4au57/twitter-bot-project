const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);

const stream = T.stream('user'); 

const myUsername = require('./config').userName;   

console.log(myUsername); 

stream.on('follow', followReply);
console.log('Your twitter bot has started up!');



function followReply (eventMsg){
	var userName = eventMsg.source.screen_name;

  const {screen_name, name} = eventMsg.source;
  
  if (userName != myUsername){
  	const tyMsg = 'Hi ' + screen_name + '!' + '\n\nThanks for following me! \n\nThis message was made with a twitter bot I made using node.js';

  	const obj = {
  		screen_name,
  		text: tyMsg 
  	}
  	
	  T.post('direct_messages/new', obj);

	  console.log('Message sent!');
  }  
}
