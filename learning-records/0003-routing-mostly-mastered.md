---
name: 0003-routing-mostly-mastered
description: Daniele ha superato 4/5 del quiz sul routing, con un'unica lacuna sul perché si separano gli handler (specializzazione, non costo).
metadata:
  type: project
---

Daniele ha completato il quiz della lezione [[0003-routing]] con 4 risposte corrette su 5. Riconosce lo scenario di routing e lo distingue da prompt chaining e parallelization (Q1, Q5), identifica il classifier come step di classificazione (Q2), e sa che nel Workflow tool routing non ha un primitivo dedicato — è un `agent()` di classificazione seguito da un if/switch ordinario (Q3).

## Errore su Q4
Ha sbagliato la domanda sul perché si scrivono handler separati per categoria, scegliendo probabilmente "riduzione dei costi" invece di "specializzazione per caso". La lezione stessa può aver contribuito alla confusione: il sidenote 3 cita l'esempio di instradare domande facili a un modello economico (Haiku) e domande difficili a un modello più capace — un esempio di ottimizzazione costo/latenza che è un *effetto collaterale* della specializzazione (puoi scegliere un modello diverso per handler), non la ragione strutturale per cui si separano gli handler in primo luogo. La ragione primaria resta: ogni handler può essere ottimizzato (prompt, non necessariamente modello) solo per il proprio caso, invece di un unico prompt che deve andare bene ovunque.

## Why
Questa distinzione (specializzazione come causa, risparmio di costo come possibile effetto) è sottile e vale la pena richiamarla in una lezione futura tramite interleaving, non ri-spiegarla subito in una lezione dedicata — il resto del quiz mostra comprensione solida del pattern.

## How to apply
Nella prossima occasione utile (es. una lezione su evaluator-optimizer o un ripasso interleaved), inserire una domanda che testi di nuovo "perché separare gli handler" con opzioni che isolano più nettamente specializzazione da costo, per confermare che il concetto si sia consolidato prima di aggiungere "il motivo della separazione" come riga a sé nel glossario. Procedere comunque alla lezione 0004 (parallelization, vedi [[0004-parallelization]]) come da richiesta di Daniele — la lacuna è puntuale e non blocca il pattern successivo.
