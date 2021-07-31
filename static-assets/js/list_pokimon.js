console.log("list_pokimons.js")

async function main(){
    const pokimon_list = await fetch('/api/pokimons').then(res=>res.json());
    console.log({pokimon_list});
    appendData(pokimon_list); 
};

main();

function appendData(data) {
    var pic = new Image(100, 100);
    var container = document.getElementById("pokimon_box");
    for (var pokimon in data) {
        var div = document.createElement("div");
        div.innerHTML = 'id : ' + data.id + ' ,name : ' + data.name + '  ,type : ' + data.type;
        container.appendChild(div);
    }
}

