import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const layers = [
  {
    number: "01",
    title: "Workload",
    text: "The long-running AI workload whose continuity matters.",
  },
  {
    number: "02",
    title: "Infrastructure signals",
    text: "Signals from the operating environment and runtime.",
  },
  {
    number: "03",
    title: "Runtime state",
    text: "Signals become explicit state transitions.",
  },
  {
    number: "04",
    title: "Resilience policy",
    text: "Configured behaviour determines what happens next.",
  },
  {
    number: "05",
    title: "Enforcement",
    text: "Runtime actions are applied at the appropriate layer.",
  },
  {
    number: "06",
    title: "Telemetry",
    text: "Events and state remain observable.",
  },
];

export default function Architecture() {
  return (
    <>
      <SiteNav />

      <main className="inner-page">
        <section className="inner-hero">
          <div className="section-label">HOW IT WORKS</div>
          <h1>
            A control loop
            <span>for runtime resilience.</span>
          </h1>
          <p>
            FaultPlane connects infrastructure signals, runtime state,
            policy, enforcement, recovery, and telemetry into one
            inspectable system.
          </p>
        </section>

        <section className="architecture-system">
          <div className="system-line" />

          {layers.map((layer, index) => (
            <div className="system-layer" key={layer.number}>
              <div className={`system-number system-${index + 1}`}>
                {layer.number}
              </div>
              <div className="system-content">
                <span>RUNTIME LAYER</span>
                <h2>{layer.title}</h2>
                <p>{layer.text}</p>
              </div>
              {index < layers.length - 1 && (
                <div className="system-connector">â†“</div>
              )}
            </div>
          ))}
        </section>

        <section className="architecture-detail">
          <div>
            <div className="section-label">THE DESIGN PRINCIPLE</div>
            <h2>Make the decision visible.</h2>
          </div>

          <div>
            <p>
              Resilience behaviour becomes difficult to reason about when
              detection, policy, and recovery are hidden across application
              code.
            </p>
            <p>
              FaultPlane keeps those transitions explicit so engineers can
              observe what changed, understand why a policy was selected,
              and inspect the resulting runtime behaviour.
            </p>
          </div>
        </section>

        <section className="architecture-tech">
          <div className="section-label">TECHNICAL SURFACE</div>

          <div className="tech-grid">
            <div><strong>Linux</strong><span>runtime signals</span></div>
            <div><strong>eBPF</strong><span>enforcement layer</span></div>
            <div><strong>OpenTelemetry</strong><span>observability</span></div>
            <div><strong>Go</strong><span>runtime services</span></div>
          </div>
        </section>

        <section className="page-cta">
          <h2>Want to see the runtime react?</h2>
          <p>Walk through the control loop in the interactive demo.</p>
          <Link href="/failure-lab" className="button button-dark">
            See it recover -&gt;
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}