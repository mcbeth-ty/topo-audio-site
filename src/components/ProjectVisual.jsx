import LightboxImage from "./LightboxImage";

function RepresentationDiagram() {
  return (
    <figure className="project-representation">
      <div className="project-representation__descriptors">
        <p className="project-diagram-label">STRUCTURAL DESCRIPTION</p>
        <dl>
          <div><dt>EVENT A</dt><dd>C · E · G</dd></div>
          <div><dt>EVENT B</dt><dd>D · F · A</dd></div>
          <div><dt>EVENT C</dt><dd>C · E · A</dd></div>
        </dl>
        <p className="project-diagram-label">PITCHES · INTERVALS · REGISTER</p>
      </div>
      <span className="project-diagram-connector" aria-hidden="true">↔</span>
      <div>
        <p className="project-diagram-label">EXPERIENTIAL RELATIONSHIPS</p>
        <svg viewBox="0 0 360 210" role="img" aria-label="Schematic arrangement of the same events A, B and C: A and B nearby, C farther away">
          <path d="M 75 125 L 140 95 L 295 145 L 75 125" fill="none" stroke="var(--color-muted)" strokeDasharray="3 6" />
          {[[75, 125, "A"], [140, 95, "B"], [295, 145, "C"]].map(([x, y, label]) => (
            <g key={label}>
              <circle cx={x} cy={y} r="5" fill="white" stroke="var(--color-text)" />
              <text x={x + 12} y={y - 12} fill="var(--color-text)" fontFamily="var(--font-mono)" fontSize="14">{label}</text>
            </g>
          ))}
        </svg>
        <p className="project-diagram-label">PROXIMITY · GROUPING · DISTANCE</p>
      </div>
      <figcaption className="project-diagram-label">THE SAME MUSICAL MATERIAL, DESCRIBED THROUGH DIFFERENT RELATIONSHIPS.</figcaption>
    </figure>
  );
}

const tools = [
  { title: "Harmonic Sequence Generator", src: "/diagrams/harm-gen.webp" },
  { title: "Audio Canvas", src: "/diagrams/vector-v1.webp" },
  { title: "Topology Explorer", src: "/diagrams/topo-ex.webp" },
];

export default function ProjectVisual({ index }) {
  if (index === 0) return <LightboxImage src="/diagrams/main-topo.png" alt="Topo.audio introductory relational topology diagram" />;
  if (index === 1) return <RepresentationDiagram />;
  if (index === 2) return <LightboxImage src="/diagrams/judgments.png" alt="Listening judgments forming a perceptual relational architecture" />;
  if (index === 3) return <LightboxImage src="/diagrams/map-to-instrument.png" alt="Two routes through relational neighborhoods share a starting event, intersect at a midpoint, diverge, and reach the same destination" />;
  return (
    <figure className="project-system-diagram">
      <div className="project-system-diagram__tools">
        {tools.map((tool, index) => (
          <div className="project-system-diagram__tool" key={tool.title}>
            <p className="project-diagram-label">{tool.title}</p>
            <LightboxImage src={tool.src} alt={`${tool.title} prototype screenshot`} />
            {index < tools.length - 1 && <span className="project-system-diagram__arrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <figcaption className="project-system-diagram__return"><span aria-hidden="true">←</span> RETURN TO SOUND / GENERATION</figcaption>
    </figure>
  );
}
