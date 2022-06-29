showMessages();

var logUser = JSON.parse(localStorage.getItem('loggedInUser'));
var logoutBtn = document.getElementById('logoutBtn');
var sendChat = document.getElementById('send');
var msg = document.getElementById('chatinput');
var ul = document.querySelector('#list');

var fullName = logUser.fullName;


// If user adds a msg then add it to the localStorage

sendChat.addEventListener('click', function (e) {
  e.preventDefault();
  var curr = new Date();

  var date = curr.getDate();
  var month = curr.getMonth()+1;  //0-11
  var year = curr.getFullYear();

  var hour = curr.getHours();
  var min = curr.getMinutes();
  var sec = curr.getSeconds();

  var date = `[${date}-${month}-${year} ${hour}:${min}:${sec}]`;

  var chatsObj = JSON.parse(localStorage.getItem("chats")) ? JSON.parse(localStorage.getItem("chats")) : [];

  var myObj = {
    date: date,
    name: fullName,
    message: msg.value,
  };

  chatsObj.push(myObj);

  //storing the key chats to localstorage
  localStorage.setItem('chats', JSON.stringify(chatsObj));
  //   console.log(chatsObj);
  msg.value = '';
  showMessages();
});

// Function to display messages from localStorage

function showMessages() {
  var chatsObj = JSON.parse(localStorage.getItem("chats")) ? JSON.parse(localStorage.getItem("chats")) : [];

  var html = '';
  chatsObj.forEach(function (element) {
    html += `<li>${element.date} ${element.name} : ${element.message}</li>`;
  });
  
  var chatsMsg = document.getElementById('list');

  if (chatsObj.length != 0) 
  {
    chatsMsg.innerHTML = html;
  } 
  else
  {
    chatsMsg.innerHTML = ``;
  }
}

// var userData = JSON.parse(localStorage.getItem("registerUsers"));

// var searchName = userData.findIndex((user) => user.email == logmail);
// var loginName = userData[searchName].name;

// document.getElementById("Name").innerHTML = loginName

logoutBtn.addEventListener('click', function () {
  localStorage.removeItem('loggedInUser');
});

// function refresh(){
//   document.getElementById('chat2').innerHTML = location. reload();
//   }

