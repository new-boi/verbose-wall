


function readDataFromSheet() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1t-GrI2hdGaFUobDVyGCCl-zxfH5wP_2bErOdaDJXJuo',
      range: 'Sheet1', // Adjust the sheet and range as needed
    }).then((response) => {
      const values = response.result.values;
  
      if (values && values.length > 0) {
        values.forEach((row, index) => {
          const name = row[0];
          const location = row[1];
          const sentence = row[2];
          console.log(`Row ${index + 2}: Name: ${name}, Location: ${location}, Sentence: ${sentence}`);
        });
      } else {
        console.log('No data found in the specified range.');
      }
    }).catch((error) => {
      console.error('Error reading data from Google Sheets:', error);
    });
  }


  function writeToSheet(namee) {
    const spreadsheetId = '1t-GrI2hdGaFUobDVyGCCl-zxfH5wP_2bErOdaDJXJuo';
    const values = [[namee, 'New Location', 'New Sentence']];

    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1', // Get the entire sheet to find the last row
    }).then((response) => {
      const values = response.result.values || [];
      const lastRow = values.length + 1; // Calculate the next row

      gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Sheet1!A${lastRow}:C${lastRow}`, // Append to the last row
        valueInputOption: 'RAW',
        resource: { values },
      }).then(() => {
        console.log('Data added to the last row of Google Sheets.');
      }).catch((error) => {
        console.error('Error writing to Google Sheets:', error);
      });
    });

}


  function initGoogleApiClient() {
    // Initialize the Google API client with your API key and discoveryDocs
    gapi.client.init({
      apiKey: 'AIzaSyAM2PqI2i42qud73TZPP0XLfpFXk6DRueI',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {

        readDataFromSheet(); // Call the function that interacts with Google Sheets
    }).catch((error) => {
      console.error('Error initializing Google API client:', error);
    });
  }


  function initGoogleApiClientWrite(namee) {
    // Initialize the Google API client with your API key and discoveryDocs
    gapi.client.init({
      apiKey: 'AIzaSyAM2PqI2i42qud73TZPP0XLfpFXk6DRueI',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {

        writeToSheet(namee);
    }).catch((error) => {
      console.error('Error initializing Google API client:', error);
    });
  }



  gapi.load('client', initGoogleApiClient);

var qr_btn = document.getElementById("qr_btn");


var pledge = document.getElementById("pledge").value;

qr_btn.onclick=function(){
    var namee = document.getElementById("namee").value;
    // var card_container = document.getElementById("cards");

    // var newDiv = document.createElement("div");
    // newDiv.classList.add("card");

    // var pName = document.createElement("p");
    // var pLocation = document.createElement("p");
    // var pCard_content = document.createElement("p");

    // pName.textContent=namee;
    // pLocation.textContent="Gombak";
    // pCard_content.textContent="lorem";

    // pName.classList.add("card_content","name");
    // pLocation.classList.add("card_content","location");
    // pCard_content.classList.add("card_content","contents");

    // newDiv.appendChild(pName);
    // newDiv.appendChild(pLocation);
    // newDiv.appendChild(pCard_content);


    // card_container.appendChild(newDiv);


    // initGoogleApiClient(x)


    initGoogleApiClientWrite(namee);


    
}
