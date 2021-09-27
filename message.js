const xlsx = require('xlsx');

module.exports.extractMessages = extractMessages;
function extractMessages() {
const workbook = xlsx.readFile('excelSheet031.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const messages = [];

for (let z in worksheet) {
  if(z.toString()[0] === 'C'){
    messages.push(worksheet[z].v);
  }
}
return messages;
}
