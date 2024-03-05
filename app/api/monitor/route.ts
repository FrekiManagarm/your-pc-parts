import prisma from "@/lib/prisma";
import { MonitorModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.monitor.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Monitors found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = MonitorModel.parse(body);

  const data = await prisma.monitor.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Monitor not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Monitor not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Monitor created",
  });
}
