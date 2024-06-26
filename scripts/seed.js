const { PrismaClient } = require("@prisma/client");
const { users } = require("../app/lib/placeholder-data.js");

const prisma = new PrismaClient();

async function seedUsers() {
  try {
    // Clear existing users to avoid duplication
    await prisma.user.deleteMany();

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user, index) => {
        try {
          const newUser = await prisma.user.create({
            data: {
              id: user.id,
              firstName: user.first_name,
              lastName: user.last_name,
              coinsAmount: user.coins_amount,
              tapBonus: user.tap_bonus,
            },
          });
          console.log(
            `Inserted user ${index + 1}: ${newUser.firstName} ${
              newUser.lastName
            }`
          );
          return newUser;
        } catch (insertError) {
          console.error(`Error inserting user ${index + 1}:`, insertError);
        }
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsers().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
