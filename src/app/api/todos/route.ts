import { NextRequest, NextResponse } from "next/server";
import dummyTodos from "../../../data/dummy.json";
import { fetchTodos, addTodo } from "@/data/firestore";

// 모든 할 일 가져오기
export const GET = async (request: NextRequest) => {
  const fetchedTodos = await fetchTodos();

  const response = {
    messsage: "message-test",
    data: fetchedTodos,
  };
  return NextResponse.json(response, { status: 200 });
};

// 할 일 추가
export const POST = async (request: NextRequest) => {
  const { title } = await request.json();

  if (title === undefined) {
    const errMessage = {
      message: "제목을 작성해주세요.",
    };
    return NextResponse.json(errMessage, { status: 422 });
  }

  const addedTodo = await addTodo(title);

  const response = {
    message: "할일 추가 성공",
    data: addedTodo,
  };

  return Response.json(response, { status: 201 });
};
