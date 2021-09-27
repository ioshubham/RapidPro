const { v4: uuidv4 } = require('uuid');
var message = require('./message.js');
var action = require('./actions.js');
var router = require('./router.js');
var exit = require('./exits.js');


module.exports.createNode = createNode;

var messages = message.extractMessages();

function createNode() {

  var nodes = [];
  var actions = action.createAction();
  var exits = exit.createExit();

  for(var i=0 ;i <messages.length;i++){
    var node = {};
    if(i == 0) {
      node.uuid = uuidv4();
    }
    else{
      node.uuid = exit.destination_uuids[i-1];
    }
    node.actions = actions[i];
    node.exits = exits[i];
    //node.uuid = uuidv4();
    nodes.push(node);
  }


  //console.log(nodes);
  return nodes;
}
