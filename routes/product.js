const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/product')

router.get('/', constructor.getProducts)

router.put('/update/:id', constructor.updateById)

router.post('/add', constructor.setProducts)

router.get('/:id', constructor.getProductById)

router.delete('/delete/:id', constructor.deleteById)

router.get('/product/update', (req,res)=>{
    res.render('update.hbs')
})

router.get('/product/add', (req,res)=>{
    res.render('add.hbs')
})

module.exports = router