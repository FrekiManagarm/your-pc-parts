import prisma from "@/lib/prisma";
import { GPUModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.gPU.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    toast.error("GPU not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "GPU not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "GPU found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = GPUModel.parse(body);

  const data = await prisma.gPU.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("GPU not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "GPU not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "GPU updated",
  });
}
