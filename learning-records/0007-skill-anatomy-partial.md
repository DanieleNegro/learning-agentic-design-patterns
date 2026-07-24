---
name: 0007-skill-anatomy-partial
description: Daniele ha sbagliato 2/5 nel quiz sull'anatomia delle skill — livelli di progressive disclosure e ruolo del campo description vs name.
metadata:
  type: project
---

Daniele ha completato il quiz della lezione [[0007-skill-anatomy]] con 3/5 corrette, sbagliando le domande 2 e 4.

## Errore Q2 — livelli di progressive disclosure
Ha creduto che i file di supporto (es. MISSION-FORMAT.md) entrino in contesto insieme al corpo di SKILL.md al momento dell'invocazione (`/teach`). In realtà sono tre livelli distinti e sequenziali, non due: (1) `description` sempre in contesto, (2) corpo di SKILL.md caricato solo quando la skill viene invocata, (3) file di supporto caricati solo quando il corpo li referenzia esplicitamente per il task in corso — un livello di lazy-loading ulteriore rispetto a "skill invocata → tutto il suo materiale carica".

## Errore Q4 — description vs name
Ha scelto `name` come campo che permette a Claude di decidere l'invocazione automatica. `name` imposta solo l'etichetta mostrata nell'elenco delle skill (il comando viene comunque dal nome della directory); è `description` il campo che Claude confronta con la conversazione — l'unico esplicitamente raccomandato dalla documentazione per questo scopo.

## Why
Entrambi gli errori condividono la stessa euristica sbagliata sottostante: assumere che "quando un elemento è associato alla skill" implichi "entra in contesto/conta nella decisione insieme agli altri elementi", senza distinguere i ruoli specifici (identità/labeling vs matching/loading-trigger vs lazy-load su riferimento).

## How to apply
Prima di procedere a una lezione pratica (scrivere una skill da zero), ritestare con interleaving questi due punti — non serve una lezione dedicata subito, ma una domanda di ripasso in una lezione futura. Euristica da rinforzare: "name/argument-hint = come appare/si digita; description = quando Claude la sceglie da solo" e "tre livelli separati di caricamento, non due".
