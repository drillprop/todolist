import Rebase from "re-base";
import firebase from "firebase";
import config from "./keys";
// database

const fireBaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(fireBaseApp.database());

// authentication

// exports

export { fireBaseApp };
export default base;
