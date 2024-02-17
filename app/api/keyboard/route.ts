import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.keyboard.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Keyboards found",
  });
}
