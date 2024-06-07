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

export async function POST(request) {
  try {
    const body = await request.json();
    await prisma.products.create({
      data: body,
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, message: "Failed to Create User! " + error }),
      {
        status: 500,
      }
    );
  }
}
