---
name: 0004-parallelization-mastered
description: Daniele ha superato 5/5 il quiz sulla parallelization, distinguendo sectioning da voting e parallel() (barriera) da pipeline() (nessuna barriera).
metadata:
  type: project
---

Daniele ha completato con successo (5/5) il quiz della lezione [[0004-parallelization]]. Distingue parallelization da routing (nessun branch scelto: partono tutte le chiamate) e da prompt chaining (nessuna dipendenza sequenziale), riconosce le due varianti sectioning (sotto-task diversi e indipendenti) e voting (stesso task ripetuto, maggioranza), e identifica `parallel()` come barriera esplicita nel Workflow tool — in contrasto con `pipeline()`, che non ne ha una.

## Why
Terzo pattern su tre superato senza lacune (a differenza di [[0003-routing-mostly-mastered]], dove restava un punto da richiamare). Il formato "un pattern per lezione, sempre agganciato a un primitivo concreto + una domanda che anticipa il pattern successivo" continua a funzionare.

## How to apply
Procedere con orchestrator-workers in [[0005-orchestrator-workers]]. Il quiz 0004 (domanda 5) ha già anticipato la distinzione chiave: in parallelization i sotto-task sono fissati in anticipo nel codice, in orchestrator-workers li decide dinamicamente un LLM centrale in base al task specifico — è il perno concettuale della prossima lezione, non va ri-spiegato da zero. Restare comunque attento a intercalare (interleaving) una domanda di ripasso su "specializzazione vs costo" del routing (vedi [[0003-routing-mostly-mastered]]) in una lezione futura.
