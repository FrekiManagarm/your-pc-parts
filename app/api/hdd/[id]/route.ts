import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: number } }) {
  const data = await prisma.hDD.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "HDD found",
  });
}
