const mongoose=require('mongoose');
const loginSchema=mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        UserName:{
            type:String,require:true
        },
        
        password:{
            type:String,require:true
        },
        
    
    }
)

module.exports=mongoose.model('login',loginSchema)
