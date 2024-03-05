import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { RAMModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.rAM.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "RAMs found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = RAMModel.parse(body);

  const data = await prisma.rAM.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("RAM not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "RAM not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "RAM created",
  });
}
