const express = require('express');
const path = require('path');
const { send } = require('process');
app = express();
const port = 3035 ;
const pokimon_data = require('./data/pokemons.json');
/* crate array for popularty of pokimons */
let popularty_pokimons = new Array(150).fill(0);
app.use("/popularty",function(req, res){
    res.send(popularty_pokimons);
})
/* give acsses from html to all the files in folder static-assets */
app.use("/assets",express.static("static-assets"));

/* return pokimon by id    */
app.get('/api/pokimons/:id',(req, res)=>{
    result = pokimon_data;
    if(req.params.id != 0 )
        popularty_pokimons[req.params.id-1]++;
        res.send(result[req.params.id-1]);
});


/* return all pokimons array */ 
app.get('/api/pokimons/',(req, res)=>{
    res.send(pokimon_data); 
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