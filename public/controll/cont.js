const controller = {}
const connection = require('../config/conexionBD')
const Model = require('../modelo/Producto')
controller.index = async(req, res, next)=>{
    try{

        await connection()
        const allProduc = await Model.find()

        console.log(allProduc)
        console.log('conexion correcta')
        res.render('index',{

        titulo:"Sport Store",
        Producto: allProduc})



    }catch(err){
        console.error(err)
    }

}