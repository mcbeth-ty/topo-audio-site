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
            {/* Replace this placeholder with the final video or iframe.
                Keep the wrapper to preserve the responsive 16:9 layout. */}
            <div className="film-work-placeholder">VIDEO COMING SOON</div>
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
