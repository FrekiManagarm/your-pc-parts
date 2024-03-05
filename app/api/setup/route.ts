import prisma from "@/lib/prisma";
import { SetupModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.setup.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Setups found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = SetupModel.parse(body);

  const data = await prisma.setup.create({
    data: validSchema,
    include: {
      case: true,
      cpu: true,
      cpu_cooler: true,
      case_fans: true,
      gpu: true,
      hdd: true,
      headphones: true,
      keyboard: true,
      monitors: true,
      motherboard: true,
      mouse: true,
      psu: true,
      ram: true,
      sdds: true,
      sound_card: true,
      speakers: true,
      webcam: true,
    },
  });

  if (!data) {
    toast.error("Setup not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Setup not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Setup created",
  });
}
