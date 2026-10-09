import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        <div className="footer-brand-block">
          <Link href="/" className="footer-brand">
            <Image src="/logo/logo.png" alt="" width={40} height={40} />
            <span>FaultPlane</span>
          </Link>

          <p>
            Infrastructure resilience for long-running AI workloads.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <span>Product</span>
            <Link href="/#product">Overview</Link>
            <Link href="/failure-lab">Demo</Link>
            <Link href="/architecture">Architecture</Link>
          </div>

          <div>
            <span>Developers</span>
            <Link href="/quickstart">Docs</Link>
            <Link href="/feedback">Feedback</Link>
          </div>

          <div>
            <span>Teams</span>
            <Link href="/commercial">Teams</Link>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <span>Open source infrastructure software.</span>
        <span>(c) {new Date().getFullYear()} FaultPlane</span>
      </div>
    </footer>
  );
}

