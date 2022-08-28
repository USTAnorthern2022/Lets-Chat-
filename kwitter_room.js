
var firebaseConfig = {
      apiKey: "AIzaSyBbbT0HgW32OKMDb7uoL8lQl5CLV_T17ow",
      authDomain: "kwitter-dd817.firebaseapp.com",
      projectId: "kwitter-dd817",
      storageBucket: "kwitter-dd817.appspot.com",
      messagingSenderId: "992715878430",
      appId: "1:992715878430:web:616c269b55501107b1fe0f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
