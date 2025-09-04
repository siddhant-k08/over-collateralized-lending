"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { 
  BugAntIcon, 
  MagnifyingGlassIcon, 
  ChartBarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BoltIcon
} from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200/30 to-base-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center animate-fade-in">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  DeFi Lending
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-base-content/80 font-medium max-w-3xl mx-auto leading-relaxed">
                Secure, transparent, and efficient over-collateralized lending platform
              </p>
            </div>

            {/* Connected Address */}
            {connectedAddress && (
              <div className="flex justify-center items-center gap-3 mb-12 animate-slide-up">
                <span className="text-base-content/60 font-medium">Connected:</span>
                <div className="bg-base-200/50 backdrop-blur-sm rounded-full px-4 py-2 border border-base-300">
                  <Address address={connectedAddress} />
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
              <Link 
                href="/dashboard" 
                className="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <ChartBarIcon className="h-5 w-5" />
                Launch Dashboard
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-base-300">
                <Image
                  src="/hero.png"
                  width="800"
                  height="400"
                  alt="DeFi Lending Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Built with cutting-edge technology and security-first principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon className="h-8 w-8 text-primary-content" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-base-content">Secure & Trustless</h3>
              <p className="text-base-content/70 leading-relaxed">
                Your funds are protected by smart contracts with over-collateralization, ensuring maximum security.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CurrencyDollarIcon className="h-8 w-8 text-secondary-content" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-base-content">Competitive Rates</h3>
              <p className="text-base-content/70 leading-relaxed">
                Get the best lending and borrowing rates in the market with our optimized protocol.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BoltIcon className="h-8 w-8 text-accent-content" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-base-content">Lightning Fast</h3>
              <p className="text-base-content/70 leading-relaxed">
                Execute transactions instantly with our optimized smart contracts and gas-efficient design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Get Started
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Choose your path to start using our DeFi lending platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link 
              href="/dashboard" 
              className="group bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <BugAntIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-base-content">Dashboard</h3>
              </div>
              <p className="text-base-content/70 leading-relaxed mb-6">
                Tinker with your smart contracts, test functionality, and explore the protocol in detail.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                Start
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link 
              href="/blockexplorer" 
              className="group bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                  <MagnifyingGlassIcon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-base-content">Block Explorer</h3>
              </div>
              <p className="text-base-content/70 leading-relaxed mb-6">
                Explore your local transactions, track contract interactions, and monitor the blockchain.
              </p>
              <div className="flex items-center text-secondary font-medium group-hover:gap-2 transition-all duration-300">
                Explore Blocks
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
