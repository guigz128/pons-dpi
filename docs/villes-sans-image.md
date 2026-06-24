# Pages communes — 42 communes sans image hero

> État au 24/06/2026. 46/88 communes ont une image, **42 n'en ont pas**.
> Les pages s'affichent proprement sans (grille 1 colonne), mais une vraie photo
> renforce l'engagement + donne une image sociale dédiée.

## Règles
- **Vraies photos uniquement** (lieux réels) — source recommandée : **Wikimedia Commons** (licence CC BY-SA, comme les 46 existantes). Pas d'IA.
- Fichier : `public/images/villes/{slug}.webp` (convertir en WebP, ~1600px de large).
- Vérifier la licence + récupérer l'URL exacte du fichier sur Commons pour l'attribution.

## Bloc à coller dans `src/content/villes.js` (après `region:` de la commune)
```js
    image: {
      url: '/images/villes/{slug}.webp',
      alt: '{Sujet} à {Nom}',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:XXXXX',
    },
```

---

## Hérault — Vallée de l'Hérault (7) — secteur le plus photogénique
| Commune | slug | Sujet photo suggéré |
|---|---|---|
| Saint-Guilhem-le-Désert | `saint-guilhem-le-desert` | Abbaye de Gellone / village médiéval (UNESCO, plus beau village) |
| Gignac | `gignac` | Pont de Gignac (XVIIIᵉ, sur l'Hérault) ou tour de la Vierge |
| Aniane | `aniane` | Ancienne abbaye / hôtels particuliers du centre |
| Saint-Jean-de-Fos | `saint-jean-de-fos` | Pont du Diable (proche) ou village potier |
| Montpeyroux | `montpeyroux` | Village viticole perché / le Castellas |
| Saint-André-de-Sangonis | `saint-andre-de-sangonis` | Pont sur l'Hérault / centre |
| Le Pouget | `le-pouget` | Centre village / église |

## Hérault — Bassin de Thau (7)
| Commune | slug | Sujet photo suggéré |
|---|---|---|
| Balaruc-les-Bains | `balaruc-les-bains` | Presqu'île thermale sur l'étang de Thau |
| Balaruc-le-Vieux | `balaruc-le-vieux` | Circulade médiévale (village circulaire) |
| Mèze | `meze` | Port de pêche / mas conchylicoles sur Thau |
| Marseillan | `marseillan` | Port / chais Noilly Prat |
| Bouzigues | `bouzigues` | Tables ostréicoles sur l'étang de Thau |
| Poussan | `poussan` | Centre médiéval (circulade) |
| Gigean | `gigean` | Abbaye Saint-Félix de Montceau (ruines) / la Gardiole |

## Hérault — Arrière-pays de Thau (3)
| Commune | slug | Sujet photo suggéré |
|---|---|---|
| Loupian | `loupian` | Villa gallo-romaine (mosaïques) / basilique |
| Villeveyrac | `villeveyrac` | Abbaye de Valmagne (à proximité) |
| Montbazin | `montbazin` | Église / vestiges voie romaine |

## Hérault — Couronne nord / Pic Saint-Loup (7)
| Commune | slug | Sujet photo suggéré |
|---|---|---|
| Saint-Mathieu-de-Tréviers | `saint-mathieu-de-treviers` | Pic Saint-Loup en arrière-plan / château de Montferrand |
| Les Matelles | `les-matelles` | Village médiéval fortifié |
| Assas | `assas` | Château d'Assas |
| Teyran | `teyran` | Centre / domaine viticole |
| Saint-Vincent-de-Barbeyrargues | `saint-vincent-de-barbeyrargues` | Garrigue / vignes |
| Combaillaux | `combaillaux` | Garrigue / centre |
| Vailhauquès | `vailhauques` | Causse / garrigue |

## Hérault — Couronne est / Lunellois (7)
| Commune | slug | Sujet photo suggéré |
|---|---|---|
| Castries | `castries` | Château de Castries + aqueduc |
| Baillargues | `baillargues` | Golf de Massane / centre |
| Saint-Brès | `saint-bres` | Église fortifiée |
| Sussargues | `sussargues` | Centre village |
| Saint-Geniès-des-Mourgues | `saint-genies-des-mourgues` | Vignoble Muscat / centre |
| Restinclières | `restinclieres` | Domaine départemental de Restinclières (château) |
| Beaulieu | `beaulieu` | Vignes / garrigue |

## Hérault — Couronne ouest (4)
| Commune | slug | Sujet photo suggéré |
|---|---|---|
| Lavérune | `laverune` | Château des Évêques de Lavérune |
| Murviel-lès-Montpellier | `murviel-les-montpellier` | Oppidum gaulois (site archéologique) |
| Saussan | `saussan` | Village viticole / centre |
| Cournonsec | `cournonsec` | La Gardiole / garrigue |

## Gard — secteur nîmois / Camargue (7)
| Commune | slug | Sujet photo suggéré |
|---|---|---|
| Vauvert | `vauvert` | Centre / porte de la Camargue |
| Bellegarde | `bellegarde` | Canal du Rhône à Sète / moulin de Bellegarde |
| Marguerittes | `marguerittes` | Oliveraies (capitale de l'olivette) / centre |
| Manduel | `manduel` | Gare TGV Nîmes-Manduel / église |
| Milhaud | `milhaud` | Vignoble des Costières / centre |
| Générac | `generac` | Château / vignoble Costières |
| Garons | `garons` | Église / centre |

---

## Priorisation suggérée
1. **Vallée de l'Hérault** (Saint-Guilhem, Gignac, Montpeyroux…) — visuels exceptionnels, fort potentiel social/SEO image
2. **Bassin de Thau** (Mèze, Bouzigues, Marseillan…) — très photogéniques (étang, ports)
3. Couronnes nord/est/ouest + Gard — plus utilitaires, à compléter ensuite
