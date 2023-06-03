import { NextResponse } from "next/server";

export async function GET() {
  const exampleTest = "Welcome to eshop API";
  return NextResponse.json(exampleTest);
}
