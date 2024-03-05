import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { SoundCardModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.soundCard.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "SoundCard found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = SoundCardModel.parse(body);

  const data = await prisma.soundCard.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("SoundCard not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "SoundCard not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "SoundCard updated",
  });
}
