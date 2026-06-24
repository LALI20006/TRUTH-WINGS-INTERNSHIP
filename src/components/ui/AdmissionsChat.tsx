"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, GraduationCap } from "lucide-react";
import styles from "./AdmissionsChat.module.css";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm the JAIN / JU-FET admissions assistant. Ask me about B.Tech eligibility, the JET exam, accepted scores, hostel, placements, or what to do next. How can I help?",
};

const SUGGESTIONS = [
  "What is the B.Tech eligibility?",
  "When is the JET exam?",
  "Tell me about placements",
  "Can I get admission?",
];

export default function AdmissionsChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send only the real turns (drop the canned greeting).
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      });

      if (!res.ok || !res.body) {
        const errText = await res.text().catch(() => "");
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content:
              errText ||
              "Sorry, I couldn't reach the assistant. Please try again or call +91 90000 70888.",
          };
          return copy;
        });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "Network error — please try again.",
        };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        className={styles.launcher}
        aria-label={open ? "Close admissions assistant" : "Open admissions assistant"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className={styles.panel} role="dialog" aria-label="Admissions assistant">
          <div className={styles.header}>
            <div className={styles.headerIcon}>
              <GraduationCap size={20} />
            </div>
            <div>
              <strong className={styles.headerTitle}>Admissions Assistant</strong>
              <span className={styles.headerSub}>JAIN University · JU-FET</span>
            </div>
          </div>

          <div className={styles.messages} ref={scrollRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? styles.userRow : styles.botRow}
              >
                <div className={m.role === "user" ? styles.userBubble : styles.botBubble}>
                  {m.content || (busy && i === messages.length - 1 ? <Typing /> : "")}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className={styles.suggestions}>
                {SUGGESTIONS.map((s) => (
                  <button key={s} className={styles.chip} onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className={styles.inputBar}
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about admissions…"
              disabled={busy}
              aria-label="Message"
            />
            <button
              type="submit"
              className={styles.sendBtn}
              disabled={busy || !input.trim()}
              aria-label="Send"
            >
              <Send size={18} />
            </button>
          </form>
          <p className={styles.disclaimer}>
            Answers are grounded in JAIN website data. Verify critical details with the
            admissions office.
          </p>
        </div>
      )}
    </>
  );
}

function Typing() {
  return (
    <span className={styles.typing}>
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
}
