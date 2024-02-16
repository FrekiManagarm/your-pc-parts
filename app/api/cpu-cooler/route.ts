import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.cPUCooler.findMany();

  if (!data) {
    toast.error("Coolings not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "Coolings not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "Coolings found",
  });
}
