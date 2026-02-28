"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex w-full items-center justify-between px-4 md:px-16 py-[24px]">
      <span className="text-[22px] font-bold tracking-[-0.5px] text-[var(--bg-dark)]">
        BeautyBook
      </span>

      {/* Hamburger button - mobile only */}
      <button
        className="flex md:hidden flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-[2px] w-[20px] bg-[var(--bg-dark)] transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`block h-[2px] w-[20px] bg-[var(--bg-dark)] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-[2px] w-[20px] bg-[var(--bg-dark)] transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-[40px]">
        <a href="#features" className="text-[15px] text-[var(--secondary)]">功能介紹</a>
        <a href="#pricing" className="text-[15px] text-[var(--secondary)]">方案價格</a>
        <a href="#testimonials" className="text-[15px] text-[var(--secondary)]">商家見證</a>
        <a href="#faq" className="text-[15px] text-[var(--secondary)]">常見問題</a>
        <a
          href="#cta"
          className="rounded-full bg-[var(--primary)] px-[28px] py-[12px] text-[14px] font-medium text-[var(--white)]"
        >
          免費試用
        </a>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 z-50 flex md:hidden flex-col items-center gap-6 bg-white px-4 py-6 shadow-lg">
          <a href="#features" className="text-[15px] text-[var(--secondary)]" onClick={() => setMenuOpen(false)}>功能介紹</a>
          <a href="#pricing" className="text-[15px] text-[var(--secondary)]" onClick={() => setMenuOpen(false)}>方案價格</a>
          <a href="#testimonials" className="text-[15px] text-[var(--secondary)]" onClick={() => setMenuOpen(false)}>商家見證</a>
          <a href="#faq" className="text-[15px] text-[var(--secondary)]" onClick={() => setMenuOpen(false)}>常見問題</a>
          <a
            href="#cta"
            className="rounded-full bg-[var(--primary)] px-[28px] py-[12px] text-[14px] font-medium text-[var(--white)]"
            onClick={() => setMenuOpen(false)}
          >
            免費試用
          </a>
        </nav>
      )}
    </header>
  );
}
