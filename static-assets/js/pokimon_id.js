
async function main(){
     fetch('/pok/data/5')
    .then(res => res.json)
    .then(function(data){
        appendData(data);
    })
    .catch(function(err){
        console.log("error : " + err);
    })

    function append_pic(data){
        var img_id = " ";
        if(data.id < 9  ){
            img_id = "00"+data.id+".png"
        }else if(data.id < 99){
            img_id = "0"+data.id+".png"
        }else {
            img_id = data.id+".png"
        }
        console.log(img_id);
        var pic = new Image(400,400);
        pic.src = "/image/"+img_id;
        var pic_box = document.getElementById("pokimon_pic");
        pic_box.appendChild(pic);
    }

    function appendData(data){
        console.log({data});
        /* append picture */
        append_pic(data);
        var hp =  document.getElementById("HP");
        var attack =  document.getElementById("attack");
        var defense =  document.getElementById("defense");
        var sp_Attack =  document.getElementById("sp.Attack");
        var sp_defense =  document.getElementById("sp.defense");
        var speed =  document.getElementById("speed");
    
        hp.innerHTML = data.base.HP;
        attack.innerHTML = data.base.Attack;
        defense.innerHTML = data.base.Defense;
        sp_Attack.innerHTML = data.base.Sp. Attack;
        sp_defense.innerHTML = data.base.sp. Defense;
        speed.innerHTML = data.base.Speed;
            
    }
};

main();
