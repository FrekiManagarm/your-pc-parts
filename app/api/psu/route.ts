import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PSUModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.pSU.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "PSUs found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = PSUModel.parse(body);

  const data = await prisma.pSU.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("PSU not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "PSU not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "PSU created",
  });
}
