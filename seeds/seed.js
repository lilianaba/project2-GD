const seedUsers = require('./user-seeds');
const seedBars = require('./bar-seeds');
const seedPosts = require('./posts-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBars();
  console.log('\n----- BARS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
