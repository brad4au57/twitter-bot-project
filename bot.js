/*** 
 This is the base code required for all future twitter bot iterations.
 This module pulls in the npm Twit package along with credentials saved in a private configuration file. 
 Once connected to a specific twitter account, this module can be used to get, post, or stream twitter events.     
***/
console.log('My twitter bot has started up!');

var Twit = require('twit');

var config = require('./config');
 
var T = new Twit(config);
