"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SimulationState =
  | "IDLE"
  | "RUNNING"
  | "DEGRADED"
  | "RECOVERING"
  | "ACTIVE_RESILIENT";

type TerminalLog = {
  id: number;
  level: "system" | "warning" | "success" | "info";
  message: string;
  time: string;
};

const initialLog: TerminalLog = {
  id: 0,
  level: "system",
  message: "FaultPlane demo initialized. Waiting for a simulation.",
  time: "--:--:--",
};

const stateColors: Record<SimulationState, string> = {
  IDLE: "var(--fp-muted)",
  RUNNING: "var(--fp-blue)",
  DEGRADED: "var(--fp-red)",
  RECOVERING: "var(--fp-blue)",
  ACTIVE_RESILIENT: "var(--fp-green)",
};

export default function FailureLabWorkspace() {
  const [simulationState, setSimulationState] =
    useState<SimulationState>("IDLE");
  const [latency, setLatency] = useState("—");
  const [traffic, setTraffic] = useState("100%");
  const [logs, setLogs] = useState<TerminalLog[]>([initialLog]);
  const [progress, setProgress] = useState(0);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const nextLogId = useRef(1);
  const running = simulationState !== "IDLE" &&
    simulationState !== "ACTIVE_RESILIENT";

  const appendLog = useCallback(
    (level: TerminalLog["level"], message: string) => {
      setLogs((previous) =>
        [
          ...previous,
          {
            id: nextLogId.current++,
            level,
            message,
            time: new Date().toLocaleTimeString(),
          },
        ].slice(-7)
      );
    },
    []
  );

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const triggerSimulation = () => {
    if (simulationState !== "IDLE") return;

    clearTimers();
    setSimulationState("RUNNING");
    setLatency("Measuring…");
    setTraffic("100%");
    setProgress(12);
    appendLog("info", "Demo scenario started: AI workload is active.");

    timers.current.push(
      setTimeout(() => {
        setSimulationState("DEGRADED");
        setLatency("Simulated degradation");
        setTraffic("42% simulated impact");
        setProgress(38);
        appendLog(
          "warning",
          "SIMULATED EVENT: node degradation detected in the demo timeline."
        );
      }, 1800)
    );

    timers.current.push(
      setTimeout(() => {
        setSimulationState("RECOVERING");
        setLatency("Recovery in progress");
        setProgress(70);
        appendLog(
          "info",
          "DEMO RECOVERY: evaluating the configured recovery path."
        );
      }, 4000)
    );

    timers.current.push(
      setTimeout(() => {
        setSimulationState("ACTIVE_RESILIENT");
        setLatency("Demo complete");
        setTraffic("100% simulated recovery");
        setProgress(100);
        appendLog(
          "success",
          "DEMO COMPLETE: simulated recovery sequence finished. No live kernel action was performed."
        );
      }, 6200)
    );
  };

  const resetSimulation = () => {
    clearTimers();
    setSimulationState("IDLE");
    setLatency("—");
    setTraffic("100%");
    setProgress(0);
    setLogs([
      {
        id: nextLogId.current++,
        level: "system",
        message: "Demo reset. Waiting for the next simulation.",
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const logColor = (level: TerminalLog["level"]) => {
    if (level === "warning") return "#f87171";
    if (level === "success") return "#34d399";
    if (level === "info") return "#60a5fa";
    return "#94a3b8";
  };

  return (
    <section
      className="section section-muted"
      id="failure-lab"
      style={{
        padding: "clamp(48px, 7vw, 80px) 0",
        background: "var(--fp-surface)",
      }}
    >
      <div className="container">
        <div
          className="section-heading"
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <span className="section-kicker" style={{ color: "var(--fp-blue)" }}>
            02 / INTERACTIVE FAILURE LAB
          </span>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 750,
              letterSpacing: "-0.03em",
              marginTop: 12,
            }}
          >
            Trigger a Failure. Inspect the Recovery Flow.
          </h2>
          <p
            style={{
              maxWidth: 650,
              margin: "16px auto 0",
              color: "var(--fp-muted)",
              lineHeight: 1.7,
            }}
          >
            Run a timed, browser-based node-degradation scenario and follow
            the state transitions in the telemetry panel and terminal.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              background: "var(--fp-card, #fff)",
              color: "var(--fp-text, #111827)",
              border: "1px solid var(--fp-border)",
              padding: "clamp(18px, 3vw, 28px)",
              borderRadius: 14,
              boxShadow: "var(--fp-shadow)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                alignItems: "center",
                marginBottom: 22,
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
                Simulation Control Plane
              </h3>
              <span
                style={{
                  fontSize: 10,
                  border: "1px solid var(--fp-border)",
                  padding: "5px 8px",
                  borderRadius: 20,
                  whiteSpace: "nowrap",
                }}
              >
                DEMO MODE
              </span>
            </div>

            {[
              ["Simulation state", simulationState],
              ["Latency measurement", latency],
              ["Traffic delivery", traffic],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "13px 12px",
                  marginBottom: 10,
                  background: "var(--fp-surface)",
                  border: "1px solid var(--fp-border)",
                  borderRadius: 8,
                }}
              >
                <span style={{ fontSize: 12, color: "var(--fp-muted)" }}>
                  {label}
                </span>
                <strong
                  style={{
                    fontSize: 12,
                    fontFamily: "monospace",
                    textAlign: "right",
                    overflowWrap: "anywhere",
                    color:
                      label === "Simulation state"
                        ? stateColors[simulationState]
                        : "var(--fp-text, #111827)",
                  }}
                >
                  {value}
                </strong>
              </div>
            ))}

            <div style={{ margin: "20px 0 8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  color: "var(--fp-muted)",
                  marginBottom: 8,
                }}
              >
                <span>Scenario progress</span>
                <span>{progress}%</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Simulation progress"
                style={{
                  height: 6,
                  overflow: "hidden",
                  background: "var(--fp-border)",
                  borderRadius: 99,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "var(--fp-blue)",
                    borderRadius: 99,
                    transition: "width 350ms ease",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 24,
              }}
            >
              <button
                type="button"
                onClick={triggerSimulation}
                disabled={simulationState !== "IDLE"}
                className="button-dark"
                style={{
                  flex: "1 1 190px",
                  minHeight: 44,
                  opacity: simulationState !== "IDLE" ? 0.55 : 1,
                  cursor: simulationState !== "IDLE" ? "not-allowed" : "pointer",
                }}
              >
                {simulationState === "IDLE"
                  ? "Inject Node Degradation"
                  : running
                    ? "Simulation Running…"
                    : "Simulation Complete"}
              </button>
              <button
                type="button"
                onClick={resetSimulation}
                className="button-light"
                style={{ minHeight: 44, padding: "0 18px" }}
              >
                Reset
              </button>
            </div>

            <p
              style={{
                fontSize: 11,
                color: "var(--fp-muted)",
                lineHeight: 1.6,
                marginTop: 16,
              }}
            >
              This is a frontend simulation. Values are illustrative and are
              not measured kernel telemetry or production benchmarks.
            </p>
          </div>

          <div
            style={{
              minWidth: 0,
              background: "var(--fp-dark)",
              border: "1px solid var(--fp-dark-2)",
              padding: "20px",
              borderRadius: 14,
              fontFamily: "monospace",
              minHeight: 330,
              boxShadow: "0 20px 45px rgba(0,0,0,0.16)",
              color: "var(--fp-soft, #cbd5e1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                paddingBottom: 14,
                marginBottom: 16,
                borderBottom: "1px solid #263244",
              }}
            >
              <span style={{ fontSize: 11 }}>
                faultplane / failure-lab
              </span>
              <div
                style={{ display: "flex", alignItems: "center", gap: 7 }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: stateColors[simulationState],
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: 10, color: "#94a3b8" }}>
                  {simulationState}
                </span>
              </div>
            </div>

            <div
              aria-live="polite"
              aria-label="Simulation terminal output"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontSize: 11,
                lineHeight: 1.7,
                overflowWrap: "anywhere",
              }}
            >
              {logs.map((log) => (
                <div key={log.id} style={{ color: logColor(log.level) }}>
                  <span style={{ color: "#64748b" }}>[{log.time}] </span>
                  {log.message}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 12,
                borderTop: "1px solid #263244",
                fontSize: 10,
                color: "#64748b",
              }}
            >
              <span style={{ color: "#34d399" }}>●</span> Browser simulation
              only — no live host connection
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
