"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="nav-shell">

        <Link href="/" className="wordmark" aria-label="FaultPlane home">
          <Image
            src="/logo/logo.png"
            alt=""
            width={40}
            height={40}
            className="wordmark-logo"
          />
          <span>FaultPlane</span>
        </Link>

        <div className="nav-links">
          <Link href="/#product">Product</Link>
          <Link href="/failure-lab">Demo</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/quickstart">Docs</Link>
          <Link href="/commercial">Teams</Link>
        </div>

        <a
          href="https://github.com/devloperdevesh/FaultPlane"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub
          <ArrowUpRight size={14} />
        </a>

      </div>
    </nav>
  );
}

