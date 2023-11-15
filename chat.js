// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAoSd8v9YltBJuogWoOHa_jkkcXjv8TAVg",
    authDomain: "c101-cbb16.firebaseapp.com",
    databaseURL: "https://c101-cbb16-default-rtdb.firebaseio.com",
    projectId: "c101-cbb16",
    storageBucket: "c101-cbb16.appspot.com",
    messagingSenderId: "258379681196",
    appId: "1:258379681196:web:7ef2eeb7f865118adafe09"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
