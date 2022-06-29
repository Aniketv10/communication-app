var logUser = JSON.parse(localStorage.getItem('loggedInUser'));
//console.log(logUser)
 var email = logUser.email;
console.log(email);

document.getElementById("userEmail").innerHTML = email;
