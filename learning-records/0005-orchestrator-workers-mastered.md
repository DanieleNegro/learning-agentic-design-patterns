---
name: 0005-orchestrator-workers-mastered
description: Daniele ha superato 5/5 il quiz su orchestrator-workers, isolando correttamente il criterio "sotto-task decisi a runtime" come unica differenza strutturale da parallelization.
metadata:
  type: project
---

Daniele ha completato con successo (5/5) il quiz della lezione [[0005-orchestrator-workers]]. Riconosce lo scenario, identifica il termine "orchestrator" per l'LLM centrale, conferma "Subagent" come primitiva concreta di Claude Code dietro ogni worker, e isola con precisione la differenza strutturale con parallelization: il numero/contenuto dei sotto-task è deciso a runtime dall'orchestrator, non fissato nel codice.

## Why
Quarto pattern su cinque coperto senza lacune. L'aggancio all'esempio dal vivo (l'Agent tool di questa sessione come istanza reale di orchestrator-workers) sembra aver funzionato bene quanto il mapping su primitivi del Workflow tool — vale la pena riusarlo quando un pattern ha un corrispettivo osservabile nella sessione stessa, non solo nel codice di esempio.

## How to apply
Procedere con l'ultimo pattern della lista di Anthropic, evaluator-optimizer, in [[0006-evaluator-optimizer]] — chiude l'arco dei 5 pattern nominati da "Building effective agents". Dopo la 0006, la mission ha altri assi ancora scoperti (Hook configurato, server MCP collegato, Skill custom costruita — vedi MISSION.md) che non sono stati toccati dalle lezioni 0001-0006, tutte centrate sui workflow pattern. Da considerare come prossima direzione, previa conferma con Daniele.
