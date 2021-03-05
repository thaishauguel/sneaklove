require("dotenv").config();
require("../config/mongodb");
const SneakerModel = require("../models/Sneaker");

const sneakers = [
  {
    name: "Nike Airmax 270",
    ref: "air270",
    size: [37,41,52],
    description: "Best women sneakers",
    price: 99.99,
    category: "women",
    id_tags: ["60426b07d00f1766d9e4577d"]
  },
  {
    name: "Nike Airjordan ",
    ref: "airj03",
    size: [42,44,47],
    description: "Basketball sneakers",
    price: 109.99,
    category: "men",
    id_tags: ["60426b07d00f1766d9e4577b"]
  },
  {
    name: "Nike AirForce 1 ",
    ref: "airf01",
    size: [35,36,40],
    description: "Sneakers for kids",
    price: 79.99,
    category: "kids",
    id_tags: ["60426b07d00f1766d9e4577f"]
  },
];


SneakerModel.create(sneakers)
  .then((sneakers) => console.log(sneakers))
  .catch((err) => console.log(err));
