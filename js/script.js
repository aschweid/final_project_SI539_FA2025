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


if (document.querySelector(".recipe_week_box") != null) {
    document.querySelector(".recipe_week_box").addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            document.querySelector(".recipe_week_box").click();
        }
    });
}


//https://www.w3schools.com/howto/howto_js_filter_elements.asp


//Show All Button
if (document.querySelector(".btnAll") != null) {
    document.querySelector(".btnAll").addEventListener("click", function () {
        console.log("Show All pressed");

        document.querySelector(".btnAll").classList.add("active");
        document.querySelector(".btnChicken").classList.remove("active");
        document.querySelector(".btnFish").classList.remove("active");
        document.querySelector(".btnVeg").classList.remove("active");


        const chickElements = document.getElementsByClassName("chicken");
        for (let i = 0; i < chickElements.length; i++) {
            chickElements[i].style.display = "block";
        }

        const fishElements = document.getElementsByClassName("fish");
        for (let i = 0; i < fishElements.length; i++) {
            fishElements[i].style.display = "block";
        }

        const vegElements = document.getElementsByClassName("vegetarian");
        for (let i = 0; i < vegElements.length; i++) {
            vegElements[i].style.display = "block";
        }

    });
}


//Chicken Button
if (document.querySelector(".btnChicken") != null) {
    document.querySelector(".btnChicken").addEventListener("click", function () {
        console.log("Chicken pressed");

        document.querySelector(".btnChicken").classList.add("active");
        document.querySelector(".btnAll").classList.remove("active");
        document.querySelector(".btnFish").classList.remove("active");
        document.querySelector(".btnVeg").classList.remove("active");


        const chickElements = document.getElementsByClassName("chicken");
        for (let i = 0; i < chickElements.length; i++) {
            chickElements[i].style.display = "block";
        }

        const fishElements = document.getElementsByClassName("fish");
        for (let i = 0; i < fishElements.length; i++) {
            fishElements[i].style.display = "none";
        }

        const vegElements = document.getElementsByClassName("vegetarian");
        for (let i = 0; i < vegElements.length; i++) {
            vegElements[i].style.display = "none";
        }


    });
}


//Fish Button
if (document.querySelector(".btnFish") != null) {
    document.querySelector(".btnFish").addEventListener("click", function () {
        console.log("Fish pressed");

        document.querySelector(".btnFish").classList.add("active");
        document.querySelector(".btnAll").classList.remove("active");
        document.querySelector(".btnChicken").classList.remove("active");
        document.querySelector(".btnVeg").classList.remove("active");


        const chickElements = document.getElementsByClassName("chicken");
        for (let i = 0; i < chickElements.length; i++) {
            chickElements[i].style.display = "none";
        }

        const fishElements = document.getElementsByClassName("fish");
        for (let i = 0; i < fishElements.length; i++) {
            fishElements[i].style.display = "block";
        }

        const vegElements = document.getElementsByClassName("vegetarian");
        for (let i = 0; i < vegElements.length; i++) {
            vegElements[i].style.display = "none";
        }


    });
}


//Vegetarian Button
if (document.querySelector(".btnVeg") != null) {
    document.querySelector(".btnVeg").addEventListener("click", function () {
        console.log("Vegetarian pressed");

        document.querySelector(".btnVeg").classList.add("active");
        document.querySelector(".btnAll").classList.remove("active");
        document.querySelector(".btnChicken").classList.remove("active");
        document.querySelector(".btnFish").classList.remove("active");


        const chickElements = document.getElementsByClassName("chicken");
        for (let i = 0; i < chickElements.length; i++) {
            chickElements[i].style.display = "none";
        }

        const fishElements = document.getElementsByClassName("fish");
        for (let i = 0; i < fishElements.length; i++) {
            fishElements[i].style.display = "none";
        }

        const vegElements = document.getElementsByClassName("vegetarian");
        for (let i = 0; i < vegElements.length; i++) {
            vegElements[i].style.display = "block";
        }

    });
}