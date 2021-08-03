
console.log("hello home page")
async function main(){
     fetch("/poplurty")
    .then(res => res.json())
    .then((data)=>{
        presentTrheeBigest(data)
    })
    .catch((err)=>{
        console.log("error : " + err )
    })

    function presentTrheeBigest(data){
        const presnt_pok = document.getElementById("list_pok");
        for(i = 0 ; i < data.length ; i++){
            let top = document.createElement("ol");
            let pic = new Image(75,75);
            top.appendChild(create_pic(pic,data[i].id));
            top.innerHTML = `<p>`+ "name : " + data[i].name  +  `<\p>`
            presnt_pok.appendChild(top);
        }
    }

    function create_pic(pic,id){
        let button  = document.createElement("button");
        if(id < 9 ){  
            let str_id = "00"+id+".png";
            let url = "/image/"+str_id;
            pic.src =  url ; 
        }else if(id < 99 ){
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
};

main();