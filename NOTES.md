# Notes

- Utente: computer scientist senior. Niente spiegazioni da zero su concetti di programmazione generale.
- Lingua: lezioni in italiano; terminologia tecnica sempre in inglese, mai tradotta (es. "workflow", "tool use", "hook", "skill", "subagent").
- Stack di riferimento per la mission: Claude Agent SDK / ecosistema Anthropic, non framework di terze parti.
- Glossario: creato in `reference/glossary.html` dopo il quiz 0001 superato con successo (2026-07-21). Contiene solo i termini verificati dal quiz (Workflow, Agent, Routing, Orchestrator-workers, Hook, MCP, Subagent). Aggiungere un termine nuovo solo dopo che è stato verificato in un esercizio, non solo "coperto" in una lezione.
- Convenzione lezioni dal 0002 in poi: un pattern di workflow per lezione (non più panoramica), sempre agganciato a un primitivo concreto — per i pattern nominati da Anthropic, il mapping naturale è sul Workflow tool di Claude Code stesso (`pipeline()` = prompt chaining, `parallel()` = parallelization, ecc.).
- Asset `diagrams.css` (SVG line-and-box in stile Anthropic) creato per riprodurre i diagrammi dell'articolo "Building effective agents" — riusabile per le lezioni sui prossimi pattern (routing, parallelization, orchestrator-workers, evaluator-optimizer).
