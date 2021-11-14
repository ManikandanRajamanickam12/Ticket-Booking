
window.addEventListener('load', () => {



    console.log(localStorage.getItem("name"));
    let value = localStorage.getItem("name");
    if (value == "Login") {
        location.href = "C:/Users/DELL/Desktop/Ticket booking/login.html";
    }

    document.getElementById("login").innerHTML = value;
    const prize = localStorage.getItem("Prize");
    document.getElementById("sprize").value = prize;

})



function login(e) {

    localStorage.setItem("name", "Login");
    window.location.reload();

}

