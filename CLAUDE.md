# Pons DPI — CLAUDE.md

> Site vitrine + outil devis pour Guillaume Pons, diagnostiqueur immobilier à Montpellier.

---

## Projet

| Champ | Valeur |
|-------|--------|
| **Nom** | Pons DPI |
| **Nom complet** | Pons DPI — Diagnostics et Performance Immobilière |
| **Domaine** | pons-dpi.fr |
| **Pitch** | Diagnostics immobiliers à Montpellier et environs — réactivité, clarté, expertise |
| **Cible** | Propriétaires vendeurs/bailleurs, agences immo, notaires, syndics (Montpellier / Hérault 34) |
| **Type** | Site vitrine + formulaire devis avec calcul auto |
| **Modèle** | Pas d'abonnement — site vitrine uniquement |
| **WhatsApp** | 06 51 66 91 61 |

---

## Certifications & qualifications

> Guillaume Pons est titulaire du Titre professionnel Diagnostiqueur Immobilier (RNCP 38469, niveau 5).
> Toutes les certifications sont délivrées par un organisme certificateur accrédité COFRAC.

| Certification | Périmètre |
|--------------|-----------|
| **DPE sans mention** | Logements individuels et collectifs |
| **DPE avec mention** | Bâtiments tertiaires, immeubles, bâtiments publics |
| **Amiante sans mention** | Repérage vente, DTA, DAPP |
| **Amiante avec mention** | Avant travaux, avant démolition, IGH, ERP catégorie 1-4 |
| **Amiante SS4** | Opérateur de chantier — interventions sur matériaux amiantés |
| **Plomb** | Constat de Risque d'Exposition au Plomb (CREP) |
| **Gaz** | État de l'installation intérieure de gaz |
| **Électricité** | État de l'installation intérieure d'électricité |
| **Termites** | État relatif à la présence de termites et insectes xylophages |
| **Habilitation électrique BE** | Intervention sur installations électriques |

> **Différenciateur clé** : la certification DPE avec mention et amiante avec mention permet d'intervenir sur des bâtiments tertiaires, publics et industriels — un périmètre que beaucoup de diagnostiqueurs n'ont pas.

---

## Stack technique

| Couche | Techno | Notes |
|--------|--------|-------|
| **Frontend** | React 19 + Vite | SPA, lazy-loading par page |
| **Styles** | Tailwind CSS v4 | Plugin Vite, tokens CSS custom |
| **Icons** | Lucide React | Pas d'emojis dans le HTML |
| **Animations** | Framer Motion | Transitions de page, scroll reveals |
| **Formulaire devis** | React state | Calcul auto côté client, pas de backend |
| **Contact** | Brevo ou Formspree | Envoi email sans backend dédié |
| **Blog** | WordPress classique | Sur sous-domaine blog.pons-dpi.fr — voir section Blog |
| **WhatsApp** | Widget flottant | Lien wa.me/33651669161 |
| **Hébergement** | Vercel ou Netlify | Gratuit, déploiement auto via Git |
| **Analytics** | Plausible ou Umami | RGPD friendly, pas de cookies |
| **SEO** | react-helmet-async | Meta tags dynamiques par page |
| **Sitemap** | Génération statique | Pour Google Search Console |

> **Pas de backend Node/Express.** Le site est 100% statique côté hébergement.
> **Pas de PWA.** Pas de manifest.json, pas de service worker.
> Le formulaire de devis calcule en local. L'envoi du devis se fait via API email tierce.

---

## Architecture

