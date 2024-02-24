function myFunction()
{
    var button = document.getElementById("myButton");
    if(button.textContent === "Click Me")
    {
        button.textContent = "Clicked";
    } else {
        button.textContent = "Click Me";
    }

}
