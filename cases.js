const {v4: uuidv4} = require('uuid');
var arr = ["a","b","c"]; // demo array
var categoryUUID = [];
module.exports.createCases = createCases;

function createCases() {
  var cases =[];
  for(var i=0 ;i<arr.length;i++) {
  var  option = {};
  option.arguments = [arr[i]];
  option.type = "has_any_word";
  option.uuid = uuidv4();
  var category_uuid = uuidv4();
  categoryUUID.push(category_uuid);
  option.category_uuid = category_uuid;
  cases.push(option);
  }
  module.exports.categoryUUID = categoryUUID;
  return cases;
}
