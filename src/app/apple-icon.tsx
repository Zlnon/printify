import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE566"/>
      <stop offset="50%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#E6B800"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="16" fill="#0a0a0a"/>
  <text x="50%" y="53%" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="bold" fill="url(#gold)" text-anchor="middle" dominant-baseline="middle">P</text>
</svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml,${encodeURIComponent(iconSvg)}`}
          width={180}
          height={180}
          alt=""
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
