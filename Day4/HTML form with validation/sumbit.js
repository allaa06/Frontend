function emailValidation(email)
{
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function myFunction() {
    let mail = document.getElementById("myEmail").value;
    let name = document.getElementById("myName").value;
    if(name == "" || !(emailValidation(mail)))
    {
        alert("Invalid email or username");
        return false;
    }
   let form = document.getElementById("myForm");
   form.submit();
}

