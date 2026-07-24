---
name: 0008-skill-anatomy-mastered
description: Daniele ha rifatto e superato il quiz sull'anatomia delle skill dopo un primo tentativo con 2 errori (progressive disclosure, description vs name).
metadata:
  type: project
---

Daniele ha rifatto il quiz della lezione [[0007-skill-anatomy]] e lo ha superato, dopo un primo tentativo con 2 errori su 5 (vedi [[0007-skill-anatomy-partial]]): i tre livelli sequenziali di progressive disclosure (description sempre in contesto → corpo di SKILL.md all'invocazione → file di supporto solo su riferimento esplicito) e il ruolo di `description` (non `name`) nel guidare l'invocazione automatica di Claude.

## Why
Conferma che riaprire semplicemente il file HTML resetta lo stato del quiz (nessuna persistenza lato client) — utile saperlo per futuri "voglio rifare il quiz" senza dover rigenerare la lezione.

## How to apply
Procedere con la lezione pratica [[0008-build-a-skill]]: costruire una Skill reale (checklist di code review personale, scelta da Daniele) invece di un esempio giocattolo. Includere comunque un'interleaving leggero sulla distinzione description/name in un contesto nuovo, per confermare che il concetto si sia consolidato oltre il contesto specifico del quiz 0007.
