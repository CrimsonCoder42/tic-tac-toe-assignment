
alert('hello')

//create grid in JavaScript 
for (i = 0; i < 9; i++){
    var div = document.createElement("div");
    div.className = "grid";
    div.id = `grid ${i}`
    document.getElementById("main").appendChild(div);
    
}