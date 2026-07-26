## How to add your workflow file

1. Open the workflow in n8n
2. Click the **"..."** (three dots) menu, top right → **Download**
3. This saves a `.json` file — n8n exports the full workflow (nodes, connections, settings)
4. Rename and drop it into this folder as: `autonomous-coding-agent.json`
5. Delete this file once it's added

**Important before exporting:** double-check the JSON doesn't contain your actual Groq/Supabase API keys or credentials before pushing to a public repo. n8n usually excludes credential values by default, but verify.
