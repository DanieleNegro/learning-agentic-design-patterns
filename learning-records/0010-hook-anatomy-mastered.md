---
name: hook-anatomy-mastered
description: Daniele ha superato il quiz 0009 su anatomia degli Hook (evento/matcher/handler, semantica exit code) senza lacune riportate
metadata:
  type: learning-record
---

## Cosa è successo

Lezione 0009 (hook-anatomy): Daniele ha completato con successo il quiz, senza segnalare errori. Copriva la
distinzione Hook vs Skill (richiesta al modello vs esecuzione garantita), la struttura evento → matcher → handler in
`settings.json`, e la semantica di exit code 0/2/altro — inclusa la sottigliezza che l'effetto di exit 2 dipende
dall'evento (blocca su `PreToolUse`, non ha lo stesso effetto su un evento già avvenuto come `PostToolUse`).

## Perché conta

Chiude la teoria del terzo asse della mission ([[build-a-skill-mastered]] aveva chiuso l'asse Skill). Nessuna lacuna
da ritestare con interleaving su questo argomento specifico, per ora — da confermare comunque con un ripasso
distanziato più avanti, dato che qui il segnale è solo "quiz superato", non ancora un artefatto reale come per la
skill review-checklist.

## Prossimo passo

Seguendo lo stesso schema anatomia-poi-pratica usato per le Skill (0007 → 0008), la prossima lezione deve far
costruire e testare a Daniele un Hook vero — l'obiettivo di mission "Ha configurato almeno un Hook... per
automatizzare un comportamento del proprio harness" richiede un artefatto reale, non solo un quiz superato.
