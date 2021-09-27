const { v4: uuidv4 } = require('uuid');
const node = require("./node.js");
module.exports.createFlow = createFlow;

function createFlow()
{
  var flows =[];
  var flow ={};
   flow.language = "eng";
   flow.name = "shubham_flow";
   flow.nodes = node.createNode();
   flow.spec_version = "13.1.0";
   flow.type = "messaging";
   flow.uuid = uuidv4();
   flow.revision = 23;
   flows.push(flow);
   return flows;
}
