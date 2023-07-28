const express=require('express');
const {registerUser, fetchUser}=require('./controllers/users/usercontroller')
const app=express();
 const cors=require('cors')


app.use(express.json());
 app.use(cors());
 app.get('/',(req,res)=>{
    res.end('hello world');
})
app.post('http://20.244.56.144/train/register',registerUser);
app.get('http://20.244.56.144/train/trains',fetchUser)






module.exports=app;