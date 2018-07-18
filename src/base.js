import Rebase from "re-base";
import firebase from "firebase";

// database

const config = {
  apiKey: "AIzaSyA67AlYhLvxXoriIRvj_UQP089TKJV8DnU",
  authDomain: "to-do-list-ea720.firebaseapp.com",
  databaseURL: "https://to-do-list-ea720.firebaseio.com"
};

const fireBaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(fireBaseApp.database());
console.log(base);

// authentication

const auth = fireBaseApp.auth();

// exports

export { fireBaseApp, auth };
export default base;
