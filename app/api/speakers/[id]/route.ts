import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { SpeakersModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.speakers.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "Speaker found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = SpeakersModel.parse(body);

  const data = await prisma.speakers.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Speaker not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Speaker not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Speaker updated",
  });
}
