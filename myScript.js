// gapi.client.init({
//     apiKey: '0b0598a13a504cf8c531c0ef14fd426631fcd8c3',
//     discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//   }).then(() => {
//     function readDataFromSheet() {
//         gapi.client.sheets.spreadsheets.values.get({
//           spreadsheetId: '1t-GrI2hdGaFUobDVyGCCl-zxfH5wP_2bErOdaDJXJuo',
//           range: 'Sheet1', // Adjust the sheet and range as needed
//         }).then((response) => {
//           const values = response.result.values;
      
//           if (values && values.length > 0) {
//             values.forEach((row, index) => {
//               const name = row[0];
//               const location = row[1];
//               const sentence = row[2];
//               console.log(`Row ${index + 2}: Name: ${name}, Location: ${location}, Sentence: ${sentence}`);
//             });
//           } else {
//             console.log('No data found in the specified range.');
//           }
//         }).catch((error) => {
//           console.error('Error reading data from Google Sheets:', error);
//         });
//       }
//   }).catch((error) => {
//     console.error('Error initializing Google API client:', error);
//   });



  function initGoogleApiClient() {
    // Initialize the Google API client with your API key and discoveryDocs
    gapi.client.init({
      apiKey: '0b0598a13a504cf8c531c0ef14fd426631fcd8c3',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {
      // Client is initialized and ready to make API calls
      readDataFromSheet(); // Call the function that interacts with Google Sheets
    }).catch((error) => {
      console.error('Error initializing Google API client:', error);
    });
  }


  gapi.load('client', initGoogleApiClient);

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
