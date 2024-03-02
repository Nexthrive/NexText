// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const cookieHeader = request.headers.get("cookie");

	if (!cookieHeader || !cookieHeader.includes("jwt=")) {
		console.error("JWT Token is undefined");
		return NextResponse.redirect(new URL("/login", request.url));
	}

	const jwtCookie = cookieHeader
		.split(";")
		.find((cookie) => cookie.trim().startsWith("jwt="))
		?.split("=")[1];

	if (!jwtCookie) {
		console.error("JWT Token is still undefined");
		return NextResponse.redirect(new URL("/login", request.url));
	}

	try {
		return NextResponse.next();
	} catch (error) {
		console.error("JWT validation failed:", error);
		return NextResponse.redirect(new URL("/login", request.url));
	}
}

export const config = {
	matcher: "/chat",
};
