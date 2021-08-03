console.log("hello world");

async function main(){
    const pok_data = await fetch('/api/pokimon/page')
    .then(res => res.json)
    .then(function(data){
        appendData(data);
    })
    .catch(function(err){
        console.log("error : " + err);
    })

    function append_pic(pok_data){
        var img_id = " ";
        if(pok_data.id < 9  ){
            img_id = "00"+pok_data.id+".png"
        }else if(pok_data.id < 99){
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
    
        hp.innerHTML = pok_data.base.HP;
        attack.innerHTML = pok_data.base.Attack;
        defense.innerHTML = pok_data.base.Defense;
        sp_Attack.innerHTML = pok_data.base.Sp. Attack;
        sp_defense.innerHTML = pok_data.base.sp. Defense;
        speed.innerHTML = pok_data.base.Speed;
            
    }
};

main();
