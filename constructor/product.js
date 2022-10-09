const Product = require("../model/product");

module.exports.getProducts = async function (req, res) {
  const products = await Product.find();


  res.status(200).render("products.hbs", {
    products: products,
    title: "Products",
  });
};

module.exports.getProductById = async function (req, res) {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.send(product);
};

module.exports.updateById = async function (req, res) {
  const filter = { productId: req.params.id };
  const price = req.query.price;
  const name = req.query.name;

  await Product.findOneAndUpdate(filter, {
    $set: {
      name:name,
      price: price,
    },
  });

  res.redirect('/products')
};

module.exports.setProducts = async function (req, res) {
  const products = req.body;

  const idx = Math.floor(Math.random() * 100005);
  const product = new Product({
    name: req.body.name,
    price: +req.body.price,
    productId: idx,
  });


  await product.save(products);

  res.redirect('/products')

};

module.exports.deleteById = async function (req, res) {
  const id = req.params.id;
  await Product.findOneAndRemove({productId: {$gte:id}});
  res.redirect('/products');
};
