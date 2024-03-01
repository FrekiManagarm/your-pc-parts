import prisma from "@/lib/prisma";
import { CPUCreateSchema } from "@/lib/schemas/cpu-schema";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";
export async function GET() {
  const data = await prisma.cPU.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "CPUs found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = CPUCreateSchema.parse(body);

  if (!validSchema) {
    toast.error("Something wen't wrong in the request");
    return NextResponse.json(validSchema, {
      status: 422,
      statusText: "Error in validation schema",
    });
  }

  const data = await prisma.cPU.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Error when creating CPU");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Error when creating CPU",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "CPU created",
  });
}
