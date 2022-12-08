const mongoose=require('mongoose')
const tennisBD = new mongoose.Schema(
    {
        Marca:{type:String},
        Precio:{type:Number},
        Descripcion:{type:String}
    },
    //no poner version de mongo
    {versionKey:false,
    timestamps:true}
)
module.exports =mongoose.model('productos',tennisBD);