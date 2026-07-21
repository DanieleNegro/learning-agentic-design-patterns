# Agentic Design Patterns (con Claude Code) — Resources

## Knowledge

- [Building effective agents — Anthropic Engineering](https://www.anthropic.com/engineering/building-effective-agents)
  La fonte primaria per la tassonomia dei pattern: distinzione tra *workflow* e *agent*, e i pattern nominati (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer). Use for: qualunque discussione sui pattern agentici astratti, prima di mapparli su un'implementazione concreta.
- [A harness for every task: dynamic workflows in Claude Code — Anthropic](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code)
  Il ragionamento dietro il design dell'harness di Claude Code (perché skills/hooks/subagent invece di un unico prompt monolitico). Use for: capire *perché* Claude Code è strutturato come workflow dinamico, non solo *come*.
- [Agent SDK overview — Claude Code Docs](https://code.claude.com/docs/en/agent-sdk/overview)
  Documentazione ufficiale del Claude Agent SDK: agent loop, tool built-in, subagents, hooks, MCP, permissions, sessions. Use for: ogni volta che si scrive codice contro l'SDK, o si confrontano SDK vs Client SDK vs Managed Agents.
- [Extend Claude with skills — Claude Code Docs](https://code.claude.com/docs/en/skills)
  Documentazione ufficiale sulle Skills: struttura SKILL.md, progressive disclosure, skills bundled vs custom. Use for: creare o debuggare una skill.
- [Hooks reference — Claude Code Docs](https://code.claude.com/docs/en/hooks)
  Elenco completo degli eventi hook (PreToolUse, PostToolUse, SessionStart, Stop, ecc.), shape di input/output JSON, exit code semantics. Use for: automatizzare comportamenti deterministici nell'harness.
- [What is the Model Context Protocol (MCP)? — modelcontextprotocol.io](https://modelcontextprotocol.io/docs/getting-started/intro)
  Specifica e introduzione ufficiale a MCP, lo standard aperto per collegare LLM a tool/dati/servizi esterni. Use for: capire quando un'integrazione va fatta come MCP server invece che come skill o tool custom.
- [Introducing the Model Context Protocol — Anthropic](https://www.anthropic.com/news/model-context-protocol)
  Annuncio originale di MCP, motivazione e design goals (protocollo aperto, standardizzazione delle integrazioni). Use for: contesto storico/motivazionale su MCP.

## Wisdom (Communities)

_Nessuna community ancora selezionata._

## Gaps

- Manca un confronto sistematico Agent SDK vs framework di terze parti (LangGraph, AutoGen) — fuori mission per ora, ma utile se emerge un bisogno di interoperabilità.
- Manca un caso di studio pubblico end-to-end di un workflow agentico Claude Code per sviluppo software (es. code review pipeline con skills+hooks+MCP insieme) — da cercare quando si arriva alla lezione su orchestrator-workers applicato.
