# ~/.claude/hooks/block-force-push.sh
#!/bin/bash
COMMAND=$(jq -r '.tool_input.command')

if echo "$COMMAND" | grep -qE 'git push .*(--force|-f)\b'; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "Force push bloccato da hook personale: rimuovi --force o chiedi conferma esplicita."
    }
  }'
else
  exit 0
fi
