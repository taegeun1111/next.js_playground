import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const response = {
    messsage: "message-test",
    data: "data-test",
  };
  return NextResponse.json(response, { status: 200 });
};
