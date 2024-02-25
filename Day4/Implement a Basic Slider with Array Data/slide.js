let array =["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"];
let images = document.getElementById("images");
let current = 1;
let size = 5;


function next()
{
    if(current < size)
    {
        current += 1;
        /*
        var image = document.createElement("img");
        image.src = array[current];
        document.body.appendChild(image);
        */
        
    } else {
    alert("thi is the last image");
    return;
    }
    document.getElementById("currentImage").src = array[current];
}

function prev() {
    if(current > 0)
    {
        current -= 1;
        /*images.src = array[current];
        var image = document.createElement("img");
        image.src = array[current];
        document.body.appendChild(image);
        return;
        */
    }  else {
    alert("This is the first image");
    return;
    }
    document.getElementById("currentImage").src = array[current];
}
