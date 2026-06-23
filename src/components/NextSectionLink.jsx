function NextSectionLink({ href, label }) {
  return (
    <a className="next-section-link" href={href}>
      <span className="next-section-link__label">{label}</span>
      <span className="next-section-link__arrow">↓</span>
    </a>
  );
}

export default NextSectionLink;