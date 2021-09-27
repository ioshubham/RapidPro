const { v4: uuidv4 } = require('uuid');
const cases = require("./cases.js");
const category = require('./category.js');
module.exports.createRouter = createRouter;


function createRouter() {
   router ={}
   router.type = "switch";

   var default_category_uuid = uuidv4();
   module.exports.default_category_uuid = default_category_uuid;

   router.default_category_uuid = default_category_uuid;
   router.cases = cases.createCases();
   router.categories = category.createCategories();
   router.operand = "@input.text";
   router.wait = 'createWait()';
   router.result_name= "ResultName";

   return router;
}
