import prisma from "@/lib/prisma";
import { CPUCoolerModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.cPUCooler.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    toast.error("Coolings not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "Cooling not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "Cooling found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = CPUCoolerModel.parse(body);

  const data = await prisma.cPUCooler.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Cooling not updated");
    return NextResponse.json(null, {
      status: 422,
      statusText: "Cooling not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Cooling updated",
  });
}
