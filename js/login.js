// Open popup
document.getElementById("login-button").addEventListener("click", function(){
    var popup = document.querySelector(".popup");
    popup.classList.add("popup__active");
})

// Close popup
document.getElementById("close-button").addEventListener("click", function(){
    var popup = document.querySelector(".popup");
    popup.classList.remove("popup__active");
})
