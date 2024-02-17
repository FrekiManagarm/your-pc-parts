import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { number } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const data = await prisma.rAM.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "RAM found",
  });
}
