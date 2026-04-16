import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, company, phone, email, adSpend, challenge } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  // Log the submission (replace with Resend or similar later)
  console.log("Contact form submission:", {
    name,
    company,
    phone,
    email,
    adSpend,
    challenge,
    submittedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
