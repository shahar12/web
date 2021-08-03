console.log("list_pokimons.js")

async function main(){
    fetch("/api/pokimons").then(function(response){
        return response.json();
    })
    .then(function(data){
        appendData(data);
    })
    .catch(function(err){
      console.log("error : " + err);
    })

    function create_pic(pic,i,id){
        if(i < 9 ){  
            var str_id = "00"+id+".png";
            var url = "/image/"+str_id;
            pic.src =  url ; 
        }else if(i < 100 ){
            var str_id = "0"+id+".png"; 
            var url = "/image/"+str_id;
            pic.src =  url ; 
        }else {
            var str_id = id+".png"; 
            var url = "/image/"+str_id;
            pic.src =  url ; 
        }
        pic.src = url ; 
        pic.onclick=function(){window.location.href = "http://localhost:3035/pokimon/page/"+id;};
        pic.className ="pokimon_picture"
        return pic; 
    }

    function appendData(data){
        var container = document.getElementById("pokimon_box");
        for (var i = 0 ; i < data.length; i++){
            var  box = document.createElement("div");
            box.className = "pokimon_inner_box";
            var  pic  = new Image(70,70);
            var div = document.createElement("div");
            div.innerHTML = 'id : ' + data[i].id + `<br>`  
            +' name : ' + data[i].name + `<br>`+
            ' type : ' + data[i].type;
            if(div && pic && box ){
                box.appendChild(div);
                box.appendChild(create_pic(pic,i,data[i].id));
                container.appendChild(box);
            }
        }
    }
};


main();
