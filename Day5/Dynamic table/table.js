let arr = 
[
    [1, "John Doe", 30, "Engineering", "Frontend Developer", "Mid", "john.doe@example.com", "123-456-7890", "JavaScript", "React", "CSS"],
    [2, "Jane Smith", 28, "Design", "UI/UX Designer", "Senior", "jane.smith@example.com", "098-765-4321", "Figma", "Sketch", "Adobe XD"]
];
//let table = document.getElementById("Table");
//let html = "";

function Myfunction()
{
    let table = document.getElementById("Table");
    let html = "";
    for(let i = 0; i < arr.length; ++i)
    {
        html += "<tr>";
        
        for(let j = 0; j < arr[i].length; ++j)
        {
             html += "<td>" + arr[i][j] + "</td>";
           // table.rows[i].cells[j].innerHTML = arr[i - 1][j];
        }
    }
    html += "</tr>";
    table.innerHTML += html;
}
//.innerHTML = html;
Myfunction();
