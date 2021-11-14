window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');

    // document.getElementById('result-name').innerHTML = name;
    // document.getElementById('result-surname').innerHTML = surname;
    // // sessionStorage.getItem("Name");
    // if (sessionStorage.getItem("loginName") != null && )
    //     document.getElementById("login").innerHTML = "Login"
    // else {
    //     document.getElementById("login").innerHTML = "Logout"
    //     console.log(sessionStorage.getItem("loginName"));
    // }
    if (sessionStorage.getItem("loginName") != null || sessionStorage.getItem("loginName") == "LOGIN")
        document.getElementById("login").innerHTML = "Logout";

})