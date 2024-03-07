import prisma from "@/lib/prisma";
import { CaseFanModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.caseFan.findMany();

  return NextResponse.json(data, {
    status: 200,
    statusText: "Case Fans found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = CaseFanModel.parse(body);

  const data = await prisma.caseFan.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Case Fan not created");
    return NextResponse.json(data, {
      status: 422,
      statusText: "Case Fan not updated",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Case Fan created",
  });
}
