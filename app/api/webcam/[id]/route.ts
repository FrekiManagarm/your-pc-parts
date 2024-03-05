import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { WebcamModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.webcam.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "Webcam found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = WebcamModel.parse(body);

  const data = await prisma.webcam.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Webcam not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Webcam not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Webcam updated",
  });
}
