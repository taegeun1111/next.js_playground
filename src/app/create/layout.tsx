import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <form>
      <h2>Create2</h2>
      {children}
    </form>
  );
};

export default layout;
