import React from "react";

const Read = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  return (
    <div className="p-4">
      <span>Read</span>
      <div>ID: {id}</div>
    </div>
  );
};

export default Read;
