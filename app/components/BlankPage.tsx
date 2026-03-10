"use client";

/**
 * 4つのサブドメイン（ultra.omamori / snobbycover / hickeytattoo / gummygummy）で表示する、
 * まっさらなページです。後からデザインやコンテンツを足せます。
 */
export default function BlankPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "#f8f9fa",
        margin: 0,
        padding: 0,
      }}
    />
  );
}
