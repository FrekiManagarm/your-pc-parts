import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      emailAddress: data.email,
    },
  });

  return NextResponse.json({
    ok: true,
  });
}
