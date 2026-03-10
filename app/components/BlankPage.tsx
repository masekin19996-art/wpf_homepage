"use client";

/**
 * 4つのサブドメイン（ultra.omamori / snobbycover / hickeytattoo / gummygummy）で表示する、
 * まっさらなページです。後からデザインやコンテンツを足せます。
 */
const SNobbyCoverHost = "snobbycover.whenpigsfly.jp";

export default function BlankPage({ host = "" }: { host?: string }) {
  const isSnobbyCover = host === SNobbyCoverHost;

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: isSnobbyCover ? undefined : "#f8f9fa",
        margin: 0,
        padding: 0,
      }}
    >
      {isSnobbyCover && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        >
          <source src="/videos/snobbycover-bg.mov" type="video/quicktime" />
        </video>
      )}
    </div>
  );
}
