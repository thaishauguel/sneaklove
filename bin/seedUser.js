require('dotenv').config();
require('./../config/mongodb');
const mongoose = require('mongoose');

const users = [
    {
        name: "Albert",
        lastname: "Dubouchon",
        email: "albert@albert.com",
        password: "08939783"
    },
    {
        name: "Chloé",
        lastname: "Kikou",
        email: "chloe@chloe.com",
        password: "98039742"
    },
    {
        name: "Michka",
        lastname: "Bogoss",
        email: "mich@mich.com",
        password: "0978430270"
    }
];

const UserModel = require('./../models/User');

UserModel.deleteMany()
.then(() => {
    UserModel.insertMany(users)
    .then(success => {
    console.log(success, 'successsss');
    mongoose.connection.close().then(success => console.log('WELL CLOSED'))
    .catch(err => console.log('NOPE DIDNT CLOSE'));
})
.catch(err => console.log(err, 'faaaaaail'));
})




