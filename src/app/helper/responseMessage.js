import { NextResponse } from "next/server";

export const getResponseMessage = (message, statusCode, SuccessStatus) => {
  return NextResponse.json(
    {
      message: message,
      success: SuccessStatus,
    },
    {
      status: statusCode,
    }
  );
};
