const {v4: uuidv4} = require('uuid');
const _ = require('lodash');
const router = require('./router.js');
const cases = require('./cases.js');
var arr = ["a","b","c"]; // demo array

module.exports.createCategories = createCategories;

function createCategories() {
  var categories = [];

  for(var i=0;i<arr.length;i++) {
  var category ={};
  category.uuid = cases.categoryUUID[i];
  category.name = _.capitalize(arr[i]);
  var exit_uuid = uuidv4();
  category.exit_uuid = exit_uuid;
  categories.push(category);
  }

  var other ={};
  other.uuid = router.default_category_uuid;
  other.name = 'Other';
  var otherExit = uuidv4();
  other.exit_uuid = otherExit;
  categories.push(other);

  return categories;
}
