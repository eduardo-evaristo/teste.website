let username;
let password;

document.getElementById(`sbmData`).onclick = function() {
    username = document.getElementById(`usnm`).value;
    password = document.getElementById(`pwd`).value;
    console.log(username);
    console.log(password);
}