import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA67AlYhLvxXoriIRvj_UQP089TKJV8DnU",
  authDomain: "to-do-list-ea720.firebaseapp.com",
  databaseURL: "https://to-do-list-ea720.firebaseio.com"
};

const fireBaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(fireBaseApp.database());
console.log(base);

export { fireBaseApp };
export default base;
