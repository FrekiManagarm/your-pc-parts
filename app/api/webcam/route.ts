import prisma from "@/lib/prisma";
import { WebcamModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.webcam.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Webcams found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = WebcamModel.parse(body);

  const data = await prisma.webcam.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Webcam not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Webcam not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Webcam created",
  });
}
