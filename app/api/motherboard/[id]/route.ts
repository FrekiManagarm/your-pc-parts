import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { MotherboardModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.motherboard.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = MotherboardModel.parse(body);

  const data = await prisma.motherboard.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Motherboard not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Motherboard not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Motherboard updated",
  });
}