```
pons-dpi/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx           # Nav principale (logo, liens, CTA tel)
│   │   │   ├── Footer.jsx           # Infos contact, liens légaux, zone intervention
│   │   │   ├── Layout.jsx           # Header + main + Footer
│   │   │   ├── MobileMenu.jsx       # Menu burger responsive
│   │   │   └── WhatsAppWidget.jsx   # Bouton flottant WhatsApp (bas droite)
│   │   ├── ui/
│   │   │   ├── Button.jsx           # Variantes : primary, secondary, outline, ghost
│   │   │   ├── Card.jsx             # Carte service / avantage
│   │   │   ├── Badge.jsx            # Certifications, labels
│   │   │   ├── Accordion.jsx        # FAQ
│   │   │   ├── Toast.jsx            # Confirmation envoi formulaire
│   │   │   └── ScrollReveal.jsx     # Animation au scroll (Framer Motion)
│   │   ├── sections/
│   │   │   ├── Hero.jsx             # Accroche + CTA devis/tel/WhatsApp
│   │   │   ├── Services.jsx         # Grille des diagnostics proposés
│   │   │   ├── Pricing.jsx          # Tarifs indicatifs par type de bien
│   │   │   ├── Process.jsx          # Comment ça marche (3-4 étapes)
│   │   │   ├── About.jsx            # Parcours Guillaume, différenciateurs
│   │   │   ├── Certifications.jsx   # Badges certifications COFRAC + RNCP
│   │   │   ├── Zone.jsx             # Zone d'intervention (carte ou liste)
│   │   │   ├── Testimonials.jsx     # Avis clients (à remplir plus tard)
│   │   │   ├── Faq.jsx              # Questions fréquentes
│   │   │   └── Cta.jsx              # Bannière CTA finale
│   │   └── devis/
│   │       ├── DevisForm.jsx         # Formulaire multi-étapes
│   │       ├── DevisStep1.jsx        # Type de bien (maison, appart, local, tertiaire)
│   │       ├── DevisStep2.jsx        # Surface, année construction, nb pièces
│   │       ├── DevisStep3.jsx        # Type de transaction (vente, location, avant travaux, avant démolition)
│   │       ├── DevisStep4.jsx        # Diagnostics auto-sélectionnés + prix
│   │       ├── DevisResult.jsx       # Récap + prix total + CTA WhatsApp/tel
│   │       ├── devisLogic.js         # Logique de calcul des diagnostics obligatoires
│   │       └── devisPricing.js       # Grille tarifaire (facilement éditable)
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page (sections assemblées)
│   │   ├── Services.jsx             # Détail de chaque diagnostic
│   │   ├── Devis.jsx                # Page formulaire devis
│   │   ├── About.jsx                # Page à propos complète
│   │   ├── Contact.jsx              # Formulaire contact + coordonnées
│   │   ├── MentionsLegales.jsx      # Mentions légales
│   │   └── NotFound.jsx             # 404
│   ├── content/
│   │   ├── services.js              # Données des diagnostics (nom, description, durée, prix)
│   │   ├── faq.js                   # Questions/réponses FAQ
│   │   └── zone.js                  # Communes couvertes
│   ├── hooks/
│   │   ├── useScrollReveal.js       # Intersection Observer
│   │   └── useDevis.js              # State machine formulaire devis
│   ├── lib/
│   │   ├── seo.js                   # Meta tags par page
│   │   └── contact.js               # Envoi formulaire (Brevo API / Formspree)
│   ├── App.jsx                      # Routes + Layout + Suspense
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind @theme + tokens + @font-face
├── public/
│   ├── fonts/                       # WOFF2 auto-hébergées
│   ├── images/                      # Photos terrain, certifications
│   ├── robots.txt
│   └── sitemap.xml
├── CLAUDE.md                        # Ce fichier
└── package.json
```

---

## Services proposés

> Ces données alimentent les pages Services, le formulaire Devis, et le SEO.

### Diagnostics pour la vente

