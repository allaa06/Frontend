function displayContent(text)
{
    var input = document.getElementById("inputText").value;
    var displayedText = document.getElementById("displayedText");
    
    if (input.trim() !== "") {
        displayedText.textContent = input;
    } else {
        displayedText.textContent = "No text input provided!";
    }
}
