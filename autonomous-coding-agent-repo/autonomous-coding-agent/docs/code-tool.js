/**
 * Code Tool — sandboxed JavaScript execution used by the Autonomous Coding Agent.
 * Configured as a Code Tool node in n8n, exposed to the AI Agent as `run_code`.
 *
 * Takes the agent-generated code as input, runs it inside a `Function` constructor
 * sandbox, captures any console.log output, and returns a structured result the
 * agent can read to decide whether to retry.
 */

try {
  const userCode = $input.item.json.query;
  const logs = [];
  const sandboxConsole = { log: (...args) => logs.push(args.map(String).join(' ')) };

  const runner = new Function('console', `
    ${userCode}
  `);

  const result = runner(sandboxConsole);

  return JSON.stringify({
    output: JSON.stringify({ returned: result, consoleLogs: logs }),
    error: ""
  });
} catch (e) {
  return JSON.stringify({ output: "", error: e.message });
}