| Diagnostic | Condition | Validité | Ce que je contrôle | Prix |
|-----------|-----------|----------|-------------------|------|
| **DPE** | Tous biens > 50m² | 10 ans | Consommation énergétique, émissions GES, classement A à G, recommandations de travaux | {{PRIX}}€ |
| **Amiante** | Permis avant 01/07/1997 | Illimité si négatif | Repérage des matériaux et produits contenant de l'amiante (flocages, calorifuges, faux plafonds, dalles, canalisations…) | {{PRIX}}€ |
| **Plomb (CREP)** | Construit avant 01/01/1949 | Illimité si négatif, 1 an si positif | Mesure de la concentration en plomb des revêtements (peintures), évaluation de l'état de conservation, risque d'exposition | {{PRIX}}€ |
| **Électricité** | Installation > 15 ans | 3 ans | Sécurité de l'installation électrique : disjoncteur, mise à la terre, liaisons équipotentielles, protection des personnes | {{PRIX}}€ |
| **Gaz** | Installation > 15 ans | 3 ans | État de l'installation intérieure de gaz : tuyauterie, raccordements, ventilation, appareils de combustion | {{PRIX}}€ |
| **Termites** | Zone arrêté préfectoral | 6 mois | Présence de termites et insectes xylophages dans les éléments en bois, les murs, les sols | {{PRIX}}€ |
| **ERP** | Zone à risques | 6 mois | État des risques naturels, miniers, technologiques, sismiques, radon — selon arrêté préfectoral | {{PRIX}}€ |
| **Mesurage Carrez** | Copropriété | Illimité sauf travaux | Surface privative du lot de copropriété selon la loi du 18 décembre 1996 | {{PRIX}}€ |
| **Audit énergétique** | DPE F ou G (maison) | 5 ans | Analyse approfondie des performances énergétiques, scénarios de travaux chiffrés, gains estimés | {{PRIX}}€ |
| **Diagnostic bruit** | Zone exposition bruit aéroport | Informatif | Évaluation de l'exposition sonore du bien | Inclus |
| **Assainissement** | Installation autonome | 3 ans | Conformité de l'installation d'assainissement non collectif | {{PRIX}}€ |

### Diagnostics pour la location

| Diagnostic | Condition | Validité |
|-----------|-----------|----------|
| **DPE** | Tous biens > 50m² | 10 ans |
| **Plomb (CREP)** | Construit avant 01/01/1949 | 6 ans |
| **Électricité** | Installation > 15 ans | 6 ans |
| **Gaz** | Installation > 15 ans | 6 ans |
| **ERP** | Zone à risques | 6 mois |
| **Surface habitable (Boutin)** | Location résidence principale | Illimité sauf travaux |
| **Diagnostic bruit** | Zone exposition bruit aéroport | Informatif |

### Diagnostics avant travaux / démolition

| Diagnostic | Détail |
|-----------|--------|
| **Amiante avant travaux** | Repérage exhaustif de tous les matériaux amiantés susceptibles d'être impactés par les travaux — obligation du maître d'ouvrage |
| **Amiante avant démolition** | Repérage de l'ensemble des matériaux et produits contenant de l'amiante dans le bâtiment avant démolition totale ou partielle |
| **DTA (Dossier Technique Amiante)** | Constitution et mise à jour du DTA pour les parties communes d'immeubles collectifs et les ERP |

### Services tertiaire & copropriété (grâce aux mentions)

| Service | Détail |
|---------|--------|
| **DPE tertiaire** | Bureaux, commerces, bâtiments publics — périmètre élargi grâce à la certification avec mention |
| **DPE immeuble** | DPE à l'échelle d'un bâtiment collectif d'habitation |
| **Amiante ERP / IGH** | Repérage dans les établissements recevant du public (catégorie 1-4), immeubles de grande hauteur, bâtiments industriels |

---

## Logique du formulaire devis

### Inputs utilisateur

```
1. Type de bien : maison | appartement | local commercial | bureau/tertiaire
2. Transaction : vente | location | avant travaux | avant démolition
3. Surface (m²)
4. Année de construction (ou tranche : avant 1949, 1949-1997, après 1997)
5. Copropriété : oui | non
6. Code postal (pour vérifier zone termites / ERP)
7. Installation gaz : oui | non | je ne sais pas
```

