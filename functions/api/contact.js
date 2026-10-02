import { sendQuote } from "../lib/sendQuote.js";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Richiesta non valida." }, 400);
  }

  try {
    const result = await sendQuote(body, env);
    if (!result.ok) return json({ error: result.error }, result.status || 500);
    return json({ ok: true });
  } catch {
    return json({ error: "Invio non riuscito. Riprova tra poco." }, 502);
  }
}
