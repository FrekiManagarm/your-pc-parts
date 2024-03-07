import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CaseFanModel } from "@/prisma/zod";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.caseFan.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 200,
    statusText: "Case Fan found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validSchema = CaseFanModel.parse(body);

  const data = await prisma.caseFan.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  if (!data) {
    toast.error("Case Fan not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Case Fan not updated",
    });
  }

  return NextResponse.json(data, {
    status: 203,
    statusText: "Case Fan updated",
  });
}
