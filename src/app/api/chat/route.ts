import Anthropic from "@anthropic-ai/sdk";
import { ADMISSIONS_SYSTEM_PROMPT } from "@/lib/admissions-knowledge";

// The Anthropic SDK needs the Node runtime; never statically cache this route.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Swap to "claude-haiku-4-5" for lowest cost, or "claude-opus-4-8" for top quality.
const MODEL = "claude-sonnet-4-6";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      "The assistant is not configured yet (missing ANTHROPIC_API_KEY).",
      { status: 503 },
    );
  }

  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = body?.messages;
  } catch {
    return new Response("Invalid JSON body.", { status: 400 });
  }

  // Basic validation + guard rails for a public widget.
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("`messages` must be a non-empty array.", { status: 400 });
  }
  const cleaned: Anthropic.MessageParam[] = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-20) // cap conversation length
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  if (cleaned.length === 0 || cleaned[0].role !== "user") {
    return new Response("First message must be from the user.", { status: 400 });
  }

  const client = new Anthropic();

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 1024,
    // Large fixed knowledge base as a cached prefix: pay the write once, then
    // ~0.1x reads on every subsequent request.
    system: [
      {
        type: "text",
        text: ADMISSIONS_SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: cleaned,
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (err) {
        console.error("Chat stream error:", err);
        controller.enqueue(
          encoder.encode(
            "\n\n[Sorry — something went wrong. Please try again, or contact admissions at +91 90000 70888.]",
          ),
        );
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
