const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema= new Schema({
    name: String,
    ref: String,
    size: [Number],
    description: String,
    price: Number,
    category: {
        type: String,
        enum: ["men", "women", "kids"]},
    id_tags: [{type: Schema.Types.ObjectId,  ref: "tags"} ],
    image: {
        type: String,
        default: "https://www.lesitedelasneaker.com/wp-content/images/2019/03/air-jordan-1-retro-high-og-black-white-2019-6-2.jpg"
    }
})

const SneakerModel = mongoose.model('sneaker', sneakerSchema)

module.exports = SneakerModel