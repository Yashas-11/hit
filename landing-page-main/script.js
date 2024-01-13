const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
const skipButton = document.getElementById('skipButton');



function onSignIn(googleUser) {
	const profile = googleUser.getBasicProfile();
	alert('Logged in as: ' + profile.getName() + ' (' + profile.getEmail() + ')');
	// You can perform additional actions here, such as sending the user data to your server
}

function signOut() {
	const auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		alert('User signed out.');
	});
}

document.getElementById('google-signin-button').addEventListener('click', function() {
	gapi.auth2.getAuthInstance().signIn().then(onSignIn);
});

function handleClientLoad() {
	gapi.load('auth2', function() {
		gapi.auth2.init({
			client_id: '811253743653-ve3b64n9bd48tboqkv27g0bpd41dsopn.apps.googleusercontent.com', // Replace with your actual Google API client ID
		}).then(function() {
			const auth2 = gapi.auth2.getAuthInstance();
			// Attach the sign-in handler to the button
			auth2.attachClickHandler('google-signin-button', {}, onSignIn, function(error) {
				console.error('Google Sign-In failed:', error);
			});
		});
	});
}


