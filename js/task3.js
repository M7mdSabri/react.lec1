function validate() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var result = document.getElementById("result");

    result.setAttribute("Class", "mt-3 mb-3 p-2 text-center bg-danger text-light");

    if (user == "" || email == "" || pass == "" || confirmpass == "") {
        result.innerHTML = "Please fill the Empty field";
        return false;
    } else if (user.length < 5 || user.length > 15) {
        result.innerHTML = ("Please Enter Name Between 5-15 Character")
        return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        result.innerHTML = ("Please Enter a Valid E-mail")
        return false;
    } else if (pass.length < 6 || pass.length > 18) {
        result.innerHTML = ('Week Pazzword')
        return false;
    } else if (confirmpass != pass) {
        result.innerHTML = ("Password not Matched يا حنفي")
        return false;
    } else
        return true;
}