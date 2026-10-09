"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCcw,
} from "lucide-react";

const events = [
  {
    number: "01",
    label: "SIGNAL",
    title: "Infrastructure condition detected",
    source: "kernel/rtnetlink",
    detail: "The runtime receives an infrastructure event.",
  },
  {
    number: "02",
    label: "STATE",
    title: "Runtime state changes",
    source: "runtime/state",
    detail: "The condition becomes explicit runtime state.",
  },
  {
    number: "03",
    label: "POLICY",
    title: "Recovery action selected",
    source: "policy/engine",
    detail: "The configured resilience policy determines the response.",
  },
  {
    number: "04",
    label: "RECOVERY",
    title: "Action completes",
    source: "control/recovery",
    detail: "The result is recorded as a runtime event.",
  },
];

export default function FailureLabPage() {
  const [active, setActive] = useState(-1);
  const [running, setRunning] = useState(false);

  function runSimulation() {
    setRunning(true);
    setActive(-1);

    let current = 0;

    const timer = window.setInterval(() => {
      setActive(current);
      current += 1;

      if (current >= events.length) {
        window.clearInterval(timer);
        window.setTimeout(() => setRunning(false), 350);
      }
    }, 650);
  }

  function reset() {
    setActive(-1);
    setRunning(false);
  }

  return (
    <main>
      <section className="inner-hero">
        <div className="container narrow">
          <span className="section-label">FAILURE LAB</span>

          <h1>
            Watch the runtime
            <br />
            respond to change.
          </h1>

          <p>
            Trigger an infrastructure condition and follow the runtime from
            signal to recovery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container lab-shell">
          <div className="lab-top">
            <div>
              <span className="section-label">LIVE SIMULATION</span>
              <h2>Network degradation</h2>
              <p>
                One condition. One runtime decision. One observable result.
              </p>
            </div>

            <button
              className="button button-dark"
              onClick={runSimulation}
              disabled={running}
            >
              <Play size={15} />
              {running ? "Running..." : "Trigger event"}
            </button>
          </div>

          <div className="lab-timeline">
            {events.map((event, index) => {
              const complete = active >= index;

              return (
                <div
                  className={`lab-step ${complete ? "done" : ""}`}
                  key={event.number}
                >
                  <div className="lab-step-icon">
                    {complete ? (
                      <CheckCircle2 size={17} />
                    ) : (
                      <span>{event.number}</span>
                    )}
                  </div>

                  <div>
                    <span>{event.label}</span>

                    <h3>{event.title}</h3>

                    <code>{event.source}</code>

                    <p>{event.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lab-console">
            <div className="console-head">
              <span>EVENT STREAM</span>
              <span>{active >= 0 ? "LIVE" : "READY"}</span>
            </div>

            <div className="console-body">
              {active < 0 ? (
                <div className="console-empty">
                  Press “Trigger event” to start the runtime simulation.
                </div>
              ) : (
                events.slice(0, active + 1).map((event) => (
                  <div className="console-line" key={event.number}>
                    <span>›</span>
                    <b>{event.label.toLowerCase()}</b>
                    {event.title.toLowerCase()}
                    <code>{event.source}</code>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="lab-bottom">
            <button className="text-button" onClick={reset}>
              <RotateCcw size={14} />
              Reset
            </button>

            <Link className="text-button" href="/architecture">
              How the runtime works
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">THE CONTROL LOOP</span>
            <h2>Signal in. Recovery out.</h2>
            <p>
              FaultPlane keeps infrastructure events, runtime state, policy,
              recovery, and telemetry connected in one observable path.
            </p>
          </div>

          <div className="developer-grid">
            <div className="dev-card">
              <span className="card-number">01</span>
              <h3>Observe</h3>
              <p>
                Infrastructure conditions enter the runtime as explicit events.
              </p>
            </div>

            <div className="dev-card">
              <span className="card-number">02</span>
              <h3>Decide</h3>
              <p>
                Runtime state is evaluated against the configured resilience
                policy.
              </p>
            </div>

            <div className="dev-card">
              <span className="card-number">03</span>
              <h3>Recover</h3>
              <p>
                The selected action runs and its result remains observable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container cta-panel">
          <div>
            <span className="section-label">OPEN SOURCE</span>
            <h2>Run the runtime yourself.</h2>
            <p>
              Clone FaultPlane and inspect the control loop on your own
              infrastructure.
            </p>
          </div>

          <Link className="button button-dark" href="/quickstart">
            Start building
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}