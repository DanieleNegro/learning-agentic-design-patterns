---
name: 0006-evaluator-optimizer-mostly-mastered
description: Daniele ha sbagliato la domanda di ripasso (interleaving) che distingue prompt chaining da evaluator-optimizer, confondendo "più chiamate LLM in sequenza" con "presenza di un ciclo".
metadata:
  type: project
---

Daniele ha completato il quiz della lezione [[0006-evaluator-optimizer]] con 4/5 corrette. Ha sbagliato la domanda 5 (quella di ripasso/interleaving), scegliendo "Sì, è evaluator-optimizer" per uno scenario di prompt chaining puro (traduci → verifica → formatta, tre step fissi in sequenza, nessun ritorno indietro).

## L'errore
Il ragionamento sbagliato più probabile: "ci sono più chiamate LLM in sequenza quindi dev'essere evaluator-optimizer". Il discriminante corretto non è il numero di chiamate LLM, ma se il flusso può **tornare indietro** a rigenerare uno step precedente con un feedback esplicito. Prompt chaining (anche con un gate, [[0002-prompt-chaining]]) va sempre avanti o si ferma; evaluator-optimizer ([[0006-evaluator-optimizer]]) introduce un ciclo vero, un `while` che può rieseguire lo stesso step di generazione un numero di volte non noto in anticipo.

## Why
Prima lacuna specifica sulla distinzione chaining/evaluator-optimizer — sintomo che l'euristica "più step LLM in fila = pattern con ciclo" non si è ancora consolidata, nonostante il resto del quiz (Q1-Q4) mostri comprensione solida del pattern in isolamento.

## How to apply
In una prossima lezione o ripasso, testare di nuovo con un'euristica esplicita da applicare: "il flusso può tornare a rigenerare uno step già eseguito?" — se sì, evaluator-optimizer (o comunque un ciclo); se no, è chaining/routing/parallelization/orchestrator-workers a seconda della struttura. Non serve una lezione dedicata subito: una domanda interleaved in una lezione futura basta a verificare se si è consolidato.
