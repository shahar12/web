const express = require('express');
const path = require('path');
const { send } = require('process');
app = express();
const port = 3035 ; 
let popularty_pokimons = new Array(150).fill(0);

const img = require('./static-assets/images/001.png');
const pokimon_data = require('./data/pokemons.json');
/* crate array for popularty of pokimons */

app.use("/popularty",function(req, res){
    res.send(popularty_pokimons);
});

/* give acsses from html to all the files in folder static-assets */
app.use("/assets",express.static("static-assets"));

app.get('/api/pokimons/pic',(req, res)=>{
    
})


/* return pokimon by id    */
app.get('/api/pokimons/:id',(req, res)=>{
    result = pokimon_data;
    if(req.params.id != 0 )
        popularty_pokimons[req.params.id-1]++;
        res.sendFile(path.resolve());
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
