
async function main(){
    const data = await fetch('/pok/data/').then(res => res.json());
    console.log({data});
    appendData(data);
}main();


function append_pic(pok_data){
    var img_id = " ";
    if(pok_data.id < 10  ){
        img_id = "00"+pok_data.id+".png"
    }else if(pok_data.id < 100){
        img_id = "0"+pok_data.id+".png"
    }else {
        img_id = pok_data.id+".png"
    }
    console.log(img_id);
    var pic = new Image(400,400);
    pic.src = "/image/"+img_id;
    var pic_box = document.getElementById("pokimon_pic");
    pic_box.appendChild(pic);
}


function appendData(pok_data){
    console.log({pok_data});
    /* append picture */
    append_pic(pok_data);
    var hp =  document.getElementById("HP");
    var attack =  document.getElementById("attack");
    var defense =  document.getElementById("defense");
    var sp_Attack =  document.getElementById("sp.Attack");
    var sp_defense =  document.getElementById("sp.defense");
    var speed =  document.getElementById("speed");
    var type_tow ; 
    var type_one ;
 
    /* append type check length of type if one else tow*/ 
    if(pok_data.type.length  == 1 ){
        type_one = document.getElementById("type_one");
        type_one.innerHTML = pok_data.type[0]; 
    }else{
        type_one = document.getElementById("type_one");
        type_one.innerHTML = pok_data.type[0]; 
        type_tow = document.getElementById("type_tow");
        type_tow.innerHTML = pok_data.type[1]; 
    }
    
    hp.innerHTML = pok_data.base.HP;
    attack.innerHTML = pok_data.base.Attack;
    defense.innerHTML = pok_data.base.Defense;
    sp_Attack.innerHTML = pok_data.base["Sp. Attack"];
    sp_defense.innerHTML = pok_data.base["Sp. Defense"];
    speed.innerHTML = pok_data.base.Speed;
        
}