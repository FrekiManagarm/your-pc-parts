import prisma from "@/lib/prisma";
import { KeyboardModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.keyboard.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Keyboards found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = KeyboardModel.parse(body);

  const data = await prisma.keyboard.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Keyboard not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Keyboard created",
    });
  }
}
