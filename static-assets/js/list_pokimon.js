fetch("./api/pokimons") 
.then(data=>{
    appendData(data);
})
.catch(function(err) {
    console.log("error : " + err);
})
function appendData(data) {
    var pic = new Image(100, 100);
    var container = document.getElementById("pokimon_box");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'id : ' + data[i].id + ' ,name : ' + data[i].name + '  ,type : ' + data[i].type;
        container.appendChild(div);
        container.appendChild(pic);
    }
}

