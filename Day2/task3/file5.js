function myFunction()
{
   
    var text = document.getElementById("hiddenText");
    var button = document.getElementById("toggleButton");
    
    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
}
