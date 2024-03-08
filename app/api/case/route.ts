import prisma from "@/lib/prisma";
import { CaseModel } from "@/prisma/zod";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET() {
  const data = await prisma.case.findMany();

  if (!data) {
    return NextResponse.json(null, {
      status: 404,
      statusText: "Cases not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "Cases found",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validSchema = CaseModel.parse(body);

  const data = await prisma.case.create({
    data: validSchema,
  });

  if (!data) {
    toast.error("Case not created");
    return NextResponse.json(null, {
      status: 422,
      statusText: "Case not created",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "Case created",
  });
}
