import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>HOME page Nave Bar</div>
      {children}
    </div>
  );
};

export default RootLayout;
