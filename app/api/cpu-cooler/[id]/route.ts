import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.cPUCooler.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    toast.error("Coolings not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "Cooling not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "Cooling found",
  });
}
