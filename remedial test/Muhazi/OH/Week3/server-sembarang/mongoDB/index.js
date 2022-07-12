const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://bob:KxyrRTVFmwgZhU4W@cluster0.glv5l.mongodb.net/latihanMongo';
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    return "Koneksi Sukses ke mongo atlas";
  } catch (error) {
    throw error;
  }
}

main()
  .then((data) => data)
  .catch((err) => err)