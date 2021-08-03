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
        let button  = document.createElement("button");
        if(i < 9 ){  
            let str_id = "00"+id+".png";
            let url = "/image/"+str_id;
            pic.src =  url ; 
        }else if(i < 99 ){
            let str_id = "0"+id+".png"; 
            let url = "/image/"+str_id;
            pic.src =  url ; 
        }else {
            let str_id = id+".png"; 
            let url = "/image/"+str_id;
            pic.src =  url ; 
        }
        pic.id = id;
        button.appendChild(pic)
        button.addEventListener("click",(id)=>{
            window.location.href = "http://localhost:3035/pokimon/page/"+String(id);
        })
        return button ; 
    }

    function appendData(data){
        var container = document.getElementById("pokimon_box");
        for (let i = 0 ; i < data.length; i++){
            var  box = document.createElement("div");
            box.className = "pokimon_inner_box";
            var  pic  = new Image(75,75);
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
