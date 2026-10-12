import { NextResponse } from "next/server";
import { sendEnquiryEmails } from "@/utils/email/sendEnquiryEmails";

export async function POST(req) {
  let payload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid enquiry details." }, { status: 400 });
  }

  const result = await sendEnquiryEmails(payload);
  return NextResponse.json(result.body, { status: result.status });
}
