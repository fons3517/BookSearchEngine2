const db = require('../config/connection');
const { User, Book } = require('../models');
const userSeeds = require('./userSeeds.json');
const bookSeeds = require('./bookSeeds.json');

db.once('open', async () => {
  try {
    await Book.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < bookSeeds.length; i++) {
      const { _id, bookAuthor } = await Book.create(bookSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: bookAuthor },
        {
          $addToSet: {
            books: _id,
          }
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Finito!');
  process.exit(0);
});