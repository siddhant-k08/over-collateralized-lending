"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, BugAntIcon, HomeIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <ChartBarIcon className="h-4 w-4" />,
  },
  // {
  //   label: "Debug",
  //   href: "/debug",
  //   icon: <BugAntIcon className="h-4 w-4" />,
  // },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive 
                  ? "bg-primary text-primary-content shadow-glow" 
                  : "hover:bg-base-200 hover:text-primary transition-all duration-200"
              } flex items-center gap-2 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="lg:hidden" ref={burgerMenuRef}>
              <button
                className="p-2 rounded-lg hover:bg-base-200 transition-colors duration-200"
                onClick={() => setIsDrawerOpen(prev => !prev)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              {isDrawerOpen && (
                <div className="absolute top-16 left-4 right-4 bg-base-100 rounded-xl shadow-lg border border-base-300 p-4 animate-slide-up">
                  <ul className="space-y-2">
                    <HeaderMenuLinks />
                  </ul>
                </div>
              )}
            </div>
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
                <span className="text-primary-content font-bold text-lg">D</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-space-grotesk font-bold text-lg text-base-content group-hover:text-primary transition-colors duration-200">
                  DeFi Lending
                </h1>
                <p className="text-xs text-base-content/60">Secure Over-collateralized Loans</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              <HeaderMenuLinks />
            </ul>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center gap-3">
            <FaucetButton />
            <RainbowKitCustomConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};
