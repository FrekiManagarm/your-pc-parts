import { getRequiredAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Role } from "@/lib/types";
import { CPU } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET({ params }: { params: { id: number } }) {
  const data = await prisma.cPU.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    toast.error("CPUs not found");
    return NextResponse.json(null, {
      status: 404,
      statusText: "CPUs not found",
    });
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: "CPUs found",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );
  const body: CPU = await request.json();

  if (!session) {
    toast.error("Unauthorized");
    return NextResponse.json(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const data = await prisma.cPU.update({
    where: {
      id: params.id,
    },
    data: body,
  });

  if (!data) {
    toast.error("CPU not updated");
    return NextResponse.json(null, {
      status: 422,
      statusText: "Something wen't wrong",
    });
  }

  return NextResponse.json(data, {
    status: 201,
    statusText: "CPU updated",
  });
}

export async function DELETE({ params }: { params: { id: number } }) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  if (!session) {
    toast.error("You can't do this action");
    return NextResponse.json(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const data = await prisma.cPU.delete({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    toast.error("CPU not deleted");
    return NextResponse.json(null, {
      status: 422,
      statusText: "Something wen't wrong",
    });
  }

  return NextResponse.json(data, {
    status: 204,
    statusText: "CPU deleted",
  });
}
