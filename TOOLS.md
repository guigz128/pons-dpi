# Pons DPI — Outils SEO / API

Les outils SEO (indexation Google/Bing, audits, recherche d'audience) vivent dans
**content-factory** (`~/Desktop/Guillaume/Claude/Sites/content-factory`). On ne les
duplique pas : `scripts/cf.sh` est un **pont** qui les appelle pré-câblés sur le site
`pons-dpi` (injecte `--site pons-dpi`). Source unique, secrets et config restent côté
content-factory.

```bash
bash scripts/cf.sh <commande> [args]
bash scripts/cf.sh help          # liste complète
npm run seo -- <commande> [args] # équivalent
```

> **Override du chemin** si content-factory bouge : `CF_ROOT=/chemin bash scripts/cf.sh ...`

---

## Indexation Google

| Commande | npm | Description |
|---|---|---|
| `cf.sh index --slugs "a,b"` | `npm run seo:index -- --slugs "a,b"` | Ping Indexing API (200 URLs/jour) |
| `cf.sh index --from-sitemap` | — | Ping toutes les URLs du sitemap |
| `cf.sh index --slugs "x" --delete` | — | Désindexation propre (URL_DELETED) |
| `cf.sh crawl --slugs "a,b"` | `npm run seo:crawl -- --slugs "a,b"` | État d'indexation (URL Inspection API) |
| `cf.sh crawl --from-sitemap` | — | Inspecte toutes les URLs du sitemap |
| `cf.sh submit-sitemap --list` | `npm run seo:submit-sitemap -- --list` | Liste / soumet le sitemap à Search Console |
| `cf.sh reindex [slug1,slug2]` | `npm run seo:reindex` | Health-check 200 puis ping post-déploiement |

Les slugs ciblent le blog : `slug` → `https://www.pons-dpi.fr/blog/<slug>/`.

## Bing / IndexNow

| Commande | npm | Description |
|---|---|---|
| `cf.sh index-bing --slugs "a,b"` | `npm run seo:index-bing -- --slugs "a,b"` | Ping IndexNow (Bing) |
| `cf.sh index-bing --from-sitemap` | — | Tout le sitemap |
| `cf.sh submit-sitemap-bing` | — | Soumet le sitemap à Bing |

## Audits SEO

| Commande | npm | Description |
|---|---|---|
| `cf.sh audit-gsc` | `npm run seo:audit-gsc` | Audit indexation consolidé (tous sitemaps) |
| `cf.sh audit-onpage --top 20` | `npm run seo:audit-onpage` | Titres, meta, Hn, mots-clés |
| `cf.sh audit-links --internal-only` | `npm run seo:audit-links` | Liens cassés (`--dry-run`, `--auto-unlink`) |
| `cf.sh audit-internal` | — | Maillage interne |
| `cf.sh audit-images` | — | Alt manquants, poids, formats |
| `cf.sh audit-perf --strategy mobile` | `npm run seo:audit-perf` | PageSpeed / Web Vitals (`--url`, `--slugs`) |
| `cf.sh audit-tags` | — | Meta tags / Open Graph / JSON-LD |

## Audience / recherche

| Commande | npm | Description |
|---|---|---|
| `cf.sh queries --days 30` | `npm run seo:queries -- --days 30` | Vraies requêtes Search Console |
| `node scripts/seo-reminder.mjs` | `npm run seo:reminder` | Check indexation + **email Resend** (rappel post-ping). `--dry` = sans email |
| `cf.sh reddit --subreddit immobilier --period year` | — | Thèmes/questions d'un subreddit (pas de `--site`) |

---

## Workflow type — après publication d'articles blog

```bash
# 1. (le blog se rebuild auto via Cloudflare Pages au push sur main)
# 2. Ping Google une fois les URLs live :
npm run seo:reindex                          # derniers slugs dispatchés
# ou ciblé :
bash scripts/cf.sh index --slugs "dpe-2026-montpellier,prix-diagnostic"
# 3. Bing :
bash scripts/cf.sh index-bing --from-sitemap
# 4. Vérifier 48 h plus tard :
bash scripts/cf.sh crawl --from-sitemap
```

## Audit SEO mensuel

```bash
npm run seo:audit-gsc                         # état indexation
bash scripts/cf.sh queries --days 30          # ce que l'audience cherche
bash scripts/cf.sh audit-perf --strategy mobile
```

---

## Prérequis & notes

- **Node 20+** (testé Node 24). Les scripts utilisent le `node_modules`, le `.env`
  et `secrets/gsc-sa.json` de content-factory — rien à installer ici.
- **Service account GSC** : `content-factory-indexing@content-factory-seo.iam.gserviceaccount.com`
  est Propriétaire de `sc-domain:pons-dpi.fr` (indexation + inspection opérationnelles).
- **Config du site** : `content-factory/config/sites/pons-dpi.yaml` (domaine, repo blog, GSC property).
- **Ne jamais committer de secrets ici** — ils restent dans content-factory (gitignorés).
- Les **rapports** (JSON/logs) sont écrits côté content-factory (`assets/pons-dpi/…`).
- Pour la **rédaction d'articles** (brief / write / images), travailler directement
  dans content-factory : ces outils ne sont pas pontés (ils écrivent des fichiers et
  pilotent le repo blog `pons-dpi-blog`).

---

*Pont : `scripts/cf.sh`. Source des outils : content-factory/TOOLS.md.*
