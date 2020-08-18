const XLSX = require('xlsx');
const fs = require('fs');

const data = XLSX.readFile('discords.xlsx');
let discordInvitesData = JSON.stringify(data.Sheets.Sheet1);

fs.writeFile('output.json', discordInvitesData, (error) => {
  if (error) {
    console.log(error);
  }
});
