window.addEventListener('load', () => {
    if (sessionStorage.getItem("loginName") != null || sessionStorage.getItem("loginName") == "LOGIN")
        document.getElementById("login").innerHTML = "Logout";
})