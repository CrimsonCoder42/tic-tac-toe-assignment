


//create grid in JavaScript 
for (i = 0; i < 3; i++){
    var div = document.createElement("div");
    div.className = "grid";
    document.getElementById("main").appendChild(div);
    for (j = 0; j < 2; j++){
        var div = document.createElement("div");
        div.className = "grid";
        document.getElementById("main").appendChild(div);
    }
}