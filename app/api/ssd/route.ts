import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { SSDModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.sSD.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "SSDs found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = SSDModel.parse(body);

  const data = await prisma.sSD.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("SSD not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "SSD not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "SSD created",
  });
}
