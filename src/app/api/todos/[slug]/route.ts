import { deleteATodo, fetchATodo } from "@/data/firestore";
import { NextRequest, NextResponse } from "next/server";

// 단일 조회
export const GET = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const searchParams = request.nextUrl.searchParams.get("search");
  console.log("searchParams: ", searchParams);

  const fetchedTodo = await fetchATodo(params.slug);

  if (fetchedTodo === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    messsage: "단일 할일 가져오기",
    data: fetchedTodo,
  };
  return NextResponse.json(response, { status: 200 });
};

// 할 일 단일 삭제 id
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const deletedTodo = deleteATodo(params.slug);

  if (deletedTodo === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    messsage: "단일 할일 삭제 성공",
    data: deletedTodo,
  };

  return NextResponse.json(response, { status: 200 });
};

// 할 일 단일 수정 id
export const POST = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { title, is_done } = await request.json();

  const editedTodo = {
    id: params.slug,
    title,
    is_done,
  };

  const response = {
    messsage: "단일 할일 수정 성공",
    data: editedTodo,
  };

  return NextResponse.json(response, { status: 200 });
};
