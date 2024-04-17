import prisma from "../../lib/prismaClient.js";

export async function GET(request) {
  try {
    const products = await prisma.product.findMany();
    return new Response(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}
