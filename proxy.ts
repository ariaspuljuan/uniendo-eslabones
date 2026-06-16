import { NextRequest, NextResponse } from "next/server";
import { adminSessionCookie, verifyAdminSession } from "./src/lib/adminAuth";

const adminPath = "/gestion-ue";
const loginPath = `${adminPath}/login`;

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isLoginPage = pathname === loginPath;
  const token = request.cookies.get(adminSessionCookie)?.value;
  const isAuthenticated = await verifyAdminSession(token);

  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL(adminPath, request.url));
  }

  if (!isLoginPage && !isAuthenticated) {
    const loginUrl = new URL(loginPath, request.url);
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/gestion-ue/:path*"],
};
