const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max) {
  return String(value || "").trim().slice(0, max);
}

export function buildQuoteEmail(body) {
  if (body?.website) {
    return { ok: true, skipped: true };
  }

  const nome = clean(body?.nome, 120);
  const email = clean(body?.email, 160);
  const azienda = clean(body?.azienda, 160);
  const area = clean(body?.area, 80);
  const nomeFiera = clean(body?.nomeFiera, 160);
  const data = clean(body?.data, 80);
  const dimensioni = clean(body?.dimensioni, 160);
  const messaggio = clean(body?.messaggio, 4000);

  if (!nome || !email || !messaggio) {
    return { ok: false, status: 400, error: "Nome, email e messaggio sono obbligatori." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, status: 400, error: "Inserisci un indirizzo email valido." };
  }

  const subject = `Richiesta preventivo — ${azienda || nome}`;
  const text = [
    `Nome: ${nome}`,
    `Email: ${email}`,
    `Azienda: ${azienda || "—"}`,
    `Area: ${area || "—"}`,
    `Nome fiera: ${nomeFiera || "—"}`,
    `Data: ${data || "—"}`,
    `Dimensioni: ${dimensioni || "—"}`,
    "",
    messaggio,
  ].join("\n");

  return {
    ok: true,
    email: { subject, text, replyTo: email },
  };
}

export async function sendQuote(body, env) {
  const built = buildQuoteEmail(body);
  if (!built.ok || built.skipped) return built;

  const apiKey = env?.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 503, error: "Invio email non configurato." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM || "ITAL DESIGN <noreply@it-al.design>",
      to: [env.CONTACT_TO || "info@it-al.design"],
      reply_to: built.email.replyTo,
      subject: built.email.subject,
      text: built.email.text,
    }),
  });

  if (!response.ok) {
    return { ok: false, status: 502, error: "Invio non riuscito. Riprova tra poco." };
  }

  return { ok: true };
}
