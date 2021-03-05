require('./../config/mongodb'); // fetch the db connection

const TagModel = require('./../models/Tag')

const tags = [
    { label: "streetwear" },
    { label: "sportwear" },
    { label: "skateboard" },
    { label: "dance" },
    { label: "running" },
    { label: "basketball" },
    { label: "football" }
]

(async function insertData() {
    try {
      await TagModel.deleteMany(); // empty the db collection before every seed

      const inserted = await TagModel.insertMany(myData); // insert elements in db
      console.log(`seed tags done : ${inserted.length} documents inserted !`);
    } catch (err) {
      console.error(err);
    }
  })();