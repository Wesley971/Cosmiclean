'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import RevealSection from './RevealSection'

const SLIDES = [
  { src: '/assets/prestations/1.jpg', alt: 'Nettoyage de vitres de maison' },
  { src: '/assets/prestations/2.jpg', alt: 'Nettoyage vitrine de commerce' },
  { src: '/assets/prestations/3.jpg', alt: 'Nettoyage de véranda' },
]

const CARDS = [
  {
    text: 'Nettoyage de vitres intérieures et extérieures',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#11cbd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" /><line x1="12" y1="4" x2="12" y2="20" /><line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    text: 'Vitrines de commerces et devantures',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#11cbd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l1-5h16l1 5" /><path d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><line x1="3" y1="9" x2="21" y2="9" />
      </svg>
    ),
  },
  {
    text: 'Baies vitrées, vérandas, verrières',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#11cbd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><rect x="8" y="12" width="8" height="8" /><line x1="12" y1="12" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    text: "Interventions ponctuelles ou contrats d'entretien régulier",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#11cbd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" />
      </svg>
    ),
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderWidth, setSliderWidth]   = useState(500)
  const [lightboxSrc, setLightboxSrc]   = useState<string | null>(null)

  const wrapperRef     = useRef<HTMLDivElement>(null)
  const autoRef        = useRef<ReturnType<typeof setInterval> | null>(null)
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const updateWidth = useCallback(() => {
    if (wrapperRef.current) setSliderWidth(wrapperRef.current.offsetWidth)
  }, [])

  const next = useCallback(() => setCurrentIndex(i => (i + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrentIndex(i => (i - 1 + SLIDES.length) % SLIDES.length), [])

  const startAuto = useCallback(() => { autoRef.current = setInterval(next, 5000) }, [next])
  const stopAuto  = useCallback(() => { if (autoRef.current) clearInterval(autoRef.current) }, [])

  useEffect(() => {
    updateWidth()
    startAuto()
    const onResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current)
      resizeTimerRef.current = setTimeout(() => { updateWidth(); setCurrentIndex(0) }, 100)
    }
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize); stopAuto() }
  }, [updateWidth, startAuto, stopAuto])

  /* Lightbox keyboard + scroll lock */
  useEffect(() => {
    if (!lightboxSrc) { document.body.style.overflow = ''; return }
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxSrc(null) }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [lightboxSrc])

  return (
    <RevealSection className="bg-white">
      <div className="section-container">
        {/* Title — full width above the flex row */}
        <h2 className="text-section-h2 font-serif font-bold text-cosmic-blue text-center mb-8">
          Nos prestations
        </h2>

        {/* Flex row: [cards grid | slider] */}
        <div className="flex justify-center items-start gap-8 flex-wrap">

          {/* Cards 2×2 */}
          <div className="flex-1 min-w-[280px] grid grid-cols-2 gap-4">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.13)]"
              >
                <div className="mb-3">{card.icon}</div>
                <p className="text-[0.95rem] text-[#444] leading-[1.55] m-0">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Photo slider */}
          <div
            ref={wrapperRef}
            className="relative w-full max-w-[500px] h-[300px] overflow-hidden rounded-2xl
              shadow-[0_12px_44px_rgba(0,0,0,0.12)] shrink-0 self-center"
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
          >
            {/* Track */}
            <div
              className="slider-track flex h-full"
              style={{ transform: `translateX(-${currentIndex * sliderWidth}px)` }}
            >
              {SLIDES.map(slide => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className="shrink-0 h-full object-cover cursor-zoom-in"
                  style={{ width: sliderWidth }}
                  onClick={() => setLightboxSrc(slide.src)}
                />
              ))}
            </div>

            {/* Arrows */}
            {(['left', 'right'] as const).map(dir => (
              <button
                key={dir}
                onClick={dir === 'left' ? prev : next}
                aria-label={dir === 'left' ? 'Image précédente' : 'Image suivante'}
                className={`absolute top-1/2 -translate-y-1/2 ${dir === 'left' ? 'left-3' : 'right-3'}
                  w-[38px] h-[38px] bg-white/[0.92] border-none rounded-full
                  flex items-center justify-center text-[1.1rem] text-cosmic-dark
                  cursor-pointer shadow-[0_2px_14px_rgba(0,0,0,0.12)] z-[5]
                  transition-all hover:bg-white hover:shadow-[0_4px_22px_rgba(0,0,0,0.18)] hover:scale-110
                  focus-visible:outline-2 focus-visible:outline-cosmic-cyan focus-visible:outline-offset-2`}
              >
                {dir === 'left' ? '←' : '→'}
              </button>
            ))}

            {/* Dots */}
            <div className="absolute bottom-[14px] left-0 right-0 flex justify-center gap-[7px] z-[5]">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Image ${i + 1}`}
                  className={`h-[7px] border-none cursor-pointer p-0 transition-all duration-300
                    ${i === currentIndex
                      ? 'bg-white w-[18px] rounded-[4px]'
                      : 'bg-white/45 w-[7px] rounded-full'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/[0.88] flex justify-center items-center z-[9999]
            cursor-zoom-out [-webkit-backdrop-filter:blur(5px)] backdrop-blur-[5px] animate-fade-in"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal
          aria-label="Image agrandie"
        >
          <img
            src={lightboxSrc}
            alt=""
            className="max-w-[92%] max-h-[92%] rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.6)] animate-zoom-in"
          />
        </div>
      )}
    </RevealSection>
  )
}
