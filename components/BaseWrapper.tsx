import React from "react";

export default function BaseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-1 flex-col min-h-screen justify-center items-center">
      {children}
    </div>
  );
}
