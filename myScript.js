const CLIENT_ID = '1030257145728-29cjk1r2f3i64gdjai4jd4ij8e03sem4.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAM2PqI2i42qud73TZPP0XLfpFXk6DRueI';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';


let tokenClient;
let gapiInited = false;
let gisInited = false;


function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}



async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}


function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  maybeEnableButtons();
}


function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById('authorize_button').style.visibility = 'visible';
  }
}

async function listMajors() {
  let response;
  try {
    // Fetch first 10 files
    response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1t-GrI2hdGaFUobDVyGCCl-zxfH5wP_2bErOdaDJXJuo',
      range: 'Sheet1s',
    });
  } catch (err) {
    document.getElementById('content').innerText = err.message;
    return;
  }
  const range = response.result;
  if (!range || !range.values || range.values.length == 0) {
    document.getElementById('content').innerText = 'No values found.';
    return;
  }
  // Flatten to string to display
  const output = range.values.reduce((str, row) => `${str}${row[0]}, ${row[4]}\n`,'Name, Major:\n');
  document.getElementById('content').innerText = output;
  console.log(range);
}


listMajors();
