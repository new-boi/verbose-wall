const { google } = require('googleapis');
const sheets = google.sheets('v4');

const auth = new google.auth.GoogleAuth({
  keyFile: 'pledge-wall-0b0598a13a50.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function iterateRows() {
    const client = await auth.getClient();
    const spreadsheetId = '1t-GrI2hdGaFUobDVyGCCl-zxfH5wP_2bErOdaDJXJuo';
    const range = 'Sheet1'; // Update the sheet name and range as needed
  
    try {
      const response = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId,
        range,
      });
  
      const rows = response.data.values;
  
      if (rows.length) {
        rows.forEach((row, index) => {
          // Assuming columns A, B, and C correspond to name, location, and sentence
          const name = row[0];
          const location = row[1];
          const sentence = row[2];
  
          console.log(`Row ${index + 2}: Name: ${name}, Location: ${location}, Sentence: ${sentence}`);
        });
      } else {
        console.log('No data found in the specified range.');
      }
    } catch (err) {
      console.error('Error reading data from Google Sheets:', err);
    }
  }
  
  iterateRows();


var qr_btn = document.getElementById("qr_btn");


var pledge = document.getElementById("pledge").value;

qr_btn.onclick=function(){
    var namee = document.getElementById("namee").value;
    // alert(namee)
    // console.log(namee)
    var card_container = document.getElementById("cards");

    var newDiv = document.createElement("div");
    newDiv.classList.add("card");

    var pName = document.createElement("p");
    var pLocation = document.createElement("p");
    var pCard_content = document.createElement("p");

    pName.textContent=namee;
    pLocation.textContent="Gombak";
    pCard_content.textContent="lorem";

    pName.classList.add("card_content","name");
    pLocation.classList.add("card_content","location");
    pCard_content.classList.add("card_content","contents");

    newDiv.appendChild(pName);
    newDiv.appendChild(pLocation);
    newDiv.appendChild(pCard_content);


    card_container.appendChild(newDiv);

    
}