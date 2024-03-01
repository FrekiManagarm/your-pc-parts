import prisma from "@/lib/prisma";
import { CPUCoolerModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.cPUCooler.findMany();

  if (!data) {
    toast.error("Coolings not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "Coolings not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "Coolings found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = CPUCoolerModel.parse(body);

  const data = await prisma.cPUCooler.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Cooling not created");
    return NextResponse.json(null, {
      status: 422,
      statusText: "Cooling not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Cooling created",
  });
}
