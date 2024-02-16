import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Case } from "@prisma/client";
import { getRequiredAuthSession } from "@/lib/auth";
import { Role } from "@/lib/types";
import { toast } from "sonner";

export async function GET({ params }: { params: { id: number } }) {
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
  { params }: { params: { id: number } },
) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );
  const body: Case = await request.json();

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
    data: body,
  });

  return NextResponse.json(data, {
    status: 203,
    statusText: "Case updated",
  });
}

export async function DELETE({ params }: { params: { id: number } }) {
  const session = await getRequiredAuthSession(Role.ADMINISTRATOR);

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
