import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const data = await prisma.sSD.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "SSDs found",
  });
}
