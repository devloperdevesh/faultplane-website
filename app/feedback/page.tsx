import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export default function Feedback() {
  return (
    <>
      <SiteNav />

      <main className="inner-page">
        <section className="inner-hero">
          <div className="section-label">FEEDBACK</div>
          <h1>
            Help shape
            <span>FaultPlane.</span>
          </h1>
          <p>
            Found a bug, have an integration idea, or want to try the runtime
            against a real workload?
          </p>
        </section>

        <section className="feedback-grid">
          <a
            className="feedback-card"
            href="https://github.com/devloperdevesh/FaultPlane/issues"
            target="_blank"
            rel="noreferrer"
          >
            <span>01</span>
            <h2>Report a problem</h2>
            <p>Share reproduction steps, logs, and the environment.</p>
            <b>Open GitHub issue â†’</b>
          </a>

          <a
            className="feedback-card"
            href="https://github.com/devloperdevesh/FaultPlane/issues"
            target="_blank"
            rel="noreferrer"
          >
            <span>02</span>
            <h2>Request a capability</h2>
            <p>Tell us about the workload or resilience behaviour you need.</p>
            <b>Request a feature â†’</b>
          </a>

          <Link href="/quickstart" className="feedback-card">
            <span>03</span>
            <h2>Try the runtime</h2>
            <p>Run FaultPlane locally and tell us what you discover.</p>
            <b>Start building â†’</b>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}