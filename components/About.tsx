import RevealSection from './RevealSection'

export default function About() {
  return (
    <RevealSection className="bg-white">
      <div className="section-container">
        <h2 className="text-section-h2 font-serif font-bold text-cosmic-blue text-center mb-10">
          À propos de Cosmiclean
        </h2>

        <div className="flex items-start gap-14 flex-wrap md:flex-nowrap">
          {/* Photo */}
          <img
            src="/assets/photo-pri.jpg"
            alt="Prescilia Cardon - fondatrice de Cosmiclean"
            className="w-[260px] shrink-0 rounded-2xl shadow-[0_10px_36px_rgba(0,0,0,0.12)]
              border-4 border-cosmic-cyan mx-auto md:mx-0"
          />

          {/* Text */}
          <div className="flex-1 min-w-[260px] text-center md:text-left">
            {[
              "Je m'appelle Prescilia, fondatrice de Cosmiclean Nettoyage. Cette entreprise est née d'une reconversion, mais surtout d'un besoin profond : créer quelque chose qui me ressemble. Un service sérieux, soigné, et porté par des valeurs humaines.",
              "Le nettoyage de vitres, c'est plus que de la propreté. C'est offrir de la clarté, de la lumière, du bien-être. J'interviens avec rigueur et bienveillance, auprès de particuliers comme de professionnels, toujours avec le sourire et le souci du détail.",
              "Chaque client, chaque lieu est unique. Je m'engage à être à l'écoute, disponible et efficace. Cosmiclean, c'est mon projet de cœur : rendre les espaces plus nets, plus lumineux, et faire les choses proprement, dans tous les sens du terme.",
            ].map((text, i) => (
              <p key={i} className="text-[1.05rem] leading-[1.85] text-[#444] mb-5 last:mb-0">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
