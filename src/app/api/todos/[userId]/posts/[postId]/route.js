import { connectToDB } from "@/app/helper/db";
import { NextResponse } from "next/server";
connectToDB();

export function DELETE(request, { params }) {
  console.log(params);
  return NextResponse.json(params);
}

export async function POST(request, { params }) {
  const jsonData = await request.json();
  console.log("Data is being Fetched");
  console.log(jsonData);

  return NextResponse.json(jsonData, {
    message: "Posting UserData ",
  });
}
