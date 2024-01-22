"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function BaseNavigation() {
  const path = usePathname();

  return (
    <div className="flex justify-center gap-8 m-8 text-white border-b pb-8">
      <Link
        className={`${
          path === "/" ? "opacity-100" : "opacity-50"
        } hover:opacity-100`}
        href="/"
      >
        Reports
      </Link>
      <Link
        className={`${
          path === "/input-form" ? "opacity-100" : "opacity-50"
        } hover:opacity-100`}
        href="/input-form"
      >
        Create New Report
      </Link>
    </div>
  );
}
