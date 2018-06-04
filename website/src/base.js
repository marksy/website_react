import Rebase from 're-base';
import firebase from 'firebase';
import config from './config.js';

const app = firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
});
const base = Rebase.createClass(app.database());

export default base;
