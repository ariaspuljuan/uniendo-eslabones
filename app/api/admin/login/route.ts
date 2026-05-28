import { NextResponse } from "next/server";
import {
  adminSessionCookie,
  createAdminSessionToken,
  getAdminCredentials,
  getAdminSessionMaxAge,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    username?: string;
    password?: string;
  };
  const credentials = getAdminCredentials();

  if (
    body.username !== credentials.username ||
    body.password !== credentials.password
  ) {
    return NextResponse.json(
      { message: "Usuario o contraseña incorrectos." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminSessionCookie, await createAdminSessionToken(), {
    httpOnly: true,
    maxAge: getAdminSessionMaxAge(),
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
