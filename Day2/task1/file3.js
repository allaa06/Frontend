function myFunction()
{
    var button = document.getElementById("myButton");
    if(button.textContent === "Hello")
    {
        button.textContent = "Goodbye";
    } else {
        button.textContent = "Hello";
    }

}
