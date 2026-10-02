import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

export default function AcrossTheValleyPage() {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <Link className="sidebar__brand" to="/">TOPO.AUDIO</Link>
      <main className="film-work-page">
        <PageContainer>
          <header className="film-work-header">
            <p className="film-work-eyebrow">SELECTED WORK / FILM SCORE</p>
            <h1>Across the Valley</h1>
            <p className="film-work-meta">
              ORIGINAL SCORE<br />
              TYLER MCBETH · 2026
            </p>
          </header>

          <div className="film-work-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/PTfYEfNo84E?autoplay=0&rel=0&playsinline=1&iv_load_policy=3"
              title="Across the Valley — full film"
              width="960"
              height="540"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <p className="film-work-description">
            Selected music from Across the Valley, presented as supporting work
            for application and research review.
          </p>
        </PageContainer>
      </main>
    </>
  );
}
