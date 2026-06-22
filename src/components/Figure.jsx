function Figure({
  src,
  alt = "",
  caption,
  className = "",
}) {
  return (
    <figure className={`figure ${className}`}>
      <img
        src={src}
        alt={alt}
        className="figure-image"
      />

      {caption && (
        <figcaption className="figure-caption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default Figure;