import Link from 'next/link'

export default function Hero() {
  return (
    <header className="relative overflow-hidden h-[95vh] min-h-[560px] flex items-center justify-center text-center text-white">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline=""
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.55]"
      >
        <source src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/header-bg.mp4`} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0 z-[1] pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-[2] px-8 max-w-[860px] mx-auto">
        <h1 className="text-hero-h1 font-serif font-bold text-white mb-[1.2rem]
          [text-shadow:0_2px_24px_rgba(0,0,0,0.22)] animate-fade-in-down">
          Cosmiclean Nettoyage
          <em className="block text-[0.58em] font-normal italic opacity-[0.88] mt-2 tracking-[0.01em] font-serif">
            Redonnez de l&apos;éclat à vos vitres
          </em>
        </h1>

        <p className="text-[1.15rem] mb-10 text-white/[0.88] animate-fade-in-up">
          Service soigné et professionnel pour maisons, vitrines et bureaux.
        </p>

        <Link
          href="#contact"
          className="inline-block bg-cosmic-cyan text-white px-10 py-4 text-[1.05rem] font-semibold
            tracking-[0.02em] rounded-lg no-underline
            shadow-[0_4px_24px_rgba(17,203,210,0.38)]
            transition-all hover:bg-cosmic-blue hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(17,203,210,0.48)]
            focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[3px]
            animate-fade-in-up-late"
        >
          Demander un devis gratuit
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2]" aria-hidden="true">
        <div
          className="w-6 h-6 border-r-[2.5px] border-b-[2.5px] border-white/65
            rotate-45 animate-scroll-bounce"
        />
      </div>
    </header>
  )
}