### Règles de calcul (devisLogic.js)

```javascript
function getDiagnosticsObligatoires({ typeBien, transaction, annee, surface, copro, codePostal, hasGaz }) {
  const diags = []

  if (surface >= 50) diags.push('dpe')

  if (annee < 1997) {
    if (transaction === 'vente') diags.push('amiante')
    if (transaction === 'avant_travaux') diags.push('amiante_avant_travaux')
    if (transaction === 'avant_demolition') diags.push('amiante_avant_demolition')
  }

  if (annee < 1949) diags.push('plomb')

  if (new Date().getFullYear() - annee > 15) diags.push('electricite')

  if ((new Date().getFullYear() - annee > 15) && hasGaz !== false) diags.push('gaz')

  if (isZoneTermites(codePostal)) diags.push('termites')

  diags.push('erp')

  if (transaction === 'vente' && copro) diags.push('carrez')

  if (transaction === 'location') diags.push('boutin')

  return diags
}
```

### Grille tarifaire (devisPricing.js)

```javascript
export const pricing = {
  dpe: { base: 0, label: 'DPE' },
  amiante: { base: 0, label: 'Amiante (vente)' },
  amiante_avant_travaux: { base: 0, label: 'Amiante avant travaux' },
  amiante_avant_demolition: { base: 0, label: 'Amiante avant démolition' },
  plomb: { base: 0, label: 'Plomb (CREP)' },
  electricite: { base: 0, label: 'Électricité' },
  gaz: { base: 0, label: 'Gaz' },
  termites: { base: 0, label: 'Termites' },
  erp: { base: 0, label: 'ERP' },
  carrez: { base: 0, label: 'Mesurage Carrez' },
  boutin: { base: 0, label: 'Surface habitable (Boutin)' },
  audit: { base: 0, label: 'Audit énergétique' },
  assainissement: { base: 0, label: 'Assainissement' },
}

export function calculateTotal(diags) {
  const subtotal = diags.reduce((sum, d) => sum + pricing[d].base, 0)
  if (diags.length >= 5) return Math.round(subtotal * 0.85)
  if (diags.length >= 3) return Math.round(subtotal * 0.90)
  return subtotal
}
```

---

## Blog

> Le blog est **séparé du site React** pour faciliter la publication d'articles sans toucher au code.

### Recommandation : WordPress classique sur `blog.pons-dpi.fr`

- Hébergement mutualisé (OVH, o2switch — ~3€/mois)
- Thème léger (GeneratePress ou flavor) avec les couleurs du site principal
- Plugin SEO : RankMath ou Yoast
- Lien "Blog" dans le header du site React pointe vers `blog.pons-dpi.fr`
- Facile à éditer — pas besoin de toucher au code

### Articles prioritaires

1. **"DPE 2026 : ce qui change pour les propriétaires à Montpellier"**
2. **"Quels diagnostics immobiliers pour vendre à Montpellier ?"**
3. **"Diagnostics obligatoires pour la location : guide complet"**
4. **"Combien coûte un diagnostic immobilier en 2026 ?"**
5. **"DPE F ou G : que faire avant de vendre ?"**
6. **"Amiante avant travaux : ce que le maître d'ouvrage doit savoir"**
7. **"Diagnostic immobilier tertiaire : bureaux, commerces, ERP"**

---

## WhatsApp Widget

```jsx
// WhatsAppWidget.jsx — bouton flottant bas droite
// Lien : https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers.
// Style : cercle vert #25D366, ombre, fixed bottom-right (bottom: 24px, right: 24px)
// Z-index élevé (50+)
// Visible sur toutes les pages
// Mobile : 56px. Desktop : 64px avec tooltip "Contactez-moi sur WhatsApp"
```

