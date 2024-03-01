import prisma from "@/lib/prisma";
import { GPUModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.gPU.findMany();

  if (!data) {
    toast.error("GPUs not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "GPUs not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "GPUs found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = GPUModel.parse(body);

  const data = await prisma.gPU.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("GPU not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "GPU not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "GPU created",
  });
}
