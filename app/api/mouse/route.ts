import prisma from "@/lib/prisma";
import { MouseModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.mouse.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Mouses found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = MouseModel.parse(body);

  const data = await prisma.mouse.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Mouse not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Mouse not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Mouse created",
  });
}
