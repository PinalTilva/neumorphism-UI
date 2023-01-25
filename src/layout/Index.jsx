import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="h-screen space-y-4 bg-slate-200 w-full flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
