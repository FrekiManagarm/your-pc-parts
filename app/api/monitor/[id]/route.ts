import prisma from "@/lib/prisma";
import { MonitorModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.monitor.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "Monitor found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = MonitorModel.parse(body);

  const data = await prisma.monitor.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Monitor not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Monitor not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Monitor updated",
  });
}
