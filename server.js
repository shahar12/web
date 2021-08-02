const { SSL_OP_NETSCAPE_CHALLENGE_BUG } = require('constants');
const express = require('express');
const path = require('path');
let  pokimon_id = " ";
app = express();
/* var  */
const port = 3035 ; 
let popularty_pokimons = new Array(150).fill(0);
app.use("/assets", express.static("static-assets"));
app.use(express.static(path.join(__dirname, 'static-assets')));
const pokimon_data = require('./static-assets/data/pokemons.json');

/* create array for popularty of pokimons */
app.use("/popularty",function(req, res){
    res.send(popularty_pokimons);
});

/* return pokimon by id    */
app.get("/api/pokimon/page",(req, res)=>{
    const result = pokimon_data.map((pokimon)=>{
        return{
            id: pokimon.id,
            name: pokimon.name,
            type: pokimon.type,
            base : pokimon.base
        }
    });
    console.log("id : "+pokimon_id);
    res.send(result[parseInt(pokimon_id)]);    
});

app.get('/list_pokimon.html',(req,res)=>{
    res.sendFile(path.resolve('./list_pokimon.html'));
});

app.get('/pokimon/page/:id',(req,res)=>{
    pokimon_id = req.params.id.toString();
    pocObjNumInt = parseInt(req.params.id);
    popularty_pokimons[pocObjNumInt]++;
    res.sendFile(path.resolve('./pokimon_id.html'));
})

/* return all pokimons array */ 
app.get('/api/pokimons',(req, res)=>{
    const result = pokimon_data.map((perms)=>{
        return{
            id : perms.id,
            name : perms.name,
            type : perms.type
        }
    });
    res.send(result); 
});

app.get("/",function(req,res){
   res.sendFile(path.resolve('./index.html'));
})
/* bring back home page  */

app.listen(port,function(error){
    if(error){
        console.log("error",error)
    }else{
        console.log('server is listening on port '+ port)
    }
});




//404 not found//
app.use((req,res)=>{
   res.sendfile(path.resolve("./404.html")); 
});
