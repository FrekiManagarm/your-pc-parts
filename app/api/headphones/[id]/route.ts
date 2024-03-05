import prisma from "@/lib/prisma";
import { HeadphonesModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.headphones.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "Headphone found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = HeadphonesModel.parse(body);

  const data = await prisma.headphones.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Headphones not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Headphones not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Headphones updated",
  });
}
