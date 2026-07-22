---
name: 0002-prompt-chaining-mastered
description: Daniele ha superato il quiz sul prompt chaining, distinguendolo da routing e agent, e sa mappare pipeline() come primitivo concreto.
metadata:
  type: project
---

Daniele ha completato con successo il quiz della lezione [[0002-prompt-chaining]] (5/5): riconosce prompt chaining come sequenza fissa di step dove l'output di uno diventa input del successivo, sa cosa distingue un gate da un Hook o un Subagent, identifica `pipeline()` come primitivo del Workflow tool che lo implementa, e collega il trade-off latenza/accuratezza al motivo per cui si sceglie questo pattern. L'ultima domanda del quiz ha già ri-esercitato la distinzione con routing (visto in [[0001-workflow-vs-agent-distinction]]), preparando il terreno per una lezione dedicata al routing.

## Why
Conferma che il "un pattern per lezione, sempre agganciato a un primitivo concreto" (vedi NOTES.md) funziona come formato: Daniele ottiene sia la definizione teorica sia il mapping su `pipeline()`/`parallel()` nello stesso passaggio.

## How to apply
Procedere con la stessa struttura per i pattern successivi nell'ordine naturale di "Building effective agents": routing → parallelization → orchestrator-workers → evaluator-optimizer. Il glossario va aggiornato con "Prompt chaining" e "Gate" ora che sono stati verificati da un esercizio (non solo introdotti in una lezione).
