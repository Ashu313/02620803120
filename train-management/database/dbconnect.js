require('dotenv').config()
const mongoose=require('mongoose');
const dbConnect=async()=>{
try {
    await mongoose.connect(`mongodb+srv://kashutosh727:ioMgvEXYrrF4GtGz@cluster0.bwp83o2.mongodb.net/`,{
 
    
      useNewUrlParser:true,
 
    });
    console.log('database connected');
} catch (error) {
    console.log(`${error.message}`)
}
}
module.exports=dbConnect;
