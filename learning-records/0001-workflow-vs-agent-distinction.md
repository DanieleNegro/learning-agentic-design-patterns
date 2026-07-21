# Distinzione Workflow vs Agent consolidata

Daniele ha completato con successo il quiz della lezione 0001, rispondendo correttamente a scenari concreti su routing (workflow), agent loop dinamico, Hook, MCP e Subagent/orchestrator-workers. Dimostra di saper applicare l'asse "predefined code path (workflow) vs controllo dinamico del modello (agent)" a casi pratici, non solo di conoscerne la definizione.

## Evidence

Quiz a scelta multipla in [[0001-workflow-vs-agent.html]] (5/5 domande): routing come workflow, agent loop guidato da feedback ambientale (test suite), Hook come predefined code path incondizionato su Edit/Write, MCP come canale verso un database esterno, Subagent come primitiva concreta dietro orchestrator-workers.

## Implications

Le prossime lezioni possono assumere questa distinzione come nota, senza re-insegnarla. Si può procedere ad approfondire i singoli pattern di workflow uno alla volta — a partire da Prompt Chaining in [[0002-prompt-chaining]] — sempre agganciati a un primitivo concreto di Claude Code o del Claude Agent SDK (in questo caso, `pipeline()` nel Workflow tool), non solo alla definizione teorica di Anthropic.
