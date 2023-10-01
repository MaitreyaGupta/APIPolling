const mongoose=require("mongoose")


const VotingSchema=new mongoose.Schema({
    superhero:
    {
        type:String,
        required:true,
    },
    points:
    {
        type:Number,
        required:true,
    }
});

const Vote=mongoose.model("Vote",VotingSchema)

module.exports=Vote
