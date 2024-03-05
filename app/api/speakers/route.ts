import prisma from "@/lib/prisma";
import { SpeakersModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.speakers.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Speakers found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = SpeakersModel.parse(body);

  const data = await prisma.speakers.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Speaker not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Speaker not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Speaker created",
  });
}
