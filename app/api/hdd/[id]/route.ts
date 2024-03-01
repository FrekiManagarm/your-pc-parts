import prisma from "@/lib/prisma";
import { HDDModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.hDD.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "HDD found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = HDDModel.parse(body);

  const data = await prisma.hDD.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("HDD not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "HDD not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "HDD updated",
  });
}
