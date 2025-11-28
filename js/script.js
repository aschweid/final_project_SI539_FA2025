document.getElementById("year").innerHTML = new Date().getFullYear();

//https://www.w3schools.com/howto/howto_css_overlay.asp


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('button.menu_icon').forEach(function (title) {
        title.addEventListener('click', function () {
            title.parentElement.classList.toggle('active');
        });
    });
});


document.querySelector(".menu_icon").addEventListener("resize", function () {
    if (screen.width > 820) {
        console.log(screen.width);
        document.getElementsByClassName("menu_icon").tabIndex = -1;
    }
});


document.querySelector(".menu_icon").addEventListener("click", function () {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});


document.querySelector(".menu_icon").addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
});


if(document.querySelector(".recipe_week_box") != null){
document.querySelector(".recipe_week_box").addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        document.querySelector(".recipe_week_box").click();
    }
});
}
