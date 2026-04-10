"use client";

import { useCallback, useEffect, useState } from "react";

/** 本番 home のみ。ビルド時に Vercel 等で上書き可能（バンドルに含まれる点に注意） */
const PASSCODE =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_WPF_HOME_PASSCODE
    ? process.env.NEXT_PUBLIC_WPF_HOME_PASSCODE
    : "wpfcom1130";

const STORAGE_KEY = "wpf_home_gate_ok_v1";

type Props = {
  children: React.ReactNode;
};

export default function HomePasscodeGate({ children }: Props) {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } catch {
      /* private mode 等 */
    }
    setReady(true);
  }, []);

  const submit = useCallback(() => {
    if (input.trim() === PASSCODE) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setUnlocked(true);
      setError(false);
      return;
    }
    setError(true);
  }, [input]);

  if (!ready) {
    return (
      <div
        className="min-h-screen w-full"
        style={{ background: "#f8f9fa", margin: 0, padding: 0 }}
      />
    );
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(180deg, #e8eaed 0%, #d1d5db 100%)" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-gray-300/80 bg-white/90 p-8 shadow-lg"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <p className="mb-1 text-center text-sm font-medium text-gray-600">whenpigsfly</p>
        <h1 className="mb-6 text-center text-lg font-semibold text-gray-800">
          パスコードを入力してください
        </h1>
        <label className="sr-only" htmlFor="wpf-home-passcode">
          パスコード
        </label>
        <input
          id="wpf-home-passcode"
          type="password"
          autoComplete="current-password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          className="mb-3 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none ring-gray-400 focus:ring-2"
          placeholder="パスコード"
        />
        {error ? (
          <p className="mb-3 text-center text-sm text-red-600">パスコードが違います</p>
        ) : (
          <div className="mb-3 h-5" />
        )}
        <button
          type="button"
          onClick={submit}
          className="w-full rounded-lg bg-gray-800 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          入る
        </button>
      </div>
    </div>
  );
}
