function LoginData() {

    var logmail = document.getElementById('input1').value;
    var logpwd = document.getElementById('input2').value;

    //---------- Validation of Email -----------

    if (logmail == "") {
        document.getElementById('loginEmail').innerHTML = " * Please enter your email";
        return false;
    }


    //---------- Validation of Password -----------

    if (logpwd == "") {
        document.getElementById('loginPass').innerHTML = " * Please enter password";
        return false;
    }

    //  var p = /^(?=.*[0-9])(?=.*[a-z]).{6}$/;
    if (logpwd.length <= 3 || logpwd.length >= 8) {
        document.getElementById('loginPass').innerHTML = " * Length must be upto 8";
        return false;
    }

    // --------login, check whether username and password exist inside Localstorage or not--------

    var users = JSON.parse(localStorage.getItem("registerUsers")) ? JSON.parse(localStorage.getItem("registerUsers")) : [];
    // console.log(users);

    if (users.some((user) => user.email == logmail && user.password == logpwd)) {
        window.alert('Login successful')
    }
    else {
        window.alert('Email And Password Not Matched !!')
        return false;
    }
    
    var userData = JSON.parse(localStorage.getItem("registerUsers"));

    var searchName = userData.findIndex((user) => user.email == logmail);
    var loginName = userData[searchName].name;
    console.log(loginName);
    var loginEmail = userData[searchName].email;

    //---- for storing loginUser data into LocalStorage-----

    let saveUser = {
        fullName: loginName,
        email: loginEmail
    }
    let userString = JSON.stringify(saveUser);
    localStorage.setItem('loggedInUser', userString);
    window.location.href = '/pages/login-success.html';    

}


