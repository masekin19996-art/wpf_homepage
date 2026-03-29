"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  UNIVERSITIES,
  RIDDLES,
  LIBRARY_HINTS,
  passesMatch,
  checkRiddleAnswer,
  type UniversityId,
} from "@/data/dragonballQuest";

type TabId = "access" | "log";

const mono = "font-['JetBrains_Mono',ui-monospace,monospace]";
const sans = "font-['Noto_Sans_JP',sans-serif]";

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border border-[#2a3d36] bg-[#0d1010]/80 ${className}`}
    >
      <header
        className={`flex items-center justify-between border-b border-[#2a3d36] px-3 py-2 ${mono} text-[10px] uppercase tracking-[0.2em] text-[#5eead4]/90`}
      >
        <span>{title}</span>
        <span className="text-[#5a6f66]">///</span>
      </header>
      <div className="p-4 md:p-5">{children}</div>
    </section>
  );
}

export default function FindTheDragonballPage() {
  const [tab, setTab] = useState<TabId>("access");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [university, setUniversity] = useState<UniversityId | null>(null);
  const [pass, setPass] = useState("");
  const [solved, setSolved] = useState((): boolean[] => RIDDLES.map(() => false));
  const [riddleNo, setRiddleNo] = useState(1);
  const [answerDraft, setAnswerDraft] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const ts = () => new Date().toISOString().slice(11, 19);

  const [logLines, setLogLines] = useState<string[]>(() => [
    `${new Date().toISOString().slice(11, 19)} SYSTEM_STANDBY // awaiting registry`,
  ]);

  const pushLog = useCallback((line: string) => {
    setLogLines((prev) => [...prev.slice(-48), `${ts()} ${line}`]);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("ftdb-scrollable");
    return () => document.documentElement.classList.remove("ftdb-scrollable");
  }, []);

  const uniLabel = useMemo(
    () => UNIVERSITIES.find((u) => u.id === university)?.label ?? null,
    [university],
  );

  const passOk = useMemo(() => {
    if (!university) return false;
    const u = UNIVERSITIES.find((x) => x.id === university);
    if (!u) return false;
    return passesMatch(pass, u.pass);
  }, [university, pass]);

  const allSolved = solved.every(Boolean);
  const selectedMeta = university ? UNIVERSITIES.find((u) => u.id === university) : null;

  const onSelectUni = (id: UniversityId) => {
    setUniversity(id);
    setPickerOpen(false);
    setPass("");
    setFeedback(null);
    setSolved(RIDDLES.map(() => false));
    setAnswerDraft("");
    const label = UNIVERSITIES.find((u) => u.id === id)?.label;
    pushLog(`REGISTRY_SET // ${label}`);
  };

  const onSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    if (!passOk) {
      setFeedback("パスを確認してください。");
      return;
    }
    const n = riddleNo;
    if (solved[n - 1]) {
      setFeedback(`Q${n}: クリア済み`);
      return;
    }
    if (checkRiddleAnswer(n, answerDraft)) {
      setSolved((prev) => {
        const next = [...prev];
        next[n - 1] = true;
        if (next.every(Boolean)) {
          queueMicrotask(() => pushLog("COMPLETE // library_hint_unlocked"));
        }
        return next;
      });
      pushLog(`RIDDLE_OK // Q${n}`);
      setAnswerDraft("");
    } else {
      setFeedback(`Q${n}: 不一致`);
      pushLog(`RIDDLE_FAIL // Q${n}`);
    }
  };

  return (
    <div
      className={`ftdb-page min-h-screen w-full text-[#e8f0ec] ${sans}`}
      style={{
        background: "linear-gradient(180deg, #070908 0%, #0a100e 45%, #080c0b 100%)",
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(94,234,212,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94,234,212,0.35) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        <header className="mb-8 border-b border-[#2a3d36] pb-6">
          <p
            className={`mb-2 ${mono} text-[10px] tracking-[0.35em] text-[#5a6f66]`}
          >
            SESSION // DRG-PROTOCOL
          </p>
          <h1
            className={`${mono} text-2xl font-medium tracking-tight text-[#f0fdf9] md:text-3xl`}
            style={{ textShadow: "0 0 28px rgba(94,234,212,0.18)" }}
          >
            Find the Dragonball
          </h1>
          <nav
            className={`mt-6 flex gap-0 border border-[#2a3d36] ${mono} text-[11px]`}
            aria-label="セクション"
          >
            <button
              type="button"
              onClick={() => setTab("access")}
              className={`flex-1 border-r border-[#2a3d36] px-3 py-2.5 text-left transition-colors ${
                tab === "access"
                  ? "bg-[#143028] text-[#5eead4]"
                  : "bg-transparent text-[#8da89a] hover:bg-[#0f1614]"
              }`}
            >
              <span className="text-[#5a6f66]">01 </span>ACCESS
            </button>
            <button
              type="button"
              onClick={() => setTab("log")}
              className={`flex-1 px-3 py-2.5 text-left transition-colors ${
                tab === "log"
                  ? "bg-[#143028] text-[#5eead4]"
                  : "bg-transparent text-[#8da89a] hover:bg-[#0f1614]"
              }`}
            >
              <span className="text-[#5a6f66]">02 </span>LOG
            </button>
          </nav>
        </header>

        {tab === "log" ? (
          <Panel title="event_stream — readonly">
            <ul
              className={`max-h-[50vh] space-y-1.5 overflow-y-auto pr-1 ${mono} text-[12px] leading-relaxed text-[#9fb5aa]`}
            >
              {logLines.map((line, i) => (
                <li key={i} className="break-all border-l-2 border-[#1f2e29] pl-2">
                  {line}
                </li>
              ))}
            </ul>
          </Panel>
        ) : (
          <div className="space-y-5">
            <Panel title="university_registry — required">
              <p className={`mb-4 text-sm leading-relaxed text-[#b8cfc4] ${sans}`}>
                自身の大学を選択してください
              </p>

              <button
                type="button"
                onClick={() => setPickerOpen((v) => !v)}
                className={`mb-4 w-full border border-[#3d5248] bg-[#0f1614] px-4 py-3 text-left transition-colors hover:border-[#5eead4]/50 ${mono} text-[13px] text-[#e8f0ec]`}
              >
                {uniLabel ? (
                  <span>
                    <span className="text-[#5a6f66]">SELECTED ▸ </span>
                    {uniLabel}
                  </span>
                ) : (
                  <span className="text-[#6f8a7d]">
                    大学を選択（タップして展開）
                  </span>
                )}
              </button>

              {pickerOpen && (
                <ul className="mb-5 grid gap-2 sm:grid-cols-2">
                  {UNIVERSITIES.map((u) => (
                    <li key={u.id}>
                      <button
                        type="button"
                        onClick={() => onSelectUni(u.id)}
                        className={`w-full border px-3 py-2.5 text-left text-sm transition-colors ${
                          university === u.id
                            ? "border-[#5eead4] bg-[#143028] text-[#ecfeff]"
                            : "border-[#2f433b] bg-[#0c1210] text-[#cde4d8] hover:border-[#5eead4]/40"
                        } ${sans}`}
                      >
                        {u.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <label className={`block ${mono} text-[11px] uppercase tracking-[0.15em] text-[#6f8a7d]`}>
                Passcode
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  disabled={!university}
                  placeholder={university ? `1–6（${selectedMeta?.label}）` : "先に大学を選択"}
                  className="mt-2 w-full border border-[#2a3d36] bg-[#050706] px-3 py-2.5 text-[14px] text-[#e8f0ec] outline-none ring-0 placeholder:text-[#3d5248] focus:border-[#5eead4]/55 disabled:opacity-45"
                />
              </label>
              <p className={`mt-2 text-[11px] leading-relaxed text-[#5a6f66] ${sans}`}>
                仮パス：東大=1 / 早稲田=2 / 慶應=3 / 上智=4 / 東京科学大=5 / 東京理科大=6
              </p>

              {university && pass && !passOk && (
                <p className={`mt-3 text-sm text-[#f87171] ${sans}`}>パスが一致しません</p>
              )}
              {passOk && (
                <p className={`mt-3 text-sm text-[#5eead4] ${mono}`}>◆ GATE_OPEN // riddle_layer_unlocked</p>
              )}
            </Panel>

            <Panel
              title="riddle_cluster — 7 items"
              className={!passOk ? "opacity-[0.42] pointer-events-none select-none" : ""}
            >
              <ol className="space-y-4">
                {RIDDLES.map((r, idx) => (
                  <li
                    key={r.no}
                    className="border-l-2 border-[#1a2822] pl-3"
                  >
                    <div className={`flex flex-wrap items-baseline gap-2 ${mono} text-[11px] text-[#5eead4]`}>
                      <span>Q{r.no.toString().padStart(2, "0")}</span>
                      {solved[idx] && (
                        <span className="text-[#4ade80]">[ CLEARED ]</span>
                      )}
                    </div>
                    <p className={`mt-1.5 text-sm leading-relaxed text-[#c5ddd2] ${sans}`}>
                      {r.prompt}
                    </p>
                  </li>
                ))}
              </ol>

              {allSolved && university && (
                <div
                  className={`mt-6 border border-[#5eead4]/45 bg-[#0a1512] p-4 ${sans}`}
                >
                  <p className={`${mono} mb-2 text-[11px] tracking-[0.2em] text-[#5eead4]`}>
                    LIBRARY_VECTOR // FINAL
                  </p>
                  <p className="text-sm leading-relaxed text-[#eaf7f1]">
                    {LIBRARY_HINTS[university]}
                  </p>
                </div>
              )}

              <form
                onSubmit={onSubmitAnswer}
                className={`mt-6 space-y-4 border-t border-[#2a3d36] pt-5 ${mono}`}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-[#6f8a7d]">
                    Target_Q
                    <select
                      value={riddleNo}
                      onChange={(e) => {
                        setRiddleNo(Number(e.target.value));
                        setFeedback(null);
                      }}
                      className="mt-2 w-full cursor-pointer border border-[#2a3d36] bg-[#050706] px-3 py-2.5 text-[13px] text-[#e8f0ec] outline-none focus:border-[#5eead4]/55"
                      disabled={!passOk}
                    >
                      {RIDDLES.map((r) => (
                        <option key={r.no} value={r.no}>
                          Q{r.no.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-[#6f8a7d]">
                    Answer
                    <input
                      type="text"
                      value={answerDraft}
                      onChange={(e) => setAnswerDraft(e.target.value)}
                      disabled={!passOk}
                      className="mt-2 w-full border border-[#2a3d36] bg-[#050706] px-3 py-2.5 text-[13px] text-[#e8f0ec] outline-none focus:border-[#5eead4]/55 disabled:opacity-45"
                      placeholder="回答を入力"
                    />
                  </label>
                </div>
                {feedback && (
                  <p className={`text-[13px] text-[#fca5a5] ${sans}`}>{feedback}</p>
                )}
                <button
                  type="submit"
                  disabled={!passOk}
                  className="border border-[#5eead4]/60 bg-[#132620] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-[#a7f3d0] transition-colors hover:bg-[#1a3228] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Submit
                </button>
              </form>
            </Panel>
          </div>
        )}

        <footer
          className={`mt-12 border-t border-[#2a3d36] pt-6 ${mono} text-[10px] tracking-[0.12em] text-[#4a5c54]`}
        >
          © {new Date().getFullYear()} WHENTHEPIGSFLY // FIND_THE_DRAGONBALL — DEV_BUILD
        </footer>
      </div>
    </div>
  );
}
