import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { KeyboardModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.keyboard.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "Keyboard found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = KeyboardModel.parse(body);

  const data = await prisma.keyboard.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Keyboard not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Keyboard not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Keyboard updated",
  });
}
