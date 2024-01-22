"use client";

import React from "react";
import BaseNavigation from "./BaseNavigation";

export default function BaseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-1 flex-col min-h-screen justify-center items-center">
      <BaseNavigation />
      {children}
    </div>
  );
}
