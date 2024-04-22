const express = require("express");
const server = express();
const PUERTO = 8080;

const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/api/products", productsRouter);
server.use("/api/carts", cartsRouter);

server.listen(PUERTO, () => {
  console.log(`Servidor corriendo el puerto ${PUERTO}`);
});