import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.speakers.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Speakers found",
  });
}
