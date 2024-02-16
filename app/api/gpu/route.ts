import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.gPU.findMany();

  if (!data) {
    toast.error("GPUs not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "GPUs not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "GPUs found",
  });
}