---

## Design system

| Token | Valeur | Notes |
|-------|--------|-------|
| **Font sans** | Inter | UI, corps de texte |
| **Font display** | — | À définir (optionnel, pour les titres) |
| **bg** | `#FAFAF9` | Fond page — stone-50 chaud |
| **surface** | `#FFFFFF` | Cartes, modales |
| **text** | `#1C1917` | Texte principal — stone-900 |
| **text-secondary** | `#78716C` | Texte secondaire — stone-500 |
| **border** | `#E7E5E4` | Bordures — stone-200 |
| **accent** | `#2563EB` | CTA, liens — blue-600 (confiance, pro) |
| **accent-hover** | `#1D4ED8` | Hover CTA — blue-700 |
| **accent-light** | `#EFF6FF` | Fond accent léger — blue-50 |
| **success** | `#16A34A` | DPE A-B, confirmations |
| **warning** | `#F59E0B` | DPE D-E, alertes |
| **danger** | `#DC2626` | DPE F-G, erreurs |
| **whatsapp** | `#25D366` | Bouton WhatsApp |
| **radius-sm** | 8px | Boutons, inputs |
| **radius-md** | 12px | Cartes |
| **radius-lg** | 16px | Modales, hero |

> **Direction design** : sobre, professionnel, confiance. Pas de look "startup".
> Beaucoup de blanc, typographie soignée, peu de couleurs.

---

## Zone d'intervention

```
Montpellier, Castelnau-le-Lez, Le Crès, Jacou, Clapiers,
Grabels, Juvignac, Saint-Jean-de-Védas, Lattes, Pérols,
Mauguio, Palavas-les-Flots, Villeneuve-lès-Maguelone,
Pignan, Fabrègues, Cournonterral, Saint-Georges-d'Orques,
Prades-le-Lez, Saint-Clément-de-Rivière, Saint-Gély-du-Fesc,
Lunel, Sète, Frontignan, Béziers (ponctuel)
```

---

## Pages

| Route | Page | Contenu |
|-------|------|---------|
| `/` | Home | Hero + Services + Tarifs + Process + Certifications + About + FAQ + CTA |
| `/services` | Services | Détail de chaque diagnostic (ancres) |
| `/services/:slug` | ServiceDetail | Page dédiée par diagnostic (SEO) |
| `/devis` | Devis | Formulaire multi-étapes avec calcul auto |
| `/a-propos` | About | Parcours Guillaume, valeurs, certifications |
| `/contact` | Contact | Formulaire + tel + email + WhatsApp + adresse |
| `/mentions-legales` | MentionsLegales | Mentions légales + RGPD |
| `/*` | 404 | Page non trouvée |

> **Blog** : hébergé séparément sur `blog.pons-dpi.fr` (WordPress). Lien dans le header.

---

## Différenciateurs à mettre en avant

- **Certifié avec mention** : DPE et amiante — intervient aussi sur le tertiaire, les ERP et les IGH
- **8 certifications COFRAC** : DPE, amiante, plomb, gaz, électricité, termites + habilitation électrique + SS4
- **Titre RNCP niveau 5** : formation complète et diplômante
- **Rapports clairs** : pas de jargon, lisibles par tous
- **Réactivité** : devis en ligne instantané, intervention sous 48h, joignable sur WhatsApp
- **Transparence tarifaire** : prix affichés, pas de surprise
- **Outils modernes** : site pro, devis en ligne, rapports numériques
- **Approche conseil** : pas juste un diagnostic, un accompagnement
- **Proximité** : basé à Prades-le-Lez, connaissance fine du marché local

---

## Conventions

### Code
- **Langue du code** : anglais (variables, fonctions, composants)
- **Langue de l'UI** : français (labels, messages, placeholders)
- **Nommage** : camelCase (JS), kebab-case (fichiers, routes)
- **1 composant par fichier**, nom = nom du fichier
- **Pas de TypeScript** — site vitrine, pas besoin
- **Pas de Redux/Zustand** — React Context si nécessaire
- **Pas de PWA** — pas de manifest.json, pas de service worker
- **Framer Motion** pour les animations

