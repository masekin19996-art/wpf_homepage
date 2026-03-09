"use client";

import { useEffect, useState } from "react";

export default function WiiClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!now) return <div style={{ width: 160, height: 52 }} />;

  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const h = now.getHours();
  const m = now.getMinutes();
  const ampm = h < 12 ? "am" : "pm";
  const h12 = h % 12 || 12;
  const pad = (n: number) => String(n).padStart(2, "0");
  const dateStr = `${now.getMonth() + 1}月${now.getDate()}日（${days[now.getDay()]}）`;

  return (
    <div className="select-none" style={{ textAlign: "center", lineHeight: 1 }}>
      {/* am/pm + 時刻 — Image#5スタイル */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "5px" }}>
        <span style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "clamp(11px, 1.1vw, 14px)",
          fontWeight: 400,
          color: "#7898b8",
          letterSpacing: "0.03em",
        }}>
          {ampm}
        </span>
        <span style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "clamp(26px, 2.8vw, 36px)",
          fontWeight: 700,
          color: "#1e3c66",
          letterSpacing: "0.01em",
        }}>
          {h12}:{pad(m)}
        </span>
      </div>
      {/* 日付 */}
      <div style={{
        fontFamily: "'M PLUS Rounded 1c', system-ui, sans-serif",
        fontSize: "clamp(11px, 1.05vw, 14px)",
        fontWeight: 500,
        color: "#5878a0",
        marginTop: "4px",
        letterSpacing: "0.02em",
      }}>
        {dateStr}
      </div>
    </div>
  );
}
