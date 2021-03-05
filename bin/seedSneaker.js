require("dotenv").config();
require("../config/mongodb");
const SneakerModel = require("../models/Sneaker");

const sneakers = [
  {
    name: "Nike Airmax 270",
    ref: "air270",
    size: 41,
    description: "Best women sneakers",
    price: 99.99,
    category: "women",
  },
  {
    name: "Nike Airjordan ",
    ref: "airj03",
    size: 47,
    description: "Basketball sneakers",
    price: 109.99,
    category: "men",
  },
  {
    name: "Nike AirForce 1 ",
    ref: "airf01",
    size: 35,
    description: "Sneakers for kids",
    price: 79.99,
    category: "kids",
  },
];

SneakerModel.create(sneakers)
  .then((sneakers) => console.log(sneakers))
  .catch((err) => console.log(err));
