console.log("hello home page");

async function main(){
    const data = await fetch('/poplurty')
    .catch((err)=>{
        console.log("error : " + err )
    })
    presentTrheeBigest(data);
}main();


function presentTrheeBigest(data){
    const presnt_pok = document.getElementById("list_pok");
    for(i = 0 ; i < data.length ; i++){
        if(data[i]){
            var pokimon = document.createElement("div");
            pokimon.appendChild(create_pic(data[i].id));
            pokimon.innerHTML = "name : " + data[i].name ;
            presnt_pok.appendChild(pokimon);
        }
    }
}

function create_pic(id){
    let pic = new Image(75,75);
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

