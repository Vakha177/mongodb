module.exports.productsControllers = {
     
getProducts:(req,res) => {
    res.json('all products')
},
getProductsById:(req , res) => {
    res.json(`productsById ${req.params.id}`)
} ,
addProducts:(req,res) => {
    res.json('продукт добавлен ')
},
findByIdAndUpdate:(req,res) => {
    res.json(`Продукт по id ${req.params.id} изменен`)
},
deleteById:(req,res) => {
    res.json(`продукт по id ${req.params.id} удален`)
}

}
