import SiteMenu from "../components/SiteMenu";
import { bibliographyGroups } from "../data/bibliography";

function BibliographyPage() {
  return (
    <>
      <SiteMenu />

      <main className="simple-page bibliography-page">
        <div className="simple-page__inner bibliography-page__inner">
          <header className="bibliography-header">
            <p className="eyebrow">RESEARCH INDEX</p>
            <h1>BIBLIOGRAPHY</h1>
            <p className="bibliography-intro">
              A working bibliography for topo.audio, organized by the main
              theoretical, perceptual, and computational foundations of the
              project.
            </p>
          </header>

          <div className="bibliography-groups">
            {bibliographyGroups.map((group) => (
              <section className="bibliography-group" key={group.title}>
                <div className="bibliography-group__header">
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                </div>

                <div className="citation-list">
                  {group.items.map((item, index) => (
                    <article
                      className={`citation-entry ${
                        item.key ? "citation-entry--key" : ""
                      }`}
                      key={`${group.title}-${index}`}
                    >
                      {item.key && <span className="citation-key">KEY SOURCE</span>}

                      <p className="citation-text">{item.citation}</p>

                      {item.tags && (
                        <div className="citation-tags">
                          {item.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
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