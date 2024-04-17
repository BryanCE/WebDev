import prisma from "../../../lib/prismaClient.js";
//GET function to check if user exists
export async function POST(request) {
  try {
    const body = await request.json();

    const userCount = await prisma.user.count({
      where: {
        username: body.username,
      },
    });

    if (userCount > 0) {
      return new Response(JSON.stringify({ ok: true, userCount }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ ok: false, message: "User not found!" }),
        {
          status: 404,
        },
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, message: "Failed to fetch User! " + error }),
      {
        status: 500,
      },
    );
  }
}
