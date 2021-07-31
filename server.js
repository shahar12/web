const { SSL_OP_NETSCAPE_CHALLENGE_BUG } = require('constants');
const express = require('express');
const path = require('path');
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
app.get("/assets/data/pokimons/:id",(req, res)=>{
    const result = pokimon_data.map((pokimon)=>{
        return{
            id: pokimon.id,
            name: pokimon.name,
            type: pokimon.type,
            base : pokimon.base
        }
    });
    if(req.params.id != 0 ){
        popularty_pokimons[req.params.id-1]++;
    }
    res.send(result[req.params.id]);
});

app.get('/pages/list_pokimon.html',(req,res)=>{
    res.sendFile(path.resolve('./list_pokimon.html'));
});


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
