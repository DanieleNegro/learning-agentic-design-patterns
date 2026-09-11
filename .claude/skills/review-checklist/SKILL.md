---
name: review-checklist
description: Applica la mia checklist di code review al diff corrente o a un file specifico. Usa quando chiedo di rivedere del codice secondo i miei criteri standard.
disable-model-invocation: true
argument-hint: "[percorso file, opzionale]"
---

## Codice da rivedere

!`git diff HEAD`

## Checklist

Per ognuno di questi punti, valuta il codice sopra e segnala esplicitamente pass/fail con la riga interessata.
Non aggiungere osservazioni fuori da questi punti, a meno che non sia un bug palese.

1. [SOSTITUISCI: es. "Ogni funzione pubblica ha un test"]
2. [SOSTITUISCI: es. "Nessun valore hardcoded che dovrebbe essere config"]
3. [SOSTITUISCI: es. "Gli errori esterni (rete, I/O) sono gestiti, non ignorati"]
4. [SOSTITUISCI: il tuo criterio più ricorrente — quello che finisci sempre per far notare a voce]