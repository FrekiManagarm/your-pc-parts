import prisma from "@/lib/prisma";
import { MotherboardModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.motherboard.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Motherboards found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = MotherboardModel.parse(body);

  const data = await prisma.motherboard.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Motherboard not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Motherboard not created",
    });
  }
}
