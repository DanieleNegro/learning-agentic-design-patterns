# Mission: Agentic Design Patterns (con Claude Code)

## Why
Daniele è un computer scientist senior che vuole imparare a usare Claude Code sfruttando a fondo i suoi meccanismi di estensione — Skills, MCP (Model Context Protocol), Hooks — per arrivare a progettare e costruire workflow agentici applicati allo sviluppo software reale. L'obiettivo finale non è la teoria astratta dei pattern agentici, ma saperli riconoscere e implementare concretamente dentro Claude Code e il Claude Agent SDK.

## Success looks like
- Sa spiegare la differenza tra "workflow" e "agent" (nel senso di Anthropic, building-effective-agents) e riconoscere quale pattern usare per un dato problema.
- Ha costruito almeno una Skill custom per Claude Code che incapsula un workflow di sviluppo ricorrente.
- Ha configurato almeno un Hook (es. su tool call o su eventi di sessione) per automatizzare un comportamento del proprio harness.
- Ha collegato Claude Code ad almeno un server MCP e capisce quando MCP è la scelta giusta rispetto a una Skill o a un tool custom.
- Sa progettare un workflow multi-step (orchestrator-workers, routing, evaluator-optimizer, ecc.) usando il Claude Agent SDK, non solo affidandosi a un singolo prompt.

## Constraints
- Lingua: lezioni in italiano, ma tutta la terminologia tecnica va preservata in inglese (es. "tool use", "hook", "skill", "subagent", "orchestrator-workers", "context window") — non tradurre i termini di dominio.
- Livello: senior, niente spiegazioni da zero sui concetti di programmazione generale; si può andare dritti ai concetti agentici specifici.
- Stack di riferimento: Claude Agent SDK / ecosistema Anthropic (non LangGraph, AutoGen, ecc., a meno di confronto esplicito).

## Out of scope
- Framework agentici di terze parti (LangGraph, AutoGen, CrewAI) come oggetto di studio primario — possono comparire solo come confronto/contrasto.
- Fine-tuning o training di modelli: il focus è l'orchestrazione e l'uso di modelli esistenti tramite Claude Code / Agent SDK.
