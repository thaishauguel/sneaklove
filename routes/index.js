const express = require("express");
const router = express.Router();

const Sneakers = require("./../models/Sneaker");
const Tags = require("./../models/Tag");


router.get("/", (req, res) => {
  res.render('index')
});

router.get("/sneakers/:cat", async (req, res) => {
  try {
    tags = await Tags.find()
    let sneakers;
    let categoryValue = req.params.cat;
    if (req.params.cat === "collection") {
      sneakers = await Sneakers.find()
      res.render('products', {sneakers, tags} )
    }
    else if (req.params.cat === categoryValue) {
      sneakers = await Sneakers.find({category: categoryValue})
      res.render('products', {sneakers, tags } )
    }

    // ALTERNATIVE
    // const allSneakers = await Sneakers.find()
    // if (req.params.cat === "collection") {
    //   const sneakers = allSneakers
    //   res.render('products', {sneakers} )
    // } 
    // const sneakers = allSneakers.filter(sneakerObj => sneakerObj.category === req.params.cat);
    // res.render('products', {sneakers} );
  } catch(err) {
    console.log(err);
  }
});

router.get("/one-product/:id", async (req, res) => {
  try {
    const sneaker = await Sneakers.findById(req.params.id)
    res.render("one_product", {sneaker});
  } catch(err) {
    console.log(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  }catch(err) {
    console.log(err)
  }
});

router.get("/signin", async (req, res) => {
  try {
    res.render("signin");
  }catch(err) {
    console.log(err)
  }  
});


module.exports = router;
