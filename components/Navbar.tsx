'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav
      className={`sticky top-0 z-[1000] flex justify-between items-center px-10 py-2
        border-b border-cosmic-cyan/10
        [-webkit-backdrop-filter:blur(14px)] backdrop-blur-[14px]
        transition-[background,box-shadow] duration-300
        ${scrolled
          ? 'bg-white/[0.97] shadow-[0_4px_28px_rgba(0,0,0,0.07)]'
          : 'bg-white/[0.88]'
        }`}
    >
      {/* Logo */}
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/logo.gif`}
        alt="Logo Cosmiclean Nettoyage"
        className={`logo-nav h-[50px] w-auto transition-transform duration-300 ${scrolled ? 'scale-[0.88]' : ''}`}
      />

      {/* Hamburger — mobile only */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10
          bg-transparent border border-transparent rounded-lg p-[6px] cursor-pointer
          transition-all hover:bg-cosmic-cyan/[0.06] hover:border-cosmic-cyan/25
          focus-visible:outline-2 focus-visible:outline-cosmic-cyan focus-visible:outline-offset-2"
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen ? 'true' : 'false'}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className={`block w-[22px] h-[2px] bg-cosmic-dark rounded transition-transform duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block w-[22px] h-[2px] bg-cosmic-dark rounded transition-all    duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block w-[22px] h-[2px] bg-cosmic-dark rounded transition-transform duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center">
        <Link
          href="#contact"
          className="bg-cosmic-cyan text-white px-6 py-[0.65rem] text-[0.9rem] font-semibold tracking-[0.02em]
            rounded-lg no-underline transition-all
            hover:bg-cosmic-blue hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(17,203,210,0.32)]
            focus-visible:outline-2 focus-visible:outline-cosmic-cyan focus-visible:outline-offset-[3px]"
        >
          Demander un devis
        </Link>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-[76px] left-0 right-0 bg-white px-6 py-5
          border-t border-cosmic-cyan/15 shadow-[0_8px_24px_rgba(0,0,0,0.07)] z-[999]">
          <Link
            href="#contact"
            onClick={close}
            className="block text-center w-full bg-cosmic-cyan text-white px-6 py-[0.65rem]
              text-[0.9rem] font-semibold tracking-[0.02em] rounded-lg no-underline"
          >
            Demander un devis
          </Link>
        </div>
      )}
    </nav>
  )
}
