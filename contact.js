window.addEventListener('load', () => {



    console.log(localStorage.getItem("name"));
    let value = localStorage.getItem("name");

    if (value == null) {
        document.getElementById("login").innerHTML = "Login";

    }
    else {

        document.getElementById("login").innerHTML = value;
    }


})



function login(e) {

    localStorage.setItem("name", "Login");
    window.location.reload();

}