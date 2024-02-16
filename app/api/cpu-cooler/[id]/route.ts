import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET({ params }: { params: { id: number } }) {
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
