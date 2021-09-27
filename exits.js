const { v4: uuidv4 } = require('uuid');
var message = require("./message.js");
var messages = message.extractMessages();

module.exports.createExit = createExit;

var destination_uuids =[];
function createExit() {
  var exits = [];

  for(var i=0 ; i<messages.length;i++) {
    var exit = {};
    var tempArray = [];
    if(i == messages.length-1){
      var destination_uuid = null;
      destination_uuids.push(destination_uuid);
      exit.destination_uuid = destination_uuid;
    }
    else {
      var destination_uuid = uuidv4();
      destination_uuids.push(destination_uuid);
      exit.destination_uuid = destination_uuid;
    }

    exit.uuid = uuidv4();
    tempArray.push(exit);
    exits.push(tempArray);
  }
  module.exports.destination_uuids = destination_uuids;
  return exits;

}
