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
        console.log({poplurty});
    }
};

main();