console.log("list_pokimons.js")

async function main(){
    const data = await fetch('/api/pokimons').then(res=>res.json());
    console.log({data});
    var container = document.getElementById("pokimon_box");
    for (var i = 0 ; i < data.length ; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'id : ' + data[i].id + ' ,name : ' + data[i].name + '  ,type : ' + data[i].type;
        container.appendChild(div);
    }
};

main();
