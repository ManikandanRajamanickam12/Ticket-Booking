window.addEventListener('load', () => {



    console.log(localStorage.getItem("name"));
    let value = localStorage.getItem("name");
    if (value == null) {
        window.location.reload();
        localStorage.setItem("name", "Login");
        // document.getElementById("login").innerHTML = "Login";

    }

    document.getElementById("login").innerHTML = value;


})



function login(e) {

    localStorage.setItem("name", "Login");


}