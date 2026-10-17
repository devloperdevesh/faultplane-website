"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Activity, AlertTriangle, CheckCircle2, Shield, RotateCcw } from "lucide-react";
import Link from "next/link";

const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function LossImpactExperience() {
  const [failures, setFailures] = useState(4);
  const [downtime, setDowntime] = useState(2);
  const [costPerHour, setCostPerHour] = useState(500);
  const reducedMotion = useReducedMotion();
  const estimatedLoss = failures * downtime * costPerHour;

  const stages = [
    { title: "Workload running", detail: "Requests are being processed.", icon: Activity },
    { title: "Failure signal", detail: "An infrastructure issue is observed.", icon: AlertTriangle },
    { title: "Policy evaluation", detail: "A configured response is selected.", icon: Shield },
    { title: "Recovery path", detail: "The runtime can track the response.", icon: RotateCcw },
  ];

  return (
    <>
      <section className="section loss-experience" id="loss-calculator">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">THE COST OF FAILURE</span>
            <h2>Put an estimate on downtime.</h2>
            <p>
              Model the potential monthly impact of interruptions in your own
              workload. Adjust the assumptions to match your environment.
            </p>
          </div>

          <div className="loss-grid">
            <div className="loss-controls">
              <label className="loss-field">
                <span>Failures per month <strong>{failures}</strong></span>
                <input type="range" min="1" max="30" value={failures}
                  onChange={(event) => setFailures(Number(event.target.value))} />
                <small>How many incidents do you expect in a month?</small>
              </label>

              <label className="loss-field">
                <span>Downtime per failure <strong>{downtime} hr</strong></span>
                <input type="range" min="0.25" max="12" step="0.25" value={downtime}
                  onChange={(event) => setDowntime(Number(event.target.value))} />
                <small>Estimated downtime for each incident.</small>
              </label>

              <label className="loss-field">
                <span>Impact per downtime hour <strong>{money(costPerHour)}</strong></span>
                <input type="range" min="50" max="10000" step="50" value={costPerHour}
                  onChange={(event) => setCostPerHour(Number(event.target.value))} />
                <small>Include your own estimated operational and business impact.</small>
              </label>
            </div>

            <div className="loss-result" aria-live="polite">
              <span className="loss-result-label">ESTIMATED MONTHLY IMPACT</span>
              <motion.div
                key={estimatedLoss}
                initial={reducedMotion ? false : { opacity: 0.6, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="loss-total"
              >
                {money(estimatedLoss)}
              </motion.div>
              <p>
                {failures} incidents × {downtime} hours × {money(costPerHour)} per hour.
              </p>
              <div className="loss-result-note">
                <AlertTriangle size={18} />
                <span>
                  Illustrative estimate based on your inputs—not measured
                  FaultPlane savings or a guarantee of avoided loss.
                </span>
              </div>
              <Link className="button button-dark" href="/quickstart">
                Explore the runtime <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted loss-demo" id="failure-story">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">FAILURE → RESPONSE</span>
            <h2>See the resilience control loop.</h2>
            <p>
              An illustrative walkthrough of the concepts behind FaultPlane.
              This animation is not a live production connection or benchmark.
            </p>
          </div>

          <div className="loss-demo-panel">
            <div className="loss-demo-top">
              <span>FAULTPLANE / CONCEPTUAL WALKTHROUGH</span>
              <span className="loss-demo-indicator"><span /> ANIMATED DEMO</span>
            </div>
            <div className="loss-stage-grid">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.article
                    key={stage.title}
                    className="loss-stage"
                    initial={reducedMotion ? false : { opacity: 0.45, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.12 }}
                  >
                    <span className="loss-stage-number">0{index + 1}</span>
                    <div className="loss-stage-icon"><Icon size={21} /></div>
                    <h3>{stage.title}</h3>
                    <p>{stage.detail}</p>
                    {index < stages.length - 1 && <span className="loss-stage-arrow">→</span>}
                  </motion.article>
                );
              })}
            </div>
            <div className="loss-demo-footer">
              <CheckCircle2 size={18} />
              <span>
                Intended flow: observe a signal → represent runtime state →
                select policy → inspect the response.
              </span>
              <Link href="/failure-lab">Open Failure Lab <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PricingRoadmap() {
  return (
    <section className="section pricing-roadmap" id="pricing">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">PRICING & ROADMAP</span>
          <h2>Open source today. Commercial options shaped by real demand.</h2>
          <p>
            Start with the public repository. Hosted and enterprise offerings
            are proposed roadmap items, not currently available paid products.
          </p>
        </div>

        <div className="pricing-grid">
          <article className="pricing-card pricing-featured">
            <span className="pricing-status">AVAILABLE</span>
            <h3>Self-Hosted Core</h3>
            <p className="pricing-price">Free</p>
            <p>
              Explore the open-source project and evaluate it in your own
              development environment.
            </p>
            <ul>
              <li>Public source repository</li>
              <li>Self-hosted evaluation</li>
              <li>Community contributions</li>
              <li>No paid plan required to view the code</li>
            </ul>
            <a
              className="button button-dark"
              href="https://github.com/devloperdevesh/FaultPlane"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <ArrowRight size={15} />
            </a>
          </article>

          <article className="pricing-card">
            <span className="pricing-status planned">PROPOSED</span>
            <h3>Managed Cloud Hub</h3>
            <p className="pricing-price">Planned</p>
            <p>
              A potential hosted control and management experience for teams
              seeking simpler operations.
            </p>
            <ul>
              <li>Hosted management workflow — proposed</li>
              <li>Deployment and upgrade experience — to be validated</li>
              <li>Usage-based billing — under consideration</li>
              <li>No published rates or live service yet</li>
            </ul>
            <Link className="pricing-text-link" href="/feedback">
              Help shape the roadmap <ArrowRight size={15} />
            </Link>
          </article>

          <article className="pricing-card">
            <span className="pricing-status planned">PILOT DISCUSSION</span>
            <h3>Enterprise</h3>
            <p className="pricing-price">Discuss a pilot</p>
            <p>
              Explore potential organization-level requirements directly with
              the project team. Scope depends on validation and feasibility.
            </p>
            <ul>
              <li>Use-case and architecture discussion</li>
              <li>Potential integrations assessed case by case</li>
              <li>Security and operational requirements to be reviewed</li>
              <li>No current SLA or compliance certification claimed</li>
            </ul>
            <Link className="pricing-text-link" href="/commercial">
              Explore commercial roadmap <ArrowRight size={15} />
            </Link>
          </article>
        </div>

        <p className="pricing-footnote">
          Transparency note: only the public repository is presented as
          available. Managed cloud features, usage pricing and enterprise
          capabilities remain proposed and may change as the project evolves.
        </p>
      </div>
    </section>
  );
}
