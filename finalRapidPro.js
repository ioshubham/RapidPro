const fs = require("fs");
let flow = require("./Flow.js");

var template ={};

function makeJson() {
template.version ="13";
template.flows = flow.createFlow();
}

makeJson();
console.log(template);
//console.log(template.flows[0].nodes[0]);

let jsonString = JSON.stringify(template);

//jsonString = jsonString+"/0";
//console.log(jsonString);

fs.writeFile('importFile.json', jsonString,'utf8',function(err) {
  if(err){
    console.log(err);
  }console.log("ok")
});
