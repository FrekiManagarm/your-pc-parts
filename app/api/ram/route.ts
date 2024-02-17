import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const data = await prisma.rAM.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "RAMs found",
  });
}
