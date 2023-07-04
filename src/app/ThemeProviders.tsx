"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import Loading from "@/shared/Loading/UI/loading";

export default function ThemeProviders({ children }: { children: any }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading className="main" />;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
