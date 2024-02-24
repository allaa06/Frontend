function myFunction()
{
    document.getElementById("test").innerHTML = "Button clicked";
   if(test.style.display === 'none')
    {
        test.style.display = 'block';

    } else  {
        test.style.display = 'none';
    }

}

var button = document.getElementById('myButton');

button.addEventListener('test', myFunction);
