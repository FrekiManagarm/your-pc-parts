import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { number } from "zod";
import { RAMModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.rAM.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "RAM found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const validSchema = RAMModel.parse(body);

  const data = await prisma.rAM.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("RAM not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "RAM not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "RAM updated",
  });
}
