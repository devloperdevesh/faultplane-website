"use client";
import Image from "next/image";
import { LossImpactExperience, PricingRoadmap } from "../components/LossImpactExperience";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  ExternalLink,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

const problemCards = [
  {
    title: "Network degradation",
    text: "Infrastructure conditions can change underneath a running workload.",
  },
  {
    title: "Worker instability",
    text: "Long-running workers need explicit runtime state when conditions degrade.",
  },
  {
    title: "Resource pressure",
    text: "CPU and memory pressure can become operational failure signals.",
  },
  {
    title: "Kernel signals",
    text: "Low-level system events can provide earlier signals than application symptoms.",
  },
];

const loopSteps = [
  ["01", "SIGNAL", "Observe infrastructure and workload conditions."],
  ["02", "STATE", "Turn signals into explicit runtime state."],
  ["03", "POLICY", "Select the configured resilience response."],
  ["04", "ENFORCE", "Apply the selected runtime action."],
  ["05", "RECOVER", "Track the resulting runtime state."],
  ["06", "TELEMETRY", "Expose metrics, logs, and events."],
];

const runtimeLayers = [
  "AI workload",
  "FaultPlane runtime",
  "Policy and enforcement",
  "Linux / eBPF",
  "Telemetry",
];

const evidenceItems = [
  "Failure detection latency",
  "Recovery latency",
  "CPU overhead",
  "Memory overhead",
  "Recovery success rate",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
  <div className="nav-inner">
    <Link href="/" className="brand" aria-label="FaultPlane home">
      <Image src="/logo/logo.png" alt="" width={40} height={40} />
      <span>FaultPlane</span>
    </Link>

    <div className="nav-links">
      <a href="#product">Product</a>
      <Link href="/failure-lab">Demo</Link>
      <Link href="/architecture">Architecture</Link>
      <Link href="/quickstart">Docs</Link>
      <Link href="/commercial">Teams</Link>
    </div>

    <div className="nav-actions">

      <Link href="/quickstart" className="nav-start">
        Run FaultPlane
        <ArrowRight size={14} />
      </Link>
    </div>
  </div>
</nav>

      <section className="hero">
        <div className="hero-grid" />

        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Infrastructure resilience for AI workloads
            </div>

            <h1>
              Keep AI workloads running when infrastructure changes.
            </h1>

            <p className="hero-sub">
              FaultPlane detects infrastructure problems, turns them into
              runtime state, and applies explicit recovery policies before they
              disrupt long-running workloads.
            </p>

            <div className="hero-actions">
              <Link
                className="button button-dark"
                href="/failure-lab"
              >
                See it work
                <ArrowRight size={16} />
              </Link>

              <Link
                className="button button-light"
                href="/quickstart"
              >
                Start building
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="hero-meta">
              <span>Open source</span>
              <i />
              <span>Linux</span>
              <i />
              <span>eBPF</span>
              <i />
              <span>Go</span>
              <i />
              <span>Observable</span>
            </div>
          </motion.div>

              <div className="fp-hero-visual">
                <div className="fp-hero-visual-glow" />

                <div className="fp-hero-image">
                  <Image
                    src="/images/faultplane/hero-runtime-stack.webp"
                    alt="FaultPlane runtime architecture visualization"
                    width={1200}
                    height={800}
                    sizes="(max-width: 1000px) 100vw, 50vw"
                  />
                </div>

                <div className="fp-hero-layer fp-hero-layer-top">
                  <span className="fp-layer-dot fp-blue" />
                  <span>AI WORKLOAD</span>
                  <strong>ACTIVE</strong>
                </div>

                <div className="fp-hero-layer fp-hero-layer-mid">
                  <span className="fp-layer-dot fp-green" />
                  <span>FAULTPLANE RUNTIME</span>
                  <strong>READY</strong>
                </div>

                <div className="fp-hero-layer fp-hero-layer-bottom">
                  <span className="fp-layer-dot fp-yellow" />
                  <span>RECOVERY PATH</span>
                  <strong>ARMED</strong>
                </div>

                <div className="fp-hero-signal">
                  <span />
                  SIGNAL FLOW
                </div>
              </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-inner">
          <span className="proof-label">BUILT FOR THE RUNTIME</span>

          <div className="proof-items">
            <span>OPEN SOURCE</span>
            <span>LINUX</span>
            <span>eBPF</span>
            <span>GO</span>
            <span>OPENTELEMETRY</span>
            <span>PROMETHEUS</span>
          </div>
        </div>
      </section>

      <section className="section" id="problem">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">THE PROBLEM</span>

            <h2>
              Infrastructure can fail
              <br />
              underneath a running workload.
            </h2>

            <p>
              AI workloads can run for minutes, hours, or days. When network,
              workers, resources, or kernel conditions change, recovery needs
              to become part of the runtime rather than an afterthought.
            </p>
          </div>

          <div className="problem-grid">
            {problemCards.map((card, index) => (
              <article className="problem-card" key={card.title}>
                <span>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="why">
        <div className="container why-grid">
          <div className="section-heading">
            <span className="section-kicker">WHY FAULTPLANE</span>

            <h2>
              Observability tells you
              <br />
              what happened.
            </h2>

            <p>
              FaultPlane is built around the next step: turn infrastructure
              signals into explicit runtime state, select a policy, and
              execute a recovery action.
            </p>
          </div>

          <div className="why-panel">
            <div className="why-panel-label">
              CONTROL LOOP
            </div>

            <div className="why-panel-flow">
              <span>Signal</span>
              <ArrowRight size={15} />
              <span>State</span>
              <ArrowRight size={15} />
              <span>Policy</span>
              <ArrowRight size={15} />
              <span>Recovery</span>
            </div>

            <div className="why-panel-note">
              <Check size={15} />
              Explicit state. Configured policy. Observable outcome.
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">HOW IT WORKS</span>

            <h2>One control loop from signal to recovery.</h2>

            <p>
              FaultPlane connects infrastructure signals, runtime state,
              resilience policy, enforcement, recovery, and telemetry.
            </p>
          </div>

          <div className="loop-grid">
            {loopSteps.map(([number, title, text]) => (
              <article className="loop-card" key={number}>
                <span className="loop-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="fp-visual-system">
        <div className="fp-visual-container">

          <div className="fp-visual-heading">
            <div>
              <span className="section-kicker">RUNTIME, VISUALIZED</span>
              <h2>See how infrastructure signals become recovery decisions.</h2>
            </div>

            <p>
              Follow the path from infrastructure signals to runtime state,
              policy decisions and recovery. One control-loop view,
              with each layer explained.
            </p>
          </div>

          <div className="fp-visual-grid">

            <article className="fp-visual-card fp-visual-large">
              <div className="fp-visual-card-top">
                <span>01 / CONTROL LOOP</span>
                <span className="fp-visual-live">CONTROL LOOP</span>
              </div>

              <div className="fp-image-frame fp-image-loop">
                <Image
                  src="/images/faultplane/control-loop-visual.webp"
                  alt="FaultPlane control loop visualization"
                  width={1200}
                  height={800}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>

              <div className="fp-visual-card-copy">
                <h3>From signal to recovery</h3>
                <p>
                  A runtime control loop designed around explicit state
                  and observable recovery behaviour.
                </p>
              </div>
            </article>

            <article className="fp-visual-card">
              <div className="fp-visual-card-top">
                <span>02 / RUNTIME</span>
                <span className="fp-status-pill">RUNTIME LAYER</span>
              </div>

              <div className="fp-image-frame fp-image-square">
                <Image
                  src="/images/faultplane/runtime-core.webp"
                  alt="FaultPlane runtime core visualization"
                  width={1200}
                  height={800}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>

              <div className="fp-visual-card-copy">
                <h3>Runtime control</h3>
                <p>
                  Recovery logic stays close to the infrastructure
                  conditions that trigger it.
                </p>
              </div>
            </article>

            <article className="fp-visual-card">
              <div className="fp-visual-card-top">
                <span>03 / INFRASTRUCTURE</span>
                <span className="fp-signal-pill">SIGNALS</span>
              </div>

              <div className="fp-image-frame fp-image-square">
                <Image
                  src="/images/faultplane/network-topology.webp"
                  alt="FaultPlane infrastructure topology"
                  width={1200}
                  height={800}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>

              <div className="fp-visual-card-copy">
                <h3>Infrastructure signals</h3>
                <p>
                  Linux, eBPF, runtime events and telemetry feed the
                  resilience loop.
                </p>
              </div>
            </article>

          </div>

          <div className="fp-architecture-visual">
            <div className="fp-architecture-copy">
              <span className="section-kicker">RUNTIME BOUNDARY</span>
              <h3>Built close to the signals that matter.</h3>
              <p>
                FaultPlane sits between workload behaviour and the
                infrastructure signals that can change underneath it.
              </p>

              <div className="fp-mini-stack">
                <span>AI WORKLOAD</span>
                <i />
                <span>FAULTPLANE</span>
                <i />
                <span>LINUX / eBPF</span>
                <i />
                <span>TELEMETRY</span>
              </div>
            </div>

            <div className="fp-chip-image">
              <Image
                src="/images/faultplane/faultplane-chip.webp"
                loading="eager"
                alt="FaultPlane runtime infrastructure visualization"
                width={1200}
                height={800}
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>
      <section className="dark-demo">
        <div className="container">
          <div className="dark-demo-header">
            <div>
              <span className="section-kicker light">
                SEE IT WORK
              </span>

              <h2>Trigger a problem. Watch the runtime respond.</h2>

              <p>
                Run the interactive Failure Lab and follow the control loop
                from signal detection to recovery.
              </p>
            </div>

            <Link className="button button-white" href="/failure-lab">
              Open Failure Lab
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="dark-demo-panel">
            <div className="dark-demo-top">
              <span>FAULTPLANE / FAILURE LAB</span>
              <span className="demo-live">
                <CircleDot size={11} />
                SIMULATION
              </span>
            </div>

            <div className="dark-demo-flow">
              <div>
                <small>01</small>
                <strong>Signal</strong>
                <span>Infrastructure condition</span>
              </div>

              <ArrowRight size={20} />

              <div>
                <small>02</small>
                <strong>State</strong>
                <span>Runtime condition</span>
              </div>

              <ArrowRight size={20} />

              <div>
                <small>03</small>
                <strong>Policy</strong>
                <span>Action selected</span>
              </div>

              <ArrowRight size={20} />

              <div>
                <small>04</small>
                <strong>Recovery</strong>
                <span>Runtime restored</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="architecture">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">
              BUILT AT THE RUNTIME BOUNDARY
            </span>

            <h2>Close to the signals that matter.</h2>

            <p>
              FaultPlane is designed to connect workload state with low-level
              infrastructure signals and observable recovery actions.
            </p>
          </div>

          <div className="architecture-stack">
            {runtimeLayers.map((layer, index) => (
              <div className="architecture-row" key={layer}>
                <span className="architecture-number">
                  0{index + 1}
                </span>

                <div className="architecture-icon">
                  {index === 0 && <Zap size={17} />}
                  {index === 1 && <Shield size={17} />}
                  {index === 2 && <Check size={17} />}
                  {index === 3 && <Terminal size={17} />}
                  {index === 4 && <CircleDot size={17} />}
                </div>

                <div>
                  <strong>{layer}</strong>

                  <span>
                    {index === 0 &&
                      "Long-running agents, services, and AI workloads."}

                    {index === 1 &&
                      "Runtime state, policy evaluation, and recovery logic."}

                    {index === 2 &&
                      "Configured actions and runtime enforcement."}

                    {index === 3 &&
                      "Kernel and low-level infrastructure signals."}

                    {index === 4 &&
                      "Metrics, logs, traces, and runtime events."}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-link">
            <Link href="/architecture">
              Explore the full architecture
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <LossImpactExperience />

      <section className="section section-muted" id="evidence">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">RUNTIME EVIDENCE</span>

            <h2>Measure the runtime. Publish the numbers.</h2>

            <p>
              FaultPlane should be evaluated with reproducible measurements.
              This section is intentionally reserved for real benchmark
              results rather than marketing claims.
            </p>
          </div>

          <div className="evidence-grid">
            {evidenceItems.map((item, index) => (
              <article className="evidence-card" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <small>Measurement pending</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingRoadmap />

      <section className="section" id="developers">
        <div className="container developer-grid">
          <div className="section-heading">
            <span className="section-kicker">FOR DEVELOPERS</span>

            <h2>Run it. Inspect it. Change it.</h2>

            <p>
              FaultPlane is open source. Clone the repository, build the
              runtime, run controlled failure scenarios, and inspect the
              implementation yourself.
            </p>

            <div className="section-actions">
              <Link className="button button-dark" href="/quickstart">
                Quickstart
                <ArrowRight size={16} />
              </Link>

              <a
                className="button button-light"
                href="https://github.com/devloperdevesh/FaultPlane"
                target="_blank"
                rel="noreferrer"
              >
                View source <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="code-panel">
            <div className="code-panel-top">
              <span>TERMINAL</span>
              <span>LOCAL</span>
            </div>

            <pre>{`git clone https://github.com/devloperdevesh/FaultPlane.git

cd FaultPlane

go build ./...

go run ./cmd/daemon`}</pre>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="teams">
        <div className="container teams-grid">
          <div className="section-heading">
            <span className="section-kicker">FOR TEAMS</span>

            <h2>Build resilience into the runtime.</h2>

            <p>
              For teams operating long-running workloads, FaultPlane provides
              a foundation for explicit resilience policies, runtime
              enforcement, and operational visibility.
            </p>
          </div>

          <div className="teams-list">
            <div>
              <Check size={16} />
              Runtime resilience policies
            </div>

            <div>
              <Check size={16} />
              Infrastructure signal handling
            </div>

            <div>
              <Check size={16} />
              Recovery and enforcement controls
            </div>

            <div>
              <Check size={16} />
              Observable runtime behaviour
            </div>

            <Link href="/commercial">
              Explore team capabilities
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-panel">
          <span className="section-kicker light">
            START WITH THE RUNTIME
          </span>

          <h2>Keep the workload running.</h2>

          <p>
            Explore the Failure Lab, run FaultPlane locally, or inspect the
            source.
          </p>

          <div className="cta-actions">
            <Link className="button button-white" href="/failure-lab">
              Run Failure Lab
              <ArrowRight size={16} />
            </Link>

            <Link className="button button-outline-white" href="/quickstart">
              Quickstart
              <Terminal size={16} />
            </Link>

            <a
              className="button button-outline-white"
              href="https://github.com/devloperdevesh/FaultPlane"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <div>
            <Link href="/" className="footer-brand">
              <Image src="/logo/logo.png" alt="FaultPlane" width={40} height={40} />
              <span>FaultPlane</span>
            </Link>

            <p>
              Infrastructure resilience for long-running AI workloads.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Product</span>
              <Link href="/architecture">Architecture</Link>
              <Link href="/failure-lab">Failure Lab</Link>
            </div>

            <div>
              <span>Developers</span>
              <Link href="/quickstart">Quickstart</Link>
              <Link href="/feedback">Feedback</Link>
            </div>

            <div>
              <span>Teams</span>
              <Link href="/commercial">For teams</Link>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>Open source infrastructure software.</span>
          <span>{String.fromCharCode(169)} {new Date().getFullYear()} FaultPlane</span>
        </div>
      </footer>
    </main>
  );
}
