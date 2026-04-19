import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal, Upload } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div id="home">
      <section className="hero">
        <div className="copy">
          <h1>
            The Registry for <br />
            <span className="text-gradient">Agentic Intelligence</span>
          </h1>
          <p>
            A high-performance registry for procedural agent skills. Discover,
            publish, and operate reusable agent capabilities from a route-driven
            workspace.
          </p>
        </div>

        <div className="actions">
          <Link to="/skills" className="btn-primary">
            <Terminal size={18} />
            Browse Registry
          </Link>

          <Link to="/skills/new" className="btn-secondary">
            <Upload size={18} />
            Publish Skill
          </Link>
        </div>
      </section>

      <section className="latest">
        <div className="space-y-2">
          <h2>
            Recently Created <span className="text-gradient">Skills</span>
          </h2>
          <p>
            {" "}
            Latest skills loaded from Firestore in descending creation order.
          </p>
        </div>

        <div>{/* {skills} */}</div>
      </section>
    </div>
  );
}
