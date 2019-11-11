// 1. Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByAsZSDLyQg7tjm7igrC11URk2C8YnofE",
  authDomain: "grand-practice-252422.firebaseapp.com",
  databaseURL: "https://grand-practice-252422.firebaseio.com",
  projectId: "grand-practice-252422",
  storageBucket: "grand-practice-252422.appspot.com",
  messagingSenderId: "440644338208",
  appId: "1:440644338208:web:48cd83a66a3298c3a77245"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Button to submit train schedule
$('#btn-submit').on('click', function (event) {
  event.preventDefault();

  var trainName = $('#train-name').val().trim();
  var trainDest = $('#train-destination').val().trim();
  var trainTime = moment($('#train-time').val().trim(), '01:15:30 AM').format('LTS');
  var trainFreq = $('#train-frequency').val().trim();

  // Creates local object for holding train schedule data
  var newTrain = {
    tName: trainName,
    tDest: trainDest,
    tTime: trainTime,
    tFreq: trainFreq
  };

  // Update train schedule date to database
  database.ref().push(newTrain);

  // Console log everything to console
  console.log(newTrain.tName);
  console.log(newTrain.tDest);
  console.log(newTrain.tTime);
  console.log(newTrain.tFreq);

  alert('New train schedule successfully added');
  // Clear all the text fields
  $('#train-name').val('');
  $('#train-destination').val('');
  $('#train-time').val('');
  $('#train-frequency').val('');

});

/*
// Create Firebase event for adding train schedule to database and table in HTML
database.ref().on('child_added'), function (childSnapshot) {
  console.log(childSnapshot.val());

  // Store data to a variable.
  var trainName = childSnapshot.val().tName;
  var trainDest = childSnapshot.val().tDest;
  var trainTime = childSnapshot.val().tTime;
  var trainFreq = childSnapshot.val().tFreq;

  // Console.log schedule info
  console.log(trainName);
  console.log(trainDest);
  console.log(trainTime);
  console.log(trainFreq);

  // Something the moment time setup

  // Create the new row for new train schedule data
  var newRow = $('<tr>').append(
    $('<td>').text(trainName),
    $('<td>').text(trainDest),
    $('<td>').text(trainTime),
    $('<td>').text(trainFreq)
  );

  // Appand the new row to the table
  $('#train-schedule-table > tbody').append(newRow);

});

*/