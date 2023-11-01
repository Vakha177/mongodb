const { Router } = require("express");
const { productsControllers } = require('../controller/products.controllers')
const router = Router();
 
router.get("/products/:id" , productsControllers.getProductsById)
router.post("/products", productsControllers.addProducts)
router.patch("/products/:id",productsControllers.findByIdAndUpdate)
router.delete("/products/:id" , productsControllers.deleteById)

  // код вывода сообщений
 router.get('/products' , productsControllers.getProducts)



module.exports = router;