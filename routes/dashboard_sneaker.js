const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneakers = require('./../models/Sneaker')
const Tags = require("./../models/Tag");
const uploader = require("../config/cloudinary");



router.get("/prod-manage", async (req, res) => {
    try{
        const sneakers = await Sneakers.find()
        res.render('products_manage', {sneakers})
    }catch(err) {
     console.log(err);}
  });

  router.get("/prod-add", async (req, res) => {
    try{
        const tags = await Tags.find()
        res.render('products_add', {tags} )
    }catch(err) {
     console.log(err);}
  });

  router.post("/prod-add", uploader.single("image"), async (req, res) => {
    try{
        const newSneaker = {...req.body};
        if (!req.file) newSneaker.image = undefined;
        else newSneaker.image = req.file.path;
        await Sneakers.create(newSneaker);
        res.redirect('/prod-manage' );
    }catch(err) {
     console.log(err);}
  });
  
  router.post("/tag-add", uploader.single("image"), async (req, res) => {
    try{
        console.log(req.body)
        await Tags.create(req.body);
        res.redirect('/prod-add');
    }catch(err) {
     console.log(err)
    }
  });

  router.get("/product-edit/:id", async (req, res) => {
    try{
        const tags = await Tags.find()
        const sneaker = await Sneakers.findById(req.params.id);
        res.render('product_edit', {sneaker, tags })
    }catch(err) {
     console.log(err);}
  });

  router.post("/product-edit/:id", async (req, res) => {
    try{
        await Sneakers.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/prod-manage')
    }catch(err) {
     console.log(err);}
  });
  
  router.get("/prod-manage/delete/:id", async (req, res) => {
    try{
        await Sneakers.findByIdAndRemove(req.params.id);
        res.redirect('/prod-manage')
    }catch(err) {
     console.log(err);}
  });


module.exports = router;
