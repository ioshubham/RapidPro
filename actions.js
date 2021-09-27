const { v4: uuidv4 } = require('uuid');
var message = require("./message.js");
var messages = message.extractMessages();

module.exports.createAction = createAction;

function createAction() {
  var actions = [];

  messages.forEach((msg) => {
  var action = {};
  var tempArray = [];
  action.text = msg;
  action.type = "send_msg";
  action.uuid = uuidv4();
  tempArray.push(action);
  actions.push(tempArray);
  });

  return actions;

}
