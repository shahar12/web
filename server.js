const express = require('express');
const path = require('path');
const { send } = require('process');
app = express();
const port = 3035 ; 
var pic; 
let popularty_pokimons = new Array(150).fill(0);

const img = require('./static-assets/images/001.png');
const pokimon_data = require('./data/pokemons.json');
/* create array for popularty of pokimons */

app.use("/popularty",function(req, res){
    res.send(popularty_pokimons);
});

app.get('/api/pokimons/pic',(req, res)=>{
    pic = '~/image/001.png' ; 
    res.sendFile(path.resolve('./image/001.png'));
})


/* return pokimon by id    */
app.get('/api/pokimons/:id',(req, res)=>{
    result = pokimon_data;
    if(req.params.id != 0 )
        popularty_pokimons[req.params.id-1]++;
        res.send(result);
});

app.get('/pages/list_pokimon.html',(req,res)=>{
    res.sendFile(path.resolve('./pages/list_pokimon.html'));
});


/* return all pokimons array */ 
app.get('/api/pokimons',(req, res)=>{
    result = pokimon_data.map((perms)=>{
        return{
            id : perms.id,
            name : perms.name,
            type : perms.type
        }
    })
    res.send(result); 
});

app.get("/",function(req,res){
   res.sendFile(path.resolve('./pages/index.html'));
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
   res.sendfile(path.resolve("./pages/404.html")); 
});
