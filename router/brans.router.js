const { Router } = require("express");

const { bransController} = require('../controller/brans.controller')


const router = Router();

router.get("/brands" ,bransController.getBrands ) ,
router.post("/brands" ,bransController.addBrands),
router.delete("/brands/:id" ,bransController.deleteBrandsById)
module.exports = router