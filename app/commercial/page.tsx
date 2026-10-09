import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function CommercialPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container narrow">
          <span className="section-label">FOR TEAMS</span>
          <h1>Open source at the core. Built for production.</h1>
          <p>
            FaultPlane is an open runtime for infrastructure resilience in
            long-running AI workloads. Teams can run it themselves while
            future commercial products can simplify operating resilience at scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">BUSINESS MODEL</span>
            <h2>Keep the runtime open. Monetize the operational layer.</h2>
            <p>
              Developers can inspect and self-host the core runtime. The
              commercial opportunity is to make production operation easier,
              safer, and more manageable for teams.
            </p>
          </div>

          <div className="developer-grid">
            <div className="dev-card">
              <span className="card-number">01</span>
              <h3>Open-source runtime</h3>
              <p>
                The core runtime remains available for developers to inspect,
                build, run, and contribute to.
              </p>
              <a
                href="https://github.com/devloperdevesh/FaultPlane"
                target="_blank"
                rel="noreferrer"
              >
                View source <ArrowRight size={15} />
              </a>
            </div>

            <div className="dev-card">
              <span className="card-number">02</span>
              <h3>Managed cloud</h3>
              <p>
                A future hosted offering can handle deployment, upgrades,
                operational maintenance, and centralized management.
              </p>
              <span className="text-button">Planned</span>
            </div>

            <div className="dev-card">
              <span className="card-number">03</span>
              <h3>Enterprise controls</h3>
              <p>
                Future commercial capabilities may include organization-level
                access controls, audit workflows, integrations, and support.
              </p>
              <span className="text-button">Planned</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container commercial-grid">
          <div className="commercial-copy">
            <span className="section-label">OPEN-SOURCE ADVANTAGE</span>
            <h2>Adoption starts with the developer.</h2>
            <p>
              Developers can evaluate the runtime without waiting for a sales
              process. Teams can inspect the implementation and understand the
              recovery path before adopting it.
            </p>

            <ul>
              <li><Check size={16} /> Inspectable implementation</li>
              <li><Check size={16} /> Self-hostable runtime</li>
              <li><Check size={16} /> Public development</li>
              <li><Check size={16} /> No required hosted dependency</li>
            </ul>
          </div>

          <div className="commercial-card">
            <span>COMMERCIAL ROADMAP</span>

            <h3>
              Earn trust with the runtime. Charge for operational leverage.
            </h3>

            <p>
              The long-term opportunity is not to hide the basic runtime behind
              a paywall. It is to make resilience easier to operate across
              teams and infrastructure.
            </p>

            <div style={{ display: "grid", gap: "18px", marginTop: "25px" }}>
              <div>
                <strong>Today</strong>
                <p>Open-source runtime and public development.</p>
              </div>

              <div>
                <strong>Next</strong>
                <p>
                  Validate real team requirements and production workflows.
                </p>
              </div>

              <div>
                <strong>Later</strong>
                <p>
                  Managed operations, enterprise controls, and support where
                  customers actually need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-demo">
        <div className="container dark-demo-inner">
          <div>
            <span className="section-label light">PRODUCT THESIS</span>
            <h2>Make infrastructure failures part of the runtime.</h2>

            <p>
              FaultPlane turns infrastructure conditions into explicit runtime
              state and deliberate recovery actions instead of leaving failures
              as unexplained application outages.
            </p>
          </div>

          <div className="terminal-window">
            <div className="terminal-head">
              <span />
              <span />
              <span />
              <b>faultplane-runtime</b>
            </div>

            <div className="terminal-body">
              <div><em>$</em> faultplane health</div>
              <div className="muted">runtime: ready</div>
              <div><span className="cyan">signal</span> → observed</div>
              <div><span className="yellow">state</span> → explicit</div>
              <div><span className="green">policy</span> → selected</div>
              <div><span className="green">recovery</span> → completed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="contact">
        <div className="container cta-panel">
          <div>
            <span className="section-label">NEXT STEP</span>
            <h2>Run it before you buy anything.</h2>
            <p>
              Start with the open-source runtime. Then tell us what your
              production environment needs.
            </p>
          </div>

          <div className="cta-actions">
            <Link className="button button-dark" href="/quickstart">
              Start building <ArrowRight size={16} />
            </Link>

            <a
              className="button button-light"
              href="https://github.com/devloperdevesh/FaultPlane/issues"
              target="_blank"
              rel="noreferrer"
            >
              Open an issue
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}