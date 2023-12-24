function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            alert('Sign up successful!');
        })
        .catch((error) => {
            // Handle errors
            alert(`Error: ${error.message}`);
        });
}
