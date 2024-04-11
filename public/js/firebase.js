let firebaseConfig = {
    apiKey: "AIzaSyBcKa49JFhUJIAa0U0D9FztTFz6n6-EQns",
    authDomain: "blogging-website-27570.firebaseapp.com",
    projectId: "blogging-website-27570",
    storageBucket: "blogging-website-27570.appspot.com",
    messagingSenderId: "848126249475",
    appId: "1:848126249475:web:2f0a480494b11337dedc36"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();