import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://faultplane-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "FaultPlane - Infrastructure Resilience for AI Workloads",
    template: "%s | FaultPlane",
  },

  description:
    "FaultPlane detects infrastructure failures, turns them into runtime state, and applies recovery policies for long-running AI workloads.",

  applicationName: "FaultPlane",

  keywords: [
    "infrastructure resilience",
    "AI infrastructure",
    "AI workloads",
    "runtime resilience",
    "eBPF",
    "Linux",
    "Go",
    "fault tolerance",
    "distributed systems",
    "OpenTelemetry",
  ],

  authors: [
    {
      name: "FaultPlane",
      url: "https://github.com/devloperdevesh/FaultPlane",
    },
  ],

  creator: "FaultPlane",
  publisher: "FaultPlane",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "FaultPlane",
    title: "FaultPlane - Infrastructure Resilience for AI Workloads",
    description:
      "Detect infrastructure failures, turn them into runtime state, and apply recovery policies before long-running AI workloads are disrupted.",
    images: [
      {
        url: "/logo/logo.png",
        width: 1192,
        height: 1115,
        alt: "FaultPlane",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FaultPlane - Infrastructure Resilience for AI Workloads",
    description:
      "Runtime resilience for long-running AI workloads.",
    images: ["/logo/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "FaultPlane",
      url: siteUrl,
      logo: `${siteUrl}/logo/logo.png`,
      sameAs: [
        "https://github.com/devloperdevesh/FaultPlane",
      ],
    },
    {
      "@type": "WebSite",
      name: "FaultPlane",
      url: siteUrl,
      description:
        "Infrastructure resilience for long-running AI workloads.",
    },
    {
      "@type": "SoftwareApplication",
      name: "FaultPlane",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux",
      description:
        "Open-source runtime infrastructure for detecting infrastructure conditions and applying resilience policies.",
      url: siteUrl,
      codeRepository:
        "https://github.com/devloperdevesh/FaultPlane",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}