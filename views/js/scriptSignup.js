function loadFunction() {
    var fieldUsername = document.getElementById("usernameSignup");
    var fieldEmail = document.getElementById("emailSignup");
    var fieldPwd = document.getElementById("pwdSignup");
    var fieldPwd2= document.getElementById("pwd2Signup");

    var loadBar = document.getElementById("loadBar");

    if((fieldUsername.value != "" && fieldEmail.value == "" && fieldPwd.value == "" && fieldPwd2.value == "") 
    || (fieldUsername.value == "" && fieldEmail.value != "" && fieldPwd.value == "" && fieldPwd2.value == "") 
    || (fieldUsername.value == "" && fieldEmail.value == "" && fieldPwd.value != "" && fieldPwd2.value == "")
    || (fieldUsername.value == "" && fieldEmail.value == "" && fieldPwd.value == "" && fieldPwd2.value != "")){
        loadBar.style.width = "25%";
        loadBar.innerHTML = "25%";
    }
    if((fieldUsername.value != "" && fieldEmail.value != "" && fieldPwd.value == "" && fieldPwd2.value == "") 
    || (fieldUsername.value == "" && fieldEmail.value != "" && fieldPwd.value != "" && fieldPwd2.value == "") 
    || (fieldUsername.value == "" && fieldEmail.value == "" && fieldPwd.value != "" && fieldPwd2.value == "")
    || (fieldUsername.value == "" && fieldEmail.value == "" && fieldPwd.value != "" && fieldPwd2.value != "")
    || (fieldUsername.value != "" && fieldEmail.value == "" && fieldPwd.value == "" && fieldPwd2.value != "")
    || (fieldUsername.value != "" && fieldEmail.value == "" && fieldPwd.value != "" && fieldPwd2.value == "")){
        loadBar.style.width = "50%";
        loadBar.innerHTML = "50%";
    }
    if((fieldUsername.value != "" && fieldEmail.value != "" && fieldPwd.value != "" && fieldPwd2.value == "") 
    || (fieldUsername.value == "" && fieldEmail.value != "" && fieldPwd.value != "" && fieldPwd2.value != "") 
    || (fieldUsername.value != "" && fieldEmail.value == "" && fieldPwd.value != "" && fieldPwd2.value != "")
    || (fieldUsername.value != "" && fieldEmail.value != "" && fieldPwd.value == "" && fieldPwd2.value != "")){
        loadBar.style.width = "75%";
        loadBar.innerHTML = "75%";
    }
    if(fieldUsername.value != "" && fieldEmail.value != "" && fieldPwd.value != "" && fieldPwd2.value != ""){
        loadBar.style.width = "100%";
        loadBar.innerHTML = "100%";
    }
    if(fieldUsername.value == "" && fieldEmail.value == "" && fieldPwd.value == "" && fieldPwd2.value == ""){
        loadBar.style.width = "0%";
        loadBar.innerHTML = "0%";
    }
}