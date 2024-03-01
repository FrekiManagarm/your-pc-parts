import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Case, UserRole } from "@prisma/client";
import { getRequiredAuthSession } from "@/lib/auth";
import { toast } from "sonner";
import { CaseModel } from "@/prisma/zod";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.case.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    toast.error("Case not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "Case not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "Case found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getRequiredAuthSession(
    UserRole.ADMINISTRATOR || UserRole.MODERATOR,
  );
  const body = await request.json();

  const validSchema = CaseModel.parse(body);

  if (!session) {
    toast.error("You do this action !");
    return NextResponse.json(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const data = await prisma.case.update({
    where: {
      id: params.id,
    },
    data: validSchema,
  });

  return NextResponse.json(data, {
    status: 203,
    statusText: "Case updated",
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getRequiredAuthSession(UserRole.ADMINISTRATOR);

  if (!session) {
    toast.error("You can't do this action");
    return NextResponse.json(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const data = await prisma.case.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(data, {
    status: 204,
    statusText: "",
  });
}
