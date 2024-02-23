import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.gPU.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    toast.error("GPU not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "GPU not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "GPU found",
  });
}
