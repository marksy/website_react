import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAOr6J0LSHIyMTw_NFqJT6OPTbfj1gmJEY',
  authDomain: 'marksy-website-react.firebaseapp.com',
  databaseURL: 'https://marksy-website-react.firebaseio.com'
});
const base = Rebase.createClass(app.database());

export default base
