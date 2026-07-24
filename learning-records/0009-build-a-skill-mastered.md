---
name: build-a-skill-mastered
description: Daniele ha costruito e testato la skill personale review-checklist e superato il quiz 0008 5/5 senza lacune
metadata:
  type: learning-record
---

## Cosa è successo

Lezione 0008 (pratica, non solo quiz): Daniele ha creato `~/.claude/skills/review-checklist/SKILL.md`, sostituendo i
quattro criteri segnaposto con i suoi criteri reali di code review, e l'ha testata su un diff vero. Ha poi risposto
correttamente a tutte e 5 le domande del quiz (dynamic context injection come preprocessing, `description` come
campo che guida l'invocazione automatica, sostituzione letterale di `$ARGUMENTS`, motivazione di
`disable-model-invocation: true`, motivazione skill personale vs progetto).

## Perché conta

Questo chiude concretamente l'obiettivo di mission "Ha costruito almeno una Skill custom per Claude Code che
incapsula un workflow di sviluppo ricorrente" ([[skill-anatomy-mastered]]) — non solo teoria (0007) ma un artefatto
reale, usato su un diff vero. Nessuna lacuna da ritestare con interleaving su questo argomento specifico.

## Prossimo passo

Dei tre assi rimasti nella mission dopo i 5 pattern di workflow (Skill custom, Hook, MCP — vedi NOTES.md
"decisione presa 2026-07-22"), Skill custom è ora coperto end-to-end (anatomia + costruzione pratica). Restano
scoperti: Hook e MCP. Da confermare con Daniele quale dei due affrontare per primo nella prossima lezione.
