import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const data = await prisma.pSU.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "PSUs found",
  });
}
