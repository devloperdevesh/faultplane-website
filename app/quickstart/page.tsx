import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export default function Quickstart() {
  return (
    <>
      <SiteNav />

      <main className="inner-page">
        <section className="inner-hero">
          <div className="section-label">DEVELOPERS</div>
          <h1>
            From zero to
            <span>runtime.</span>
          </h1>
          <p>
            Get the FaultPlane runtime on your machine, build it, and inspect
            the control loop yourself.
          </p>
        </section>

        <section className="quickstart-layout">
          <div className="quickstart-copy">
            <div className="section-label">01 / CLONE</div>
            <h2>Get the source.</h2>
            <p>
              FaultPlane is developed in the open. Start with the repository
              and work from the same runtime source.
            </p>
          </div>

          <div className="code-window">
            <div className="code-top">
              <span>terminal</span>
              <div><i /><i /><i /></div>
            </div>
            <pre>{`git clone https://github.com/devloperdevesh/FaultPlane
cd FaultPlane`}</pre>
          </div>

          <div className="quickstart-copy">
            <div className="section-label">02 / BUILD</div>
            <h2>Build the runtime.</h2>
            <p>
              Compile the project and run the available test suite before
              starting the daemon.
            </p>
          </div>

          <div className="code-window">
            <div className="code-top">
              <span>terminal</span>
              <div><i /><i /><i /></div>
            </div>
            <pre>{`go build ./...
go test ./...`}</pre>
          </div>

          <div className="quickstart-copy">
            <div className="section-label">03 / RUN</div>
            <h2>Start exploring.</h2>
            <p>
              Run the daemon locally and inspect its health and runtime
              endpoints.
            </p>
          </div>

          <div className="code-window">
            <div className="code-top">
              <span>terminal</span>
              <div><i /><i /><i /></div>
            </div>
            <pre>{`go run ./cmd/daemon
curl http://localhost:8080/health`}</pre>
          </div>
        </section>

        <section className="developer-note">
          <div>
            <div className="section-label">NEXT</div>
            <h2>Inspect the runtime.</h2>
            <p>
              Explore the API surface, telemetry, recovery flow, and kernel
              integration in the repository.
            </p>
          </div>

          <a
            href="https://github.com/devloperdevesh/FaultPlane"
            target="_blank"
            rel="noreferrer"
            className="button button-dark"
          >
            Open GitHub -&gt;
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}