import prisma from "@/lib/prisma";
import { HeadphonesModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.headphones.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Headphones found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = HeadphonesModel.parse(body);

  const data = await prisma.headphones.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Headphones not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Headphones not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Headphones created",
  });
}
