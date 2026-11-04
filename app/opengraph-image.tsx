import { ImageResponse } from "next/og";

export const alt = "Mohtisham Khan — UI Engineer & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#303030",
          color: "#ffffff",
          padding: 88,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#5e67e6",
            opacity: 0.85,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 220,
            bottom: -140,
            width: 300,
            height: 300,
            borderRadius: 9999,
            border: "2px solid rgba(255,255,255,0.35)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a9aef0",
          }}
        >
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Mohtisham Khan
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 300,
              color: "#d7d9f7",
            }}
          >
            UI Engineer &amp; Frontend Developer
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
