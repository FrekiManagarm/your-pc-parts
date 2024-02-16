import { getRequiredAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Role } from "@/lib/types";
import { Case, Prisma } from "@prisma/client";
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
    statusText: "",
  });
}

export async function POST(request: NextRequest) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );
  const body: Case = await request.json();

  if (!session) {
    toast.error("You can't do this action !");
    return NextResponse.json(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const data = await prisma.case.create({
    data: body,
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
