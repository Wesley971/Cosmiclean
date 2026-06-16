export default function Footer() {
  return (
    <footer className="bg-cosmic-dark text-white/[0.72] border-t-[3px] border-cosmic-cyan mt-8">
      <div className="section-container py-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {/* Logo */}
          <div className="flex-1">
            <img
              src="/assets/logo-footer.png"
              alt="Logo Cosmiclean Nettoyage"
              className="logo-footer max-h-[110px] block"
            />
          </div>

          {/* Copyright */}
          <div className="flex-[2] text-right leading-[1.9] text-white/[0.58] text-[0.9rem]">
            <p>
              &copy; 2025 Cosmiclean Nettoyage
              <br />
              Tous droits réservés – Prestations sur devis uniquement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
