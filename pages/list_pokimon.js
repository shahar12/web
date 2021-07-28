    fetch("/api/pokimons").then(function(response){
        return response.json();
    })
    .then(function(data){
        appendData(data);
    })
    .catch(function(err){
      console.log("error : " + err);
    })
    function appendData(data){
        var container = document.getElementById("pokimon_box");
        for (var i = 0 ; i < data.length; i++){
                var div = document.createElement("div");
                div.innerHTML = 'id : ' + data[i].id + ' ,name : ' + data[i].name + '  ,type : ' + data[i].type; 
                container.appendChild(div); 
        }
    }
