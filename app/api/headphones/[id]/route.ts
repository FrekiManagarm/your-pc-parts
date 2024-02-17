import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const data = await prisma.headphones.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "Headphone found",
  });
}
