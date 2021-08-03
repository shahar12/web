console.log("hello home page");

async function main(){
     fetch('/poplurty')
    .then(res=>JSON.parse(res))
    .then(data=>{
        appendData(data);
    })
    .catch((err)=>{
        console.warn(err.responseText)
        console.log("error : " + err )
    })
}main();


function appendData(json){
    const container = document.getElementById("list_pok");
    if(json.length != 0 ){
        for (let i = 0 ; i < json.length; i++){
            var  pic  = new Image(75,75);
            var div = document.createElement("div");
            div.innerHTML = 'id : ' + json[i].id + `<br>`  
            +' name : ' + json[i].name + `<br>`+
            ' type : ' + json[i].type;
            if(div && pic){
                container.appendChild(div);
                container.appendChild(create_pic(pic,parseIntdata[i].id));
                container.appendChild(box);
            }
        }
    }else {
        container.innerHTML = "no data";
    }
    
}



function create_pic(pic,id){
    let button  = document.createElement("button");
    if(id < 9 ){  
        let str_id = "00"+id+".png";
        let url = "/image/"+str_id;
        pic.src =  url ; 
        console.log({url});
    }else if(id < 99 ){
        let str_id = "0"+id+".png"; 
        let url = "/image/"+str_id;
        pic.src =  url ; 
        console.log({url});
    }else {
        let str_id = id+".png"; 
        let url = "/image/"+str_id;
        pic.src =  url ; 
        console.log({url});
    }
    pic.id = id;
    button.appendChild(pic)
    button.addEventListener("click",(id)=>{
        window.location.href = "http://localhost:3035/pokimon/page/"+String(id);
    })
    return button ; 
}

