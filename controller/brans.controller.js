module.exports.bransController = {
    getBrands:(req,res) => {
        res.json('Все бренды выведены')
    } ,
    addBrands:(req,res) => {
        res.json(`Бренд добавлен`)
    } ,
    deleteBrandsById:(req,res) => {
        res.json(`Бренд с id ${req.params.id} удален`)
    }
}