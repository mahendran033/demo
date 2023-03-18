function msg(){
    var user= document.getElementById("Username").value
    var pass= document.getElementById("password").value
    if(user=="mahijinu" &&pass=="12345")
    {
        window.open("hi.html");
    }
    else
    {
        alert("Login Failed");
    }
}
