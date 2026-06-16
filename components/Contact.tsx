'use client'

import { useState, useRef } from 'react'
import RevealSection from './RevealSection'

const CHANNELS = [
  {
    href: 'https://wa.me/33768728002',
    label: 'WhatsApp',
    target: '_blank' as const,
    rel: 'noopener noreferrer',
    className: 'text-[#128c7e] hover:border-[#25D366] hover:shadow-[0_6px_22px_rgba(37,211,102,0.15)]',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#25D366] shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    href: 'tel:+33768728002',
    label: '06 78 72 80 02',
    className: 'text-[#333] hover:border-cosmic-cyan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    href: 'mailto:cosmiclean.nettoyage@gmail.com',
    label: 'cosmiclean.nettoyage@gmail.com',
    className: 'text-[#333] hover:border-cosmic-blue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full px-[1.1rem] py-[0.95rem] border-[1.5px] border-[#d4e8eb] rounded-[9px] font-sans text-[0.97rem] text-[#333] bg-white leading-[1.5] transition-all focus:border-cosmic-cyan focus:outline-none focus:shadow-[0_0_0_3px_rgba(17,203,210,0.13)]'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const r = await fetch('https://getform.io/f/aolowegb', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      setLoading(false)
      if (r.ok) {
        formRef.current?.reset()
        setSuccess(true)
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setLoading(false)
      alert('Erreur réseau. Veuillez réessayer.')
    }
  }

  return (
    <RevealSection id="contact" className="bg-cosmic-light text-center">
      <div className="section-container">
        <h2 className="text-section-h2 font-serif font-bold text-cosmic-blue mb-4">
          Demander un devis
        </h2>
        <p className="text-[1.05rem] text-[#666] leading-[1.85] max-w-[680px] mx-auto mb-8">
          Pour toute demande, remplissez le formulaire ci-dessous ou contactez-moi directement.
          Je vous répondrai dans les plus brefs délais.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-4 max-w-[620px] mx-auto mb-10 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text"  name="nom"    placeholder="Votre nom"    required className={inputClass} />
            <input type="email" name="email"  placeholder="Votre e-mail" required className={inputClass} />
          </div>
          <input
            type="tel"
            name="telephone"
            placeholder="Votre numéro de téléphone (facultatif)"
            className={inputClass}
          />
          <textarea
            name="besoin"
            placeholder="Décrivez votre besoin (ex : vitres maison, véranda…)"
            required
            className={`${inputClass} resize-y min-h-[110px]`}
          />
          <textarea
            name="disponibilites"
            placeholder="Proposez 2 ou 3 créneaux qui vous conviennent (ex : mardi matin, jeudi 14h…)"
            required
            className={`${inputClass} resize-y min-h-[110px]`}
          />
          <input type="hidden" name="_gotcha" />

          <button
            type="submit"
            disabled={loading}
            className="bg-cosmic-cyan text-white px-8 py-4 mt-1 border-none rounded-[9px] cursor-pointer
              font-sans text-[1rem] font-semibold tracking-[0.025em] transition-all
              hover:not-disabled:bg-cosmic-blue hover:not-disabled:-translate-y-[2px]
              hover:not-disabled:shadow-[0_6px_22px_rgba(17,203,210,0.38)]
              disabled:opacity-65 disabled:cursor-not-allowed
              focus-visible:outline-2 focus-visible:outline-cosmic-cyan focus-visible:outline-offset-[3px]"
          >
            {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
          </button>
        </form>

        {success && (
          <p className="max-w-[620px] mx-auto mb-6 px-6 py-4 bg-[#e8f9f1] border-[1.5px] border-[#25D366]
            rounded-[10px] text-[#0a6240] font-semibold text-[0.97rem] text-center animate-fade-in-up">
            Merci ! Je vous recontacte rapidement.
          </p>
        )}

        {/* Contact channels */}
        <div className="flex justify-center flex-wrap gap-4 mt-2">
          {CHANNELS.map(ch => (
            <a
              key={ch.href}
              href={ch.href}
              target={ch.target}
              rel={ch.rel}
              className={`inline-flex items-center gap-[0.65rem] px-6 py-[0.85rem]
                border-[1.5px] border-[#d4e8eb] rounded-xl no-underline font-sans text-[0.92rem]
                font-medium bg-white transition-all
                hover:-translate-y-[3px] hover:shadow-[0_6px_22px_rgba(0,0,0,0.08)]
                focus-visible:outline-2 focus-visible:outline-cosmic-cyan focus-visible:outline-offset-2
                ${ch.className}`}
            >
              {ch.icon}
              {ch.label}
            </a>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
