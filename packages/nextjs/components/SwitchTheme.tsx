"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-12 h-12 rounded-full bg-base-200 animate-pulse ${className}`}></div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={`group relative w-12 h-12 rounded-full bg-base-200 hover:bg-base-300 border border-base-300 hover:border-primary/50 transition-all duration-300 hover:shadow-glow ${className}`}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-6 h-6">
          <SunIcon 
            className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-500 ${
              isDarkMode 
                ? 'opacity-0 rotate-180 scale-0' 
                : 'opacity-100 rotate-0 scale-100'
            }`} 
          />
          <MoonIcon 
            className={`absolute inset-0 w-6 h-6 text-slate-600 transition-all duration-500 ${
              isDarkMode 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-180 scale-0'
            }`} 
          />
        </div>
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
    </button>
  );
};
