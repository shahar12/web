console.log("hello home page");

async function main(){
    const data = await fetch("/popularty").then(res => res.json()); 
    console.log({data});
    appendData(data);
  
}main();


function appendData(data){
    const container = document.getElementById("list_pok");
    if(data.length != 0 ){
        for (let i = 0 ; i < data.length; i++){
            var  pic  = new Image(75,75);
            var div = document.createElement("div");
            div.className = "pok_data";
            pic.className = "pok_pic";
            div.innerHTML = 'id : ' + data[i].id + `<br>`  
            +' name : ' + data[i].name + `<br>`+
            ' type : ' + data[i].type;
            if(div && pic){
                container.appendChild(div);
                container.appendChild(create_pic(pic,parseInt(data[i].id)));
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

