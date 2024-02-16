import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.hDD.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "HDDs found",
  });
}
