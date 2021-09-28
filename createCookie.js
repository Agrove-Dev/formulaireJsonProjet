//DOM LIAISON
let idAcc = document.getElementById("login");
let pwdAcc = document.getElementById("password");
//LOG AGROVE ACCOUNT LOGIN
let adminId = "AgroveDev";
let adminPwd = "Agr0v3fra";

function createCookie(){
  
    today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000*24*15);
   
  
    document.cookie = "name="+idAcc.value+";path=/" + ";expires="+expire.toUTCString();
    document.cookie = "password="+encodeURI(pwdAcc.value)+";path=/" + ";expires="+expire.toUTCString();
    //can only write one entity at a time (name, pass)
  }

  //event handler for page load - runs on every refresh
window.onload = function(){
  
    //for init an account
    var uname = 'AgroveDev';
    var pass = 'Agr0v3fra';
  
    document.getElementById('login').value = uname;
    document.getElementById('password').value = pass;
  
  }