import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PSUModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.pSU.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "PSU found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = PSUModel.parse(body);

  const data = await prisma.pSU.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("PSU not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "PSU not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "PSU updated",
  });
}
