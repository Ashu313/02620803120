const expressAsyncHandler=require('express-async-handler');
 

const User=require('../../model/user')


console.log("Snsb");
const registerUser=expressAsyncHandler(async(req,res)=>{

    const {companyName,ownerName,rollNo,ownerEmail,accessCode}=req?.body;
    console.log("ddhhhd");
    const userExists=await User.findOne({companyName,ownerEmail,ownerName});
    if(userExists){

        throw new Error('user already exists');
    }
    
try{
  console.log("shshs");
    const user=await User.create({companyName,ownerName,rollNo,ownerEmail,accessCode});

    res.status(200).json(user);
}
catch(error)
{
    res.json(error);
}
});

const fetchUser=expressAsyncHandler(async(req,res)=>{
  
    try{
        const users=await User.find({});
        console.log(users);
    res.json(users);
    }catch(err)
    {
        res.json(err);
       
    }
}); 

module.exports={registerUser,fetchUser};
//module.exports=fetchUser; 
//module.exports=LoginCredentials ;