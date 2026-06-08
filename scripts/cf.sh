#!/usr/bin/env bash
#
# cf.sh — pont vers les outils SEO/API de content-factory, pré-câblés sur le site « pons-dpi ».
#
# Les scripts vivent dans content-factory (source unique). Ce wrapper injecte
# automatiquement « --site pons-dpi » et délègue. Le .env, secrets/gsc-sa.json,
# config/sites/pons-dpi.yaml et node_modules restent côté content-factory : les
# scripts résolvent leurs chemins via leur propre emplacement, donc tout marche
# même lancé depuis ce repo.
#
# Usage :
#   bash scripts/cf.sh <commande> [args...]
#   bash scripts/cf.sh help
#
# Prérequis : le service account GSC (content-factory/secrets/gsc-sa.json) doit
# être Propriétaire de la domain property « sc-domain:pons-dpi.fr » pour que
# l'indexation et l'inspection d'URL fonctionnent (Search Console → Paramètres
# → Utilisateurs et autorisations).
#
set -euo pipefail

CF_ROOT="${CF_ROOT:-$HOME/Desktop/Guillaume/Claude/Sites/content-factory}"
SITE="pons-dpi"

if [ ! -d "$CF_ROOT" ]; then
  echo "✗ content-factory introuvable : $CF_ROOT" >&2
  echo "  Override avec : CF_ROOT=/chemin/vers/content-factory bash scripts/cf.sh ..." >&2
  exit 1
fi

run_node() { node "$CF_ROOT/scripts/$1" --site "$SITE" "${@:2}"; }

cmd="${1:-help}"
shift || true

case "$cmd" in
  # ── Indexation Google ──────────────────────────────
  index)                run_node index-urls.mjs "$@" ;;
  crawl)                run_node crawl-status.mjs "$@" ;;
  submit-sitemap)       run_node submit-sitemap.mjs "$@" ;;
  reindex)              bash "$CF_ROOT/scripts/reindex-after-deploy.sh" "$SITE" "$@" ;;

  # ── Bing / IndexNow ────────────────────────────────
  index-bing)           run_node index-urls-bing.mjs "$@" ;;
  submit-sitemap-bing)  run_node submit-sitemap-bing.mjs "$@" ;;

  # ── Audits SEO ─────────────────────────────────────
  audit-gsc)            run_node audit-gsc.mjs "$@" ;;
  audit-onpage)         run_node audit-onpage.mjs "$@" ;;
  audit-links)          run_node audit-broken-links.mjs "$@" ;;
  audit-internal)       run_node audit-internal-links.mjs "$@" ;;
  audit-images)         run_node audit-images.mjs "$@" ;;
  audit-perf)           run_node audit-perf.mjs "$@" ;;
  audit-tags)           run_node audit-tags.mjs "$@" ;;

  # ── Audience / recherche ───────────────────────────
  queries)              run_node audience-queries.mjs "$@" ;;
  reddit)               node "$CF_ROOT/scripts/audience-reddit.mjs" "$@" ;; # pas de --site (par subreddit)

  help|--help|-h|"")
    cat <<'EOF'
cf.sh — outils SEO/API content-factory pré-câblés sur « pons-dpi »

  Indexation Google
    index [--slugs "a,b" | --from-sitemap | --urls "u1,u2"] [--delete]
                          Ping Indexing API (200 URLs/j)
    crawl [--slugs "a,b" | --from-sitemap]
                          État d'indexation (URL Inspection API)
    submit-sitemap [--list]
                          Soumet le sitemap à Search Console
    reindex [slug1,slug2] Health-check + ping post-déploiement
                          (sans slugs : derniers slugs dispatchés)

  Bing / IndexNow
    index-bing [--slugs "a,b" | --from-sitemap]   Ping IndexNow (Bing)
    submit-sitemap-bing                           Soumet le sitemap à Bing

  Audits SEO
    audit-gsc             Audit indexation (tous sitemaps)
    audit-onpage [--top N] Titres, meta, Hn, mots-clés
    audit-links [--internal-only] [--dry-run]  Liens cassés
    audit-internal        Maillage interne
    audit-images          Alt manquants, poids, formats
    audit-perf [--url U | --slugs "a,b"] [--strategy mobile|desktop]
                          PageSpeed / Web Vitals
    audit-tags            Meta tags / Open Graph / JSON-LD

  Audience / recherche
    queries [--days N]    Vraies requêtes Search Console
    reddit --subreddit X [--period year] [--limit 100] [--search "..."]
                          Thèmes/questions d'un subreddit

  Override du chemin content-factory : CF_ROOT=/path bash scripts/cf.sh <cmd>
EOF
    ;;

  *)
    echo "✗ Commande inconnue : $cmd" >&2
    echo "  → bash scripts/cf.sh help" >&2
    exit 1
    ;;
esac
