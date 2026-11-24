---
name: build-a-hook-artifact-verified
description: Daniele ha costruito un hook PreToolUse reale che blocca i force push, verificato dal vivo dopo aver debuggato due difetti; quiz 0010 non riportato
metadata:
  type: learning-record
---

## Cosa è successo

Lezione 0010 (pratica, parallela alla 0008): Daniele ha scritto `.claude/hooks/block-force-push.sh` +
`.claude/settings.json` — un handler `PreToolUse` con matcher `Bash` che ispeziona `.tool_input.command` con `jq` e
risponde `permissionDecision: "deny"` su match della regex `git push .*(--force|-f)\b`.

Il 2026-09-11 ha chiesto di eseguire un force push su `main` e il push è passato: l'hook non era stato applicato.
Il debug ha trovato due difetti indipendenti, entrambi corretti nel commit `1cf8b34`:

1. `settings.json` invocava `~/.claude/hooks/block-force-push.sh`, ma `/home/danielenegro/.claude/hooks/` non
   esiste — lo script viveva nel progetto. Un handler `command` che non parte esce 127, che non è 2, quindi **non
   blocca**: il fallimento è silenzioso e permissivo. Corretto con `"$CLAUDE_PROJECT_DIR/.claude/hooks/..."`.
2. Lo shebang era in seconda riga, dopo un commento col path — quindi inerte, perché vale solo come primi byte del
   file.

Dopo la correzione l'hook si è dimostrato attivo nel modo più forte possibile: ha bloccato un comando **non
costruito**, cioè il primo comando di test, che conteneva il pattern soltanto dentro un `echo`.

## Perché conta

Chiude l'obiettivo di mission "Ha configurato almeno un Hook (es. su tool call o su eventi di sessione) per
automatizzare un comportamento del proprio harness" con un artefatto reale e verificato, non un quiz superato —
stesso tipo di segnale della skill `review-checklist` in [[build-a-skill-mastered]], e più solido di quello che
[[hook-anatomy-mastered]] poteva dare da solo.

Ma il valore didattico vero è arrivato dal fallimento, non dal successo. La teoria della 0009 (semantica exit
0/2/altro) era stata superata a quiz, e proprio lì stava la lacuna operativa: **un hook rotto non si comporta come
un hook che nega**. Exit 127 per file mancante cade nel ramo "altro" — segnalato ma non bloccante. Un hook di
sicurezza va quindi sempre testato sul caso positivo (deve bloccare), perché il silenzio è indistinguibile dal
funzionamento corretto sul caso negativo.

Secondo punto emerso dal vivo: l'hook ispeziona il **testo grezzo** del comando, senza distinguere esecuzione da
citazione. Il falso positivo sul comando di `echo` non è un bug dello script ma un limite intrinseco
dell'approccio pattern-matching su stringa. Ha colpito due volte nella stessa sessione: la seconda ha impedito di
scrivere *questo stesso file* con un heredoc via Bash, perché il testo cita il pattern. Aggirato usando il tool
`Write`, non coperto dal matcher `Bash` — che è anche la dimostrazione pratica che un matcher su un solo tool non
è una garanzia strutturale completa.

## Limiti residui noti (non corretti, consapevolmente)

La regex sbaglia in entrambe le direzioni, verificato con 6 casi di test:

- **Falso positivo**: `--force-with-lease` viene bloccato, pur essendo la variante *sicura* (rifiuta il push se il
  remoto è avanzato).
- **Falso negativo**: `git push origin +main` passa, pur essendo un force push a tutti gli effetti — il `+` nel
  refspec non è coperto dal pattern.

## Prossimo passo

Il quiz 0010 (5 domande) non è stato riportato in questa sessione: l'asse Hook è coperto sul piano dell'artefatto,
non ancora su quello della verifica formale. Da recuperare, oppure da considerare assorbito dal debug reale — che
ha coperto più terreno del quiz.

Resta scoperto **solo MCP** tra gli assi di "Success looks like". Vincolo pratico per la lezione pratica: i
connector claude.ai richiedono OAuth, impossibile da una sessione non interattiva — servirà un server MCP locale
via stdio (`claude mcp add`) o l'autorizzazione fatta da Daniele altrove.
