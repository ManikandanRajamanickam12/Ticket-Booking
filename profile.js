

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');





window.addEventListener('load', () => {
    if (sessionStorage.getItem("loginName") != null || sessionStorage.getItem("loginName") == "LOGIN")
        document.getElementById("login").innerHTML = "Logout";
})



imgDiv.addEventListener('mouseenter', function () {
    uploadBtn.style.display = "block";
});



imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});



file.addEventListener('change', function () {

    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function () {
            sessionStorage.getItem("recent-image", reader.result);
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);



    }
});

document.addEventListener("DOMContentLoaded", () => {
    const recentimgurl = sessionStorage.getItem("recent-image");
    if (recentimgurl) {
        document.querySelector("#photo").setAttribute("src", recentimgurl)
    }
});


window.addEventListener('load', () => {


    console.log(localStorage.getItem("name"));
    let value = localStorage.getItem("name");
    if (value == "Login") {
        location.href = "C:/Users/DELL/Desktop/Ticket booking/login.html";
    }

    document.getElementById("login").innerHTML = value;


    const email = sessionStorage.getItem("loginemail");
    const name = sessionStorage.getItem("loginName");
    const pwd = sessionStorage.getItem("loginpwd");

    document.getElementById("session-email").innerHTML = email;
    document.getElementById("session-pwd").innerHTML = pwd;
    document.getElementById("session-name").innerHTML = name;



})

function login(e) {

    localStorage.setItem("name", "Login");
    window.location.reload();

}





