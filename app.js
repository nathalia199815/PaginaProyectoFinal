var express = require("express");
var app = express();
const pug = require("pug");
const execBD = require("./config/conexionBD");
const Producto = require("./public/modelo/Producto");

const modeloProducto = require("./public/modelo/Producto");


tennisLista = [
  { color: "Blanco", imagen: "images/nike-g15998e397_640 (1).jpg" },
];

app.use(express.static(__dirname + "/public"));



app.get("/", function (peticion, respuesta) {
  respuesta.render("index.html", {
    titulo: "SPORT STORE",
    tennis: tennisLista,
  });
});

app.get("/tienda", function (peticion, respuesta) {
  modeloProducto.find(function (err, Producto) {
    respuesta.render("tienda.pug", {
         Producto:Producto
    });
  });
});

app.post("/tabla.html", function (peticion, respuesta, next) {
  modeloProducto.find(function (err, Producto) {
    respuesta.render("tabla.pug", {
         producto: Producto
    });
  });
});

app.get("/tabla1", function (peticion, respuesta, next) {
  var newProducto = new modeloProducto({
      Marca:peticion.query.txtmarca,
      Precio:peticion.query.txtprecio,
      Descripcion:peticion.query.txtdescripcion
  });
  console.log(newProducto);
  newProducto.save();            /*datos se guardan en tabla1 */
  respuesta.redirect("tienda");/*redirige a la pagina tienda */
});



app.use(function (peticion, respuesta) {
  respuesta.status(400); /*cuando no encuentre una direccion */
  let URLerror = peticion.originalUrl;
  respuesta.render("404.pug", { textoError: URLerror });
});

app.listen(3000, function () {
  console.log("escuchando el puerto 3000");
  execBD()
});
