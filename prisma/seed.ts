import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const testData = {
  users: [
    {
      email: "user1@example.com",
      password: "password1",
    },
    {
      email: "user2@example.com",
      password: "password2",
    },
  ],
  foods: [
    {
      name: "Food 1",
      type: "Type 1",
      available: true,
      price: 10,
      image: "https://picsum.photos/200/300",
      description: "Description 1",
      categoryId: 1,
    },
    {
      name: "Food 2",
      type: "Type 2",
      available: true,
      price: 15,
      image: "https://picsum.photos/200/300",
      description: "Description 2",
      categoryId: 2,
    },
  ],
  cards: [
    {
      foodId: 1,
      amount: 2,
      totalPrice: 20.0,
    },
    {
      foodId: 2,
      amount: 1,
      totalPrice: 15.0,
    },
  ],
};

async function main() {
  await prisma.user.createMany({
    data: testData.users,
    skipDuplicates: true,
  });
  await prisma.food.createMany({
    data: testData.foods as any,
    skipDuplicates: true,
  });
  await prisma.card.createMany({
    data: testData.cards,
    skipDuplicates: true,
  });

  console.log("Test data seeded successfully!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
