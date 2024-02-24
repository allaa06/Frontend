function validate()
{
    var emailInput = document.getElementById("email").value;
    if(emailInput == "" || emailInput == null)
    {
        alert("Please enter en email");
        return false;
    }
    return true;
}
