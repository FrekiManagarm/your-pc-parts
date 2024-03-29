import prisma from "@/lib/prisma";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { CPUModel } from "@/prisma/zod";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
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
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authConfig);
  const body = await request.json();

  const validSchema = CPUModel.parse(body);

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
    data: validSchema,
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authConfig);

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
