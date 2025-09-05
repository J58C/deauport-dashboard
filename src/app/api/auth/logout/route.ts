import { NextResponse } from "next/server";
import { cookies } from "next/headers";

async function nukeCookie(name: string) {
  const jar = cookies();
  (await jar).set(name, "", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    expires: new Date(0),
  });
  try { (await jar).delete(name); } catch {}
}

export async function POST(req: Request) {
  nukeCookie("deau_sess");
  const res = NextResponse.redirect(new URL("/", req.url));
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export async function GET(req: Request) {
  return POST(req);
}