import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

type LoginType = {
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const body: LoginType = await request.json();

  if (!body.email) {
    return NextResponse.json(null, {
      status: 422,
      statusText: "Please enter a valid email",
    });
  }

  if (!body.password) {
    return NextResponse.json(null, {
      status: 422,
      statusText: "Your password is not valid",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.password,
    },
  });

  return NextResponse.json(user, {
    status: 200,
    statusText: "User found",
  });
}
