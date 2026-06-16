import RevealSection from './RevealSection'

export default function Zone() {
  return (
    <RevealSection className="bg-cosmic-light text-center">
      <div className="section-container">
        <h2 className="text-section-h2 font-serif font-bold text-cosmic-blue mb-6">
          Zones desservies
        </h2>
        <p className="text-[1.05rem] text-[#666] leading-[1.85] max-w-[680px] mx-auto mb-8">
          Je me déplace dans tout le secteur de Valenciennes, Vieux-Condé, Péruwelz et les environs.
        </p>
        <iframe
          src="https://maps.google.com/maps?q=Valenciennes+Nord+France&z=10&hl=fr&output=embed"
          width="100%"
          height="350"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Zone d'intervention Cosmiclean Nettoyage"
          className="map-iframe shadow-[0_6px_28px_rgba(0,0,0,0.08)] block mt-6"
        />
      </div>
    </RevealSection>
  )
}
