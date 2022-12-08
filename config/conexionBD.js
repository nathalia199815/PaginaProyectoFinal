const mongoose = require('mongoose');

const dbo='mongodb://127.0.0.1:27017/ProyectoF'


module.exports=()=>{
  const db =()=>{
    mongoose.connect(
        dbo,{
            keepAlive:true,
            useNewUrlParser:true,
            useUnifiedTopology:true},

        (err) =>{
            if(err){
                console.log("Error en la conexión"+err.message)
            }else{
                console.log("Conexión exitosa")
            }
        }

    )
   
  }  
  db();
}
