const app1=require("express")  
const fs=require("fs").promises
const path=require("path")

const datafile=path.join(__dirname+"data.json")
app=app1()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(app1.static("public"))
const db=require("./config/mongoose")
app.use(bodyParser.json())
const cors=require("cors")
 
const Vote=require("./modules/OpenModule")
app.listen(5000,function(req,res){
    console.log("The host is listening")
})

app.get("/",function(req,res){
    res.render("VotingPage")
    async function readfile(){
        let data=JSON.parse(await fs.readFile(datafile,"utf-08"))
        const totalVotes=Object.values(data).reduce((total,n)=>total+=n,0)

        data=Object.entries(data).map(function([label,votes]){
            return{
                label,
                percentage:(((100*votes)/totalVotes)||0).toFixed(0)
            }
        })
             
        console.log(totalVotes),
        console.log(data),
         res.json(data)
    }
})

app.post("/",async function(req,res){
    const data=JSON.parse(await fs.readFile(datafile,"UTF-08"))

    data[req.body.add]++

    await fs.writeFile(datafile,JSON.stringify(data));

    res.end();
})


 
