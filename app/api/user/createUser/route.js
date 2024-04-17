import prisma from "../../../lib/prismaClient.js";

export async function POST(request) {
  try {
    const body = await request.json();
    await prisma.user.create({
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
      },
    );
  }
}
