const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://maitreyaguptaa:killerman@devs.syeiknh.mongodb.net/ab12",{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection

db.once('open',function(req,res){
    console.log("Database has been connected")
})

module.exports=db
