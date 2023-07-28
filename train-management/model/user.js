const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    
    companyName:{

        required:[true,'s require'],
        type:String,
    },
    ownerName:{
        required:[true,' require'],
        type:String
    },
    rollNo:{
    
        required:[true,'require'],
        type:String
    },
    ownerEmail:{
        required:[true,' require'],
        type:String
    },
    accessCode:{
      required:[true,' require'],
      type:String
    },
 
},
{
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
)
userSchema.pre('save', function (next) {
   
    next();
  });
  
  
  
  
  
  


const User=mongoose.model('User',userSchema);
module.exports=User;