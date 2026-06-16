# Cosmiclean Nettoyage — Site vitrine

## Description

Site vitrine one-page pour Cosmiclean Nettoyage, entreprise de nettoyage de vitres professionnelle basée dans le secteur de Valenciennes (Vieux-Condé, Péruwelz et environs).

Le site présente les prestations, l'identité de la fondatrice, les zones d'intervention et facilite la prise de contact via formulaire, WhatsApp, téléphone et e-mail.

---

## Stack technique

- HTML5 sémantique
- CSS3 vanilla (Flexbox, CSS Grid, custom properties, animations, media queries)
- JavaScript vanilla — aucune dépendance externe (slider, lightbox, formulaire, IntersectionObserver, hamburger menu)
- Google Maps Embed (sans clé API)
- Getform.io pour la réception des soumissions de formulaire
- Google Fonts : Playfair Display (titres) + Inter (texte courant)
- Déployé sur GitHub Pages

---

## Structure du projet

```
cosmiclean/
├── index.html                   # Page unique — tout le contenu
├── style.css                    # Feuille de styles principale
├── README.md
└── assets/
    ├── logo.gif                 # Logo navbar (animation GIF)
    ├── logo-footer.png          # Logo footer (fond sombre)
    ├── header-bg.mp4            # Vidéo hero plein écran
    ├── photo-pri.jpg            # Portrait de la fondatrice
    ├── marker-cosmiclean.png    # Marqueur carte (asset disponible)
    ├── bg-illustration.png      # Illustration (non utilisée — conservée)
    └── prestations/
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
```

> Tous les scripts JavaScript sont inlinés en fin de `<body>` — il n'y a pas de fichier JS séparé.

---

## Sections

| Ordre | Identifiant CSS | Contenu |
|-------|-----------------|---------|
| 1 | `.navbar` | Logo GIF + bouton « Demander un devis » + menu hamburger mobile |
| 2 | `.hero` | Vidéo plein écran (`header-bg.mp4`) + overlay gradient + accroche + CTA + indicateur de scroll |
| 3 | `.about` | Portrait de la fondatrice + texte de présentation en flex côte-à-côte |
| 4 | `.zone` | Carte Google Maps (embed sans clé) centrée sur Valenciennes |
| 5 | `.services` | Titre pleine largeur + grille 2×2 de cards (icônes SVG) + slider photo avec dots et autoplay |
| 6 | `#contact .contact` | Formulaire en 2 colonnes (nom, e-mail, téléphone, besoin, disponibilités) + canaux directs (WhatsApp, téléphone, e-mail) |
| 7 | `.footer` | Logo footer + copyright sur fond `#0a2c36` |

La lightbox (zoom sur les photos du slider) est un overlay `position: fixed` déclenché au clic.

---

## Améliorations apportées

### Corrections de bugs (audit initial)

1. **Scripts hors `<body>`** — Les scripts Swiper étaient placés entre `</head>` et `<body>`, position HTML invalide. Déplacés en fin de `<body>`.
2. **Mismatch de classe CSS** — Le CSS ciblait `.about-content` mais le HTML utilisait `.about-photo-text`, cassant la mise en page flex photo/texte. Classe corrigée.
3. **Débordement des images du slider** — Les images avaient une largeur fixe ne correspondant pas au wrapper (`object-fit: contain` avec espaces vides). Remplacement par `object-fit: cover` et calcul dynamique de la largeur via `sliderWrapper.offsetWidth` en JS (recalcul à chaque `resize`).
4. **Swiper importé mais inutilisé** — SwiperJS (CSS + JS, ~50 Ko) était chargé sans aucun élément `.swiper` dans le DOM. Supprimé entièrement.
5. **Clé Google Maps API exposée** — La clé `AIzaSy...` était visible en clair dans le HTML public. Remplacée par un embed standard sans clé : `maps.google.com/maps?q=...&output=embed`.

### Redesign visuel complet

