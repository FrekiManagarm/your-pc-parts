import prisma from "@/lib/prisma";
import { SoundCardModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.soundCard.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "SoundCards found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = SoundCardModel.parse(body);

  const data = await prisma.soundCard.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("SoundCard not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "SoundCard not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "SoundCard created",
  });
}
