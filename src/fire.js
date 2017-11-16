import * as firebase from 'firebase'
var config = {
	apiKey: "AIzaSyAAzMPlup1W0JGumYAuVQdIelpNuDl58C0",
	authDomain: "sssm-787bd.firebaseapp.com",
	databaseURL: "https://sssm-787bd.firebaseio.com",
	projectId: "sssm-787bd",
    storageBucket: "",
    messagingSenderId: "873532560530"
};
var fire = firebase.initializeApp(config)
export default fire;