- Typographie repensée : Playfair Display pour les titres, Inter pour le texte courant
- Hero : vidéo plein écran avec overlay gradient sombre, animation `fadeInDown` / `fadeInUp` sur le contenu, indicateur de scroll animé
- Section À propos : mise en page flex photo + texte côte à côte, photo avec bordure cyan et ombre
- Section prestations : liste `<ul>` remplacée par 4 cards en grille 2×2 avec icônes SVG inline et effet hover (`translateY(-4px)`)
- Slider redessiné : `max-width: 500px`, `height: 300px`, dots de navigation, autoplay 5 s, pause au survol, lightbox au clic
- Formulaire contact : 2 colonnes (nom + e-mail) via CSS Grid + 3 canaux de contact en cards cliquables
- Footer sobre sur fond `#0a2c36` avec `mix-blend-mode: screen` sur le logo

### Optimisations de layout

- Suppression de tous les séparateurs visuels inter-sections (dégradés, bandeaux) → `padding: 80px 0` uniforme par section
- Suppression de `body::before` (illustration de fond) → `body { background: #ffffff }`
- Backgrounds alternés par section : blanc (`#ffffff`) pour About et Services, vert très clair (`#f0f8f8`) pour Zone et Contact
- Structure HTML de la section services restructurée : `<h2>Nos prestations</h2>` sorti du flex row, positionné au-dessus en pleine largeur ; `.services-layout` ne contient plus que `[cards | slider]`

### Dark mode & logos

- `color-scheme: light only` dans `:root` + `<meta name="color-scheme" content="light">` pour bloquer le dark mode automatique du navigateur
- `mix-blend-mode: multiply` sur le logo navbar (fond blanc du GIF disparaît sur fond blanc)
- `mix-blend-mode: screen` sur le logo footer (fond blanc du PNG disparaît sur fond sombre)

### Compatibilité navigateurs (Edge DevTools)

- `image-rendering` : ajout de `-webkit-optimize-contrast` avant `crisp-edges` (Safari/WebKit)
- `backdrop-filter` : `-webkit-backdrop-filter` placé **avant** `backdrop-filter` dans toutes les occurrences (navbar, lightbox) — ordre conventionnel vendor-prefix avant propriété standard
- `forced-color-adjust: none` : supprimé de `.logo` et `.footer-logo` — non supporté sur Safari/iOS ; `mix-blend-mode` gère déjà l'effet visuellement sur tous les navigateurs
- `<video>` : ajout de `webkit-playsinline` (iOS 8/9) et `disablepictureinpicture` ; Firefox autorise l'autoplay inline sur les vidéos `muted` sans nécessiter `playsinline`
- `referrerpolicy` sur l'iframe Maps : `no-referrer-when-downgrade` remplacé par `strict-origin-when-cross-origin` (nouveau défaut navigateurs modernes, meilleure sécurité, supporté Firefox 87+, Safari 14+, Edge 85+)
- Styles inline déplacés vers `style.css` : `style="border:0; border-radius:12px"` sur `<iframe>` → `.zone iframe {}` ; bloc `<style>` dans `<head>` (règle `body.no-js section`) → `style.css` ; `style="display:none"` sur `<input type="hidden">` supprimé (comportement natif HTML)

---

## Déploiement

### GitHub Pages (méthode recommandée)

```bash
# 1. Initialiser le dépôt si ce n'est pas déjà fait
git init
git add index.html style.css assets/ README.md
git commit -m "Initial commit"

# 2. Créer le dépôt sur GitHub puis pousser
git remote add origin https://github.com/<votre-compte>/cosmiclean.git
git push -u origin main

# 3. Activer GitHub Pages
# → Settings > Pages > Source : Deploy from a branch > main / (root)
```

Le site sera disponible à l'adresse `https://<votre-compte>.github.io/cosmiclean/`.

### Localement

Ouvrir `index.html` directement dans un navigateur, ou utiliser un serveur local pour éviter les restrictions CORS sur la vidéo :

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

---

## Notes

- Le formulaire utilise [Getform.io](https://getform.io) — l'endpoint `https://getform.io/f/aolowegb` est déjà configuré dans le HTML. Aucune installation backend nécessaire.
- La carte Google Maps fonctionne sans clé API via l'embed public. Aucun quota facturable.
- L'animation d'apparition des sections repose sur `IntersectionObserver`. La classe `no-js` sur `<body>` garantit l'affichage immédiat si le JavaScript est désactivé.
