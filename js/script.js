document.getElementById("year").innerHTML = new Date().getFullYear();

//https://www.w3schools.com/howto/howto_css_overlay.asp

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}