# Pages communes — images hero

> **État au 24/06/2026 : 88/88 communes illustrées.** Les 42 communes qui manquaient
> d'image ont été traitées automatiquement (Wikimedia Commons). Ce doc sert désormais
> de référence pour illustrer une **nouvelle** commune ajoutée à `villes.js`.

## Méthode automatique (recommandée)

Le script résout l'article Wikipédia FR de la commune, récupère l'image principale
(`prop=pageimages`), filtre blasons/cartes/SVG, télécharge, convertit en WebP
(cwebp, 1600px, q80), récupère l'attribution Commons, puis patche `villes.js`.

```bash
# 1. récupérer + convertir + patcher toutes les communes sans image
node scripts/fetch-ville-images.mjs

# variantes
node scripts/fetch-ville-images.mjs --only=meze,gignac   # cibler des slugs
node scripts/fetch-ville-images.mjs --dry-run            # voir l'image choisie sans rien télécharger
node scripts/fetch-ville-images.mjs --no-patch           # télécharger sans toucher villes.js

# 2. si le patch automatique échoue (cf. formats mixtes ci-dessous)
node scripts/patch-ville-images.mjs                      # re-patche depuis le rapport
```

- Sortie images : `public/images/villes/{slug}.webp`
- Rapport : `scripts/.ville-images-report.json` (slug, fichier, licence, auteur)
- Toujours **vérifier visuellement** quelques images après coup (l'algo Wikipédia peut
  rarement choisir une image peu représentative).

## Bloc `image:` (si ajout manuel)

```js
    image: {
      url: "/images/villes/{slug}.webp",
      alt: "Vue de {Nom}, {Département}",
      credit: "Wikimedia Commons — {licence}",
      attribution_url: "https://commons.wikimedia.org/wiki/File:{Fichier}",
    },
```

## ⚠️ Formats mixtes dans villes.js

Deux styles de sérialisation cohabitent :
- **46 communes « historiques »** : guillemets **simples** (`slug: 'montpellier'`).
- **42 communes récentes** : guillemets **doubles** (`slug: "meze"`).

Le patch (`patch-ville-images.mjs`) gère les deux. À garder en tête pour tout
script qui édite `villes.js` par regex.