### SEO
- Meta tags par page (title, description, og:image)
- JSON-LD : LocalBusiness, Service, FAQ
- h1 uniques par page
- Images WebP, lazy-loaded, alt descriptifs
- Sitemap.xml + robots.txt

### Performance
- Lighthouse > 90 sur les 4 métriques
- Fonts WOFF2, font-display: swap
- Images optimisées
- Code splitting par page (React.lazy)

### Accessibilité
- Contraste WCAG AA
- Navigation clavier
- Labels sur tous les inputs
- Aria-labels sur les icônes

---

## Variables d'environnement

```env
# Contact form
VITE_CONTACT_API_URL=
VITE_CONTACT_API_KEY=

# Analytics
VITE_PLAUSIBLE_DOMAIN=pons-dpi.fr

# Site
VITE_SITE_URL=https://pons-dpi.fr
VITE_PHONE=0651669161
VITE_PHONE_DISPLAY=06 51 66 91 61
VITE_EMAIL=contact@pons-dpi.fr
VITE_WHATSAPP_URL=https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers.
```

---

## Checklist de lancement

### P0 — Site en ligne
- [ ] Landing page complète (toutes les sections)
- [ ] Page Services avec détail de chaque diagnostic
- [ ] Section Certifications (badges COFRAC, RNCP 38469)
- [ ] Formulaire devis avec calcul auto
- [ ] Page Contact fonctionnelle (envoi email)
- [ ] WhatsApp widget flottant sur toutes les pages
- [ ] Page À propos
- [ ] Mentions légales + RGPD
- [ ] SEO : meta tags, JSON-LD LocalBusiness, sitemap
- [ ] Google Business Profile créé et lié
- [ ] Responsive mobile-first
- [ ] Déployé sur Vercel/Netlify
- [ ] Domaine pons-dpi.fr configuré + SSL

### P1 — SEO & visibilité
- [ ] WordPress installé sur blog.pons-dpi.fr
- [ ] 3 premiers articles de blog publiés
- [ ] Google Search Console configuré
- [ ] Inscription annuaires (PagesJaunes, AlloVoisins)
- [ ] Pages communes dédiées (Montpellier, Lattes, Castelnau…)
- [ ] Schema.org Service pour chaque diagnostic

### P2 — Conversion
- [ ] Témoignages clients (après premières missions)
- [ ] Système d'avis Google intégré
- [ ] Plaquette commerciale PDF téléchargeable

---

## Instructions pour Claude Code

Quand tu génères le code de ce projet :

1. **Structure** : Vite config → index.css (tokens) → Layout (Header/Footer/WhatsAppWidget) → App.jsx (routes)
2. **Landing page** : Hero → Services → Pricing → Process → Certifications → About → FAQ → CTA
3. **Pages intérieures** : Services détail → Devis (formulaire multi-étapes) → Contact → About
4. **SEO** : meta tags par page → JSON-LD → sitemap → robots.txt
5. **Polish** : animations Framer Motion → responsive fine-tuning → Lighthouse audit

Respecte strictement :
- La structure de fichiers décrite ci-dessus
- Mobile-first, pas d'emojis HTML, Lucide pour les icônes
- UI en français, code en anglais
- Design sobre et professionnel — pas de look startup/SaaS
- Le formulaire de devis est le feature clé — fluide et convaincant
- Chaque page a un CTA clair (tel, WhatsApp ou devis)
- Le numéro de téléphone est cliquable partout (tel:)
- Le widget WhatsApp est visible sur toutes les pages
- Pas de PWA, pas de service worker, pas de manifest.json
- Le blog est externe (WordPress) — pas de pages blog dans React
