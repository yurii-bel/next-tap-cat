const { db } = require("@vercel/postgres");
const { users } = require("../app/lib/placeholder-data.js");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          coins_amount INTEGER NOT NULL,
          tap_bonus INTEGER NOT NULL
        );
      `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
            INSERT INTO users (id, first_name, last_name, coins_amount, tap_bonus)
            VALUES (${user.id}, ${user.first_name}, ${user.last_name}, ${user.coins_amount}, ${user.tap_bonus})
            ON CONFLICT (id) DO NOTHING;
          `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
