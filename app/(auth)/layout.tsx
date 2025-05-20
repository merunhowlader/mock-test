import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Hello nav</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
