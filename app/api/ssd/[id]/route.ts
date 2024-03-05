import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { SSDModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.sSD.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "SSD found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = SSDModel.parse(body);

  const data = await prisma.sSD.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("SSD not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "SSD not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "SSD updated",
  });
}
