function UnderConstruction({ title, description }) {
  return (
    <main className="simple-page">
      <div className="simple-page__inner">
        <p className="eyebrow">COMING SOON</p>

        <h1>{title}</h1>

        <p className="simple-page__description">
          This page is currently under construction.
        </p>

        {description && (
          <p className="simple-page__description">
            {description}
          </p>
        )}
      </div>
    </main>
  );
}

export default UnderConstruction;