const Card = require("../model/card");
const Product = require("../model/product");

module.exports.getCard = async function (req, res) {
  const cards = await Card.find();
  res.render("card", {
    products: cards,
    title: "Cards",
  });
};

module.exports.buy = async function (req, res) {
  const productId = req.params.id;
  const product = Product.findById(productId);

  const card = new Card({
    name: product.name,
    price: product.price,
    productId: productId,
  });

  await card.save()

  res.redirect('card')
};

module.exports.remove = async function (req, res) {
  const products = req.body;
  await Product.save(products);

  res.status(201).send("Successfull");
};
