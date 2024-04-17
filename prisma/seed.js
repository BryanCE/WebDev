const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Define user data
    const newUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
    };

    // Define product data
    const newProduct = {
      name: "Product1",
      priceinCents: 300,
      filePath: "C:/example/test",
      imagePath: "C:/image/path/image.jpeg",
      description: "Some random product!",
      canPurchase: true,
    };

    // Add the user to the 'users' table
    await prisma.user.create({
      data: newUser,
    });

    // Add the user to the 'Product' table
    await prisma.product.create({
      data: newProduct,
    });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}

seedDatabase();
