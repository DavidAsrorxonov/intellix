import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Copy, Check } from "lucide-react";

const SkillCard = ({
  authorEmail,
  category,
  createdAt,
  description,
  installCommand,
  tags,
  title,
}: SkillRecord) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="skill-card">
      <Link
        to="/skills"
        tabIndex={-1}
        aria-label={`Open ${title}`}
        className="overlay"
      />

      <div className="chrome">
        <div className="chrome-bar">
          <div className="lights">
            <div className="light red" />
            <div className="light amber" />
            <div className="light green" />
          </div>

          <div className="host">registry.sh</div>
        </div>
      </div>

      <div className="body">
        <div className="meta">
          <div className="author">
            <img src="/logo512.png" alt="Author avatar" className="avatar" />
            <div className="author-copy">
              <p>David</p>
              <p>{new Date(createdAt as string).toLocaleDateString()}</p>
            </div>
          </div>

          <p className="category">{category}</p>
        </div>

        <div className="summary">
          <Link to="/skills" className="title-link">
            <h3>{title}</h3>
          </Link>

          <p>{description}</p>
        </div>

        <div className="command">
          <div className="command-copy">
            <span>{">_"}</span>

            <p>{installCommand}</p>
          </div>

          <button
            className="copy"
            onClick={handleCopy}
            aria-label={copied ? "Copied!" : "Copy command"}
            title={copied ? "Copied!" : "Copy command"}
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
