import React from "react";

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 className="text-2xl font-black my-10">
      {children}
    </h1>
  );
};

export default Heading;
