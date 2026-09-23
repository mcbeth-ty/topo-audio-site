function SectionTitle({ children, as: Heading = "h1" }) {
  return (
    <Heading className="section-title">
      {children}
    </Heading>
  );
}

export default SectionTitle;