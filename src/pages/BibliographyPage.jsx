import SiteMenu from "../components/SiteMenu";
import {
  bibliographyGroups,
  bibliographyMeta,
} from "../data/bibliography";

function BibliographyPage() {
  return (
    <>
      <SiteMenu />

      <main className="simple-page bibliography-page">
        <div className="simple-page__inner bibliography-page__inner">
          <header className="bibliography-header">
            <p className="eyebrow">RESEARCH INDEX / VERSION {bibliographyMeta.version}</p>
            <h1>BIBLIOGRAPHY</h1>
            <p className="bibliography-intro">{bibliographyMeta.description}</p>

            <div className="bibliography-meta" aria-label="Bibliography summary">
              <span>{bibliographyMeta.totalSources} annotated sources</span>
              <span>{bibliographyMeta.essentialSources} essential</span>
              <span>{bibliographyMeta.newSources} added after validation searches</span>
            </div>
          </header>

          <div className="bibliography-groups">
            {bibliographyGroups.map((group, groupIndex) => (
              <section className="bibliography-group" key={group.title}>
                <div className="bibliography-group__header">
                  <div className="bibliography-group__title-block">
                    <span className="bibliography-group__index">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                    <h2>{group.title}</h2>
                    <span className="bibliography-group__count">
                      {group.items.length} sources
                    </span>
                  </div>

                  <div className="bibliography-boundary">
                    <div>
                      <span>WHAT IS ESTABLISHED</span>
                      <p>{group.established}</p>
                    </div>
                    <div>
                      <span>WHAT REMAINS OPEN</span>
                      <p>{group.open}</p>
                    </div>
                  </div>
                </div>

                <div className="citation-list">
                  {group.items.map((item, index) => (
                    <article
                      className={`citation-entry ${item.rating === 5 ? "citation-entry--key" : ""
                        }`}
                      key={`${group.title}-${index}`}
                    >
                      <div className="citation-meta">
                        <span className="citation-rating">{item.rating}/5</span>
                        {item.rating === 5 && (
                          <span className="citation-key">ESSENTIAL</span>
                        )}
                        {item.new && <span className="citation-new">NEW</span>}
                      </div>

                      <p className="citation-text">{item.citation}</p>

                      <p className="citation-note">
                        <span>PROJECT RELEVANCE</span>
                        {item.note}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default BibliographyPage;
