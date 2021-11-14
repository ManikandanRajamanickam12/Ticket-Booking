const signUp = e => {
    let fname = document.getElementById('fname').value,
        email = document.getElementById('email1').value,
        pwd = document.getElementById('pwd1').value;


    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase()
        );

    if (!exist) {


        formData.push({ fname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
        //console.log(fname);
        window.location.reload();
    }
    else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}

function signIn(e) {
    sessionStorage.setItem("loginName", "LOGI");

    e.preventDefault();

    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let name;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => {
            name = data.fname;
            return data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
        });


    const d = new Date();
    //d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //let expires = "expires=" + d.toUTCString();
    //document.cookie = name;
    sessionStorage.setItem("loginName", name);
    //document.cookie = "username=${fname}";

    if (!exist) {
        alert("Incorrect login credentials");
    }
    else {
        location.href = "C:/Users/DELL/Desktop/Ticket booking/index.html";
    }

}

