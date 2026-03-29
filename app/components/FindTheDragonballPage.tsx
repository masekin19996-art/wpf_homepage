"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  UNIVERSITIES,
  RIDDLES,
  LIBRARY_HINTS,
  passesMatch,
  checkRiddleAnswer,
  type UniversityId,
} from "@/data/dragonballQuest";

type TabId = "access" | "log";
type ViewPhase = "gate" | "loading" | "quest";

/** 無機質寄りの UI 用モノスペース */
const mono =
  "font-['IBM_Plex_Mono',ui-monospace,'Courier_New',monospace]";
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
        className={`flex items-center justify-between border-b border-[#2a3d36] px-3 py-2 ${mono} text-[10px] uppercase tracking-[0.28em] text-[#5eead4]/85`}
      >
        <span>{title}</span>
        <span className="text-[#5a6f66]">///</span>
      </header>
      <div className="p-4 md:p-5">{children}</div>
    </section>
  );
}

function LoadingScreen({ lines }: { lines: string[] }) {
  return (
    <div
      className={`ftdb-page fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050706] px-6 text-[#8aa99a] ${mono}`}
    >
      <p className="mb-8 text-[10px] tracking-[0.45em] text-[#5a6f66]">
        HANDSHAKE
      </p>
      <div className="w-full max-w-md space-y-3 border border-[#2a3d36] bg-[#0a0d0c] p-6">
        {lines.map((line, i) => (
          <p
            key={`${line}-${i}`}
            className={`text-[12px] tracking-wide animate-pulse`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <span className="text-[#5eead4]/70">{">"} </span>
            {line}
          </p>
        ))}
        <p className="pt-2 text-[#5eead4]">
          <span className="inline-block h-3 w-2 animate-pulse bg-[#5eead4]" />
        </p>
      </div>
    </div>
  );
}

export default function FindTheDragonballPage() {
  const [viewPhase, setViewPhase] = useState<ViewPhase>("gate");
  const [loadingLines, setLoadingLines] = useState<string[]>([]);
  const [tab, setTab] = useState<TabId>("access");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [university, setUniversity] = useState<UniversityId | null>(null);
  const [pass, setPass] = useState("");
  const [solved, setSolved] = useState((): boolean[] => RIDDLES.map(() => false));
  const [riddleNo, setRiddleNo] = useState(1);
  const [answerDraft, setAnswerDraft] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gateError, setGateError] = useState<string | null>(null);
  const [showLibraryModal, setShowLibraryModal] = useState(false);
  /** 図書館ヒントのモーダルは一度だけ */
  const libraryPopupConsumedRef = useRef(false);

  const ts = useCallback(
    () => new Date().toISOString().slice(11, 19),
    [],
  );

  const [logLines, setLogLines] = useState<string[]>(() => [
    `${new Date().toISOString().slice(11, 19)} SYSTEM_STANDBY // awaiting registry`,
  ]);

  const pushLog = useCallback(
    (line: string) => {
      setLogLines((prev) => [...prev.slice(-48), `${ts()} ${line}`]);
    },
    [ts],
  );

  useEffect(() => {
    document.documentElement.classList.add("ftdb-scrollable");
    return () => document.documentElement.classList.remove("ftdb-scrollable");
  }, []);

  const uniLabel = useMemo(
    () => UNIVERSITIES.find((u) => u.id === university)?.label ?? null,
    [university],
  );

  const allSolved = solved.every(Boolean);

  const selectedMeta = university
    ? UNIVERSITIES.find((u) => u.id === university)
    : null;

  const onSelectUni = (id: UniversityId) => {
    setUniversity(id);
    setPickerOpen(false);
    setPass("");
    setFeedback(null);
    setGateError(null);
    setSolved(RIDDLES.map(() => false));
    setAnswerDraft("");
    const label = UNIVERSITIES.find((u) => u.id === id)?.label;
    pushLog(`REGISTRY_SET // ${label}`);
  };

  const runLoadingSequence = useCallback(() => {
    const seq = [
      "AUTH_PAYLOAD_SEAL_OK",
      "DERIVING_RIDDLE_MANIFEST",
      "ALLOCATING_SECURE_CHANNEL",
    ];
    setLoadingLines([]);
    setViewPhase("loading");
    seq.forEach((line, i) => {
      setTimeout(() => {
        setLoadingLines((prev) => [...prev, line]);
      }, 280 + i * 420);
    });
    setTimeout(() => {
      setViewPhase("quest");
      pushLog("SESSION_PROMOTED // riddle_layer_active");
      setTab("access");
    }, 2200);
  }, [pushLog]);

  const onGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGateError(null);
    if (!university) {
      setGateError("大学を選択してください。");
      return;
    }
    if (!passesMatch(pass, selectedMeta?.pass ?? "")) {
      setGateError("パスが一致しません。");
      pushLog("GATE_FAIL // invalid_pass");
      return;
    }
    pushLog("GATE_ACCEPT // loading_manifest");
    runLoadingSequence();
  };

  useEffect(() => {
    if (allSolved && university && !libraryPopupConsumedRef.current) {
      libraryPopupConsumedRef.current = true;
      setShowLibraryModal(true);
      pushLog("COMPLETE // library_hint_modal");
    }
  }, [allSolved, university, pushLog]);

  const onSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    const n = riddleNo;
    if (solved[n - 1]) {
      setFeedback(`Q${n}: クリア済み`);
      return;
    }
    if (checkRiddleAnswer(n, answerDraft)) {
      setSolved((prev) => {
        const next = [...prev];
        next[n - 1] = true;
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
      {viewPhase === "loading" && <LoadingScreen lines={loadingLines} />}

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(94,234,212,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94,234,212,0.3) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* 図書館ヒント：全問正解後に一度だけ */}
      {showLibraryModal && university && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020403]/88 px-4 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ftdb-library-title"
        >
          <div
            className={`max-h-[85vh] w-full max-w-lg overflow-y-auto border border-[#5eead4]/50 bg-[#0a100e] shadow-[0_0_40px_rgba(94,234,212,0.12)] ${mono}`}
          >
            <div className="border-b border-[#2a3d36] px-4 py-3 text-[10px] uppercase tracking-[0.3em] text-[#5eead4]">
              LIBRARY_VECTOR // one_shot
            </div>
            <div className="p-5">
              <h2
                id="ftdb-library-title"
                className={`mb-4 text-[11px] tracking-[0.2em] text-[#6f8a7d] ${mono}`}
              >
                DROP_COORDINATE
              </h2>
              <p
                className={`text-[15px] leading-[1.75] text-[#e8f0ec] md:text-[16px] ${sans}`}
              >
                {LIBRARY_HINTS[university]}
              </p>
              <p className={`mt-4 text-[11px] leading-relaxed text-[#5a6f66] ${sans}`}>
                この内容は再表示されません。必要ならメモしてください。
              </p>
              <button
                type="button"
                onClick={() => setShowLibraryModal(false)}
                className="mt-6 w-full border border-[#3d5248] bg-[#0f1614] py-3 text-[11px] uppercase tracking-[0.25em] text-[#8ecabc] transition-colors hover:border-[#5eead4]/45 hover:text-[#5eead4]"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        <header className="mb-8 border-b border-[#2a3d36] pb-6">
          <p
            className={`mb-2 ${mono} text-[10px] tracking-[0.4em] text-[#5a6f66]`}
          >
            SESSION // DRG-PROTOCOL
          </p>
          <h1
            className={`${mono} text-2xl font-medium tracking-tight text-[#f0fdf9] md:text-3xl`}
            style={{ textShadow: "0 0 24px rgba(94,234,212,0.14)" }}
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
              className={`max-h-[50vh] space-y-1.5 overflow-y-auto pr-1 ${mono} text-[12px] leading-relaxed tracking-wide text-[#9fb5aa]`}
            >
              {logLines.map((line, i) => (
                <li key={i} className="break-all border-l-2 border-[#1f2e29] pl-2">
                  {line}
                </li>
              ))}
            </ul>
          </Panel>
        ) : viewPhase === "gate" ? (
          <form onSubmit={onGateSubmit} className="space-y-5">
            <Panel title="university_registry — required">
              <p className={`mb-4 text-sm leading-relaxed text-[#b8cfc4] ${sans}`}>
                自身の大学を選択してください
              </p>

              <button
                type="button"
                onClick={() => setPickerOpen((v) => !v)}
                className={`mb-4 w-full border border-[#3d5248] bg-[#0f1614] px-4 py-3 text-left transition-colors hover:border-[#5eead4]/50 ${mono} text-[13px] tracking-wide text-[#e8f0ec]`}
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

              <label
                className={`block ${mono} text-[11px] uppercase tracking-[0.2em] text-[#6f8a7d]`}
              >
                Passcode
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  disabled={!university}
                  placeholder={university ? `1–6（${selectedMeta?.label}）` : "先に大学を選択"}
                  className="mt-2 w-full border border-[#2a3d36] bg-[#050706] px-3 py-2.5 text-[14px] text-[#e8f0ec] outline-none ring-0 placeholder:text-[#3d5248] focus:border-[#5eead4]/55 disabled:opacity-50"
                />
              </label>
              <p className={`mt-2 text-[11px] leading-relaxed text-[#5a6f66] ${sans}`}>
                仮パス：東大=1 / 早稲田=2 / 慶應=3 / 上智=4 / 東京科学大=5 / 東京理科大=6 — Enterで確定
              </p>

              {gateError && (
                <p className={`mt-3 text-sm text-[#f87171] ${sans}`}>{gateError}</p>
              )}

              <button
                type="submit"
                className={`mt-6 w-full border border-[#5eead4]/55 bg-[#132620] py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#a7f3d0] transition-colors hover:bg-[#1a3228] ${mono}`}
              >
                Enter — 接続
              </button>
            </Panel>
          </form>
        ) : (
          <div className="space-y-5">
            {uniLabel && (
              <p
                className={`border border-[#2a3d36] bg-[#0c1010] px-3 py-2 text-[11px] tracking-wide text-[#6f8a7d] ${mono}`}
              >
                BINDING ▸ <span className="text-[#9fbdaa]">{uniLabel}</span>
              </p>
            )}
            <Panel title="riddle_cluster — 7 items">
              <ol className="space-y-6">
                {RIDDLES.map((r, idx) => (
                  <li key={r.no} className="border-l-2 border-[#1a2822] pl-4">
                    <div
                      className={`flex flex-wrap items-baseline gap-2 ${mono} text-[11px] tracking-wide text-[#5eead4]`}
                    >
                      <span>Q{r.no.toString().padStart(2, "0")}</span>
                      {solved[idx] && (
                        <span className="text-[#4ade80]">[ CLEARED ]</span>
                      )}
                    </div>
                    <p
                      className={`mt-2 text-[15px] leading-relaxed text-[#d0e5dc] md:text-[17px] ${sans}`}
                    >
                      {r.prompt}
                    </p>
                  </li>
                ))}
              </ol>

              <form
                onSubmit={onSubmitAnswer}
                className={`mt-8 space-y-4 border-t border-[#2a3d36] pt-6 ${mono}`}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[11px] uppercase tracking-[0.14em] text-[#6f8a7d]">
                    Target_Q
                    <select
                      value={riddleNo}
                      onChange={(e) => {
                        setRiddleNo(Number(e.target.value));
                        setFeedback(null);
                      }}
                      className="mt-2 w-full cursor-pointer border border-[#2a3d36] bg-[#050706] px-3 py-2.5 text-[13px] tracking-wide text-[#e8f0ec] outline-none focus:border-[#5eead4]/55"
                    >
                      {RIDDLES.map((r) => (
                        <option key={r.no} value={r.no}>
                          Q{r.no.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-[11px] uppercase tracking-[0.14em] text-[#6f8a7d]">
                    Answer
                    <input
                      type="text"
                      value={answerDraft}
                      onChange={(e) => setAnswerDraft(e.target.value)}
                      className="mt-2 w-full border border-[#2a3d36] bg-[#050706] px-3 py-2.5 text-[13px] tracking-wide text-[#e8f0ec] outline-none focus:border-[#5eead4]/55"
                      placeholder="回答を入力"
                    />
                  </label>
                </div>
                {feedback && (
                  <p className={`text-[13px] text-[#fca5a5] ${sans}`}>{feedback}</p>
                )}
                <button
                  type="submit"
                  className={`border border-[#5eead4]/60 bg-[#132620] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#a7f3d0] transition-colors hover:bg-[#1a3228] ${mono}`}
                >
                  Submit
                </button>
              </form>
            </Panel>
          </div>
        )}

        <footer
          className={`mt-12 border-t border-[#2a3d36] pt-6 ${mono} text-[10px] tracking-[0.18em] text-[#4a5c54]`}
        >
          © {new Date().getFullYear()} WHENTHEPIGSFLY // FIND_THE_DRAGONBALL — DEV_BUILD
        </footer>
      </div>
    </div>
  );
}
