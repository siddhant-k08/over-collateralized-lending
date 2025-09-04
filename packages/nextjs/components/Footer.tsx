import React from "react";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { 
  CurrencyDollarIcon, 
  MagnifyingGlassIcon, 
  HeartIcon,
  CodeBracketSquareIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <footer className="bg-base-200/50 border-t border-base-300">
      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col md:flex-row gap-3 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div className="bg-base-100 rounded-full px-4 py-2 shadow-lg border border-base-300">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CurrencyDollarIcon className="h-4 w-4 text-primary" />
                  <span className="text-base-content">${nativeCurrencyPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
            {isLocalNetwork && (
              <>
                <Faucet />
                <Link 
                  href="/blockexplorer" 
                  className="btn btn-primary btn-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  <span>Explorer</span>
                </Link>
              </>
            )}
          </div>
          <SwitchTheme className="pointer-events-auto" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-content font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="font-space-grotesk font-bold text-xl text-base-content">DeFi Lending</h3>
                <p className="text-sm text-base-content/60">Secure Over-collateralized Loans</p>
              </div>
            </div>
            <p className="text-base-content/70 max-w-md leading-relaxed">
              A modern DeFi lending platform built with cutting-edge technology, 
              providing secure and efficient over-collateralized lending services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/dashboard" className="text-base-content/70 hover:text-primary transition-colors duration-200">
                  Dashboard
                </Link>
              </li>
              {/* <li>
                <Link href="/debug" className="text-base-content/70 hover:text-primary transition-colors duration-200">
                  Debug Contracts
                </Link>
              </li> */}
              <li>
                <Link href="/blockexplorer" className="text-base-content/70 hover:text-primary transition-colors duration-200">
                  Block Explorer
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-base-content mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/scaffold-eth/se-2" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors duration-200"
                >
                  <CodeBracketSquareIcon className="h-4 w-4" />
                  Fork on GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors duration-200"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  Support Chat
                </a>
              </li>
              <li>
                <a 
                  href="https://buidlguidl.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors duration-200"
                >
                  <BuidlGuidlLogo className="w-4 h-4" />
                  BuidlGuidl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-base-content/60">
              <p>Built with</p>
              <HeartIcon className="h-4 w-4 text-red-500" />
              <p>using</p>
              <CommandLineIcon className="h-4 w-4 text-primary" />
              <p>Scaffold-ETH 2</p>
            </div>
            <div className="text-sm text-base-content/60">
              © 2024 DeFi Lending Platform. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
