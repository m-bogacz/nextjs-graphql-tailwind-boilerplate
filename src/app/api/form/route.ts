import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body: unknown = await request.json();

	console.log("body =>", body);

	// if (body) {
	// 	console.log(body);
	// }

	return NextResponse.json({ message: "Hello world" });
}
