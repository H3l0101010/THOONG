var firebaseConfig = {
      apiKey: "AIzaSyDBn-GxxPZjMmGpYj0TkfZT1ci9erMEMBE",
      authDomain: "abundaalakaka.firebaseapp.com",
      databaseURL: "https://abundaalakaka-default-rtdb.firebaseio.com",
      projectId: "abundaalakaka",
      storageBucket: "abundaalakaka.appspot.com",
      messagingSenderId: "818557610202",
      appId: "1:818557610202:web:2074be505d251d2ff11de3",
      measurementId: "G-TPKH03T1CW"
    };
    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");
    function send() { msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData(); } 

