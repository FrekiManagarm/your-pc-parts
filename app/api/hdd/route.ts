import prisma from "@/lib/prisma";
import { HDDModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.hDD.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "HDDs found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = HDDModel.parse(body);

  const data = await prisma.hDD.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("HDD not updated");
    return NextResponse.json(data, {
      status: 422,
      statusText: "HDD not updated",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "HDD created",
  });
}
