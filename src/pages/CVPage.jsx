import { useEffect } from "react";
import SiteMenu from "../components/SiteMenu";

const cvSections = [
    {
        number: "01",
        title: "EDUCATION",
        items: [
            {
                meta: ["2018", "M.ENG. ARCHITECTURE"],
                title: "University of Tokyo",
                subtitle: "Graduate School of Engineering, Department of Architecture",
                body:
                    "Kawazoe Laboratory. Master's thesis: Tokyo Luminary: Modeling and Configuring Light Tectonics in Urban Spatial Envelopes. Primary advisor: Prof. Yoshiyuki Kawazoe.",
            },
            {
                meta: ["2015", "B.S. ARCHITECTURE"],
                title: "Texas Tech University",
                subtitle: "College of Architecture",
                body: "Summa Cum Laude; Banner Bearer at graduation.",
            },
        ],
    },
    {
        number: "02",
        title: "RESEARCH & DEVELOPMENT",
        items: [
            {
                meta: ["2025–PRESENT", "INDEPENDENT RESEARCHER & DEVELOPER"],
                title: "topo.audio / Topologies of Harmonic Experience",
                body:
                    "Developing an empirical and computational framework for measuring and representing relationships in how listeners experience directed harmonic changes. Designed and developed interactive research software for controlled stimulus generation, relational listener judgment, and computational exploration of the resulting structures. Current work examines the reliability of listener-derived representations, relationships across temporal scales, and their potential use in musical navigation and generative systems.",
            },
            {
                meta: ["2017–2018", "MASTER'S THESIS / KAWAZOE LABORATORY"],
                title:
                    "Tokyo Luminary: Modeling and Configuring Light Tectonics in Urban Spatial Envelopes",
                subtitle: "University of Tokyo",
                body:
                    "Developed a research and design framework for analyzing light in three-dimensional urban space. The project combined research on visual perception, light and health, architectural lighting, and the Tokyo lightscape with the development of a schematic spatial device and lightfall-analysis methodology. An Urban Canyon case study tested how qualitative properties of light and atmosphere could be translated into spatially and computationally tractable metrics.",
            },
            {
                meta: ["2016–2017", "OBUCHI LABORATORY"],
                title: "Sound Trees",
                subtitle: "University of Tokyo",
                body:
                    "Developed and built a small-scale tensegrity installation prototype whose wires could be tuned through resonance, exploring the relationship between acoustic behavior and structural calibration. Electromagnetic resonators produced an ambient soundscape; the larger architectural installation remained a proposal.",
            },
            {
                meta: ["2016–2017", "OBUCHI LABORATORY"],
                title: "Computational Clay",
                subtitle: "University of Tokyo",
                body:
                    "Contributed to research on a human-augmentation system that guided users in molding woodchip panels by hand into structurally optimized forms for assembly into a larger structure.",
            },
            {
                meta: ["2016", "DESIGN RESEARCH ASSISTANT"],
                title: "Light 110",
                subtitle: "Texas Tech University",
                body:
                    "Worked with Prof. Victoria McReynolds on research into natural-light conditions across latitudinal locations from Canada to Chile, producing maps, models, and site drawings.",
            },
            {
                meta: ["2016", "INDEPENDENT RESEARCH"],
                title: "Parallels",
                body:
                    "Investigated sub-horizontal and twilight light through a spatial catalogue and a 1:1 inhabitable installation, later exhibited publicly in Texas.",
            },
        ],
    },
    {
        number: "03",
        title: "SELECTED COMPOSITION & SOUND WORKS",
        items: [
            {
                meta: ["2025–PRESENT", "FEATURE FILM · COMPOSER"],
                title: "Tiger",
                subtitle: "Dir. Anshul Chauhan",
                body:
                    "World premiere at the Busan International Film Festival in 2025; recipient of the Highlyfe Vision Award. Official closing film of MOOSIC LAB 2026; winner of Best Picture at MIX Milano 2026; currently in its festival cycle.",
            },
            {
                meta: ["FORTHCOMING 2027", "DOCUMENTARY"],
                title: "Daughters of the Pit",
                subtitle: "Composer & Sound Designer · Kowatanda Films",
            },
            {
                meta: ["FORTHCOMING 2026", "SHORT FILM"],
                title: "Across the Valley",
                subtitle: "Composer · Dir. Maya Sause",
            },
            {
                meta: ["2026", "BRAND FILM"],
                title: "Glo Brand Film",
                subtitle: "Composer & Sound Designer",
            },
            {
                meta: ["2026", "BRAND FILM"],
                title: "Kamui Whisky Brand Film",
                subtitle: "Composer",
            },
            {
                meta: ["2025", "BRAND FILM"],
                title: "The First Lessons",
                subtitle: "Composer & Sound Designer · Sinyukai",
                body:
                    "Recipient of Best Commercial / Promotional Video at the Tokyo Film and Screenplay Awards 2025.",
            },
            {
                meta: ["2025", "CAMPAIGN FILM"],
                title: "Chanel Chance Tokyo 2025",
                subtitle: "Sound Designer",
            },
            {
                meta: ["2023", "SHORT FILM"],
                title: "Dreamscapes",
                subtitle: "Composer & Sound Designer",
            },
        ],
    },
    {
        number: "04",
        title: "PROFESSIONAL EXPERIENCE",
        items: [
            {
                meta: ["SEPT 2018–PRESENT", "TOKYO, JAPAN"],
                title: "Nikken Sekkei",
                subtitle: "Architectural & Parametric Designer",
                body:
                    "Architectural, concept, facade, and computational design across international projects. Parametric design has been a continuous part of the role, developing over time toward systems and workflow design. Built reusable computational processes integrating architectural geometry, environmental analysis, BIM/CAD data, and external platforms, while developing substantial experience in complex 3D systems, facade design, coordination, communication, and leadership.",
            },
            {
                meta: ["SEPT 2017–JAN 2018", "TOKYO, JAPAN · PART-TIME"],
                title: "YUUA Architects",
                subtitle: "Architectural Designer",
                body:
                    "Architectural design and development work, including small-scale residential projects.",
            },
        ],
    },
    {
        number: "05",
        title: "SELECTED COMPUTATIONAL & SYSTEMS PROJECTS",
        kicker: "NIKKEN SEKKEI",
        items: [
            {
                meta: ["2025", "DEVELOPER / COMPUTATIONAL DESIGNER"],
                title: "Autodesk University 2025 — Forma × Rhino Analysis Pipeline",
                body:
                    "Primarily responsible for Python development connecting Rhino/Grasshopper with the Autodesk Forma API and enabling batch environmental-analysis workflows.",
            },
            {
                meta: ["2023", "COMPUTATIONAL / PARAMETRIC DESIGN"],
                title: "Toyota Woven City",
                body:
                    "Developed a workflow for generating 3D geometry from legacy CAD information, supporting conversion of existing design data into a computational model.",
            },
            {
                meta: ["2024–2025", "PARAMETRIC / 3D DESIGN"],
                title: "Al Ahli Stadium",
                body:
                    "Managed major portions of the project's 3D data and developed a large parametric modeling system around the stadium's radial geometry.",
            },
        ],
    },
    {
        number: "06",
        title: "PUBLICATIONS",
        items: [
            {
                meta: ["2016", "PUBLICATION"],
                title: "Collaborative Works: Collaboration in Architecture Competitions",
                body:
                    "Ponce, A., Loutherback, S., & McBeth, T. (2016). Blurb. ISBN 978-1-364-33462-8.",
            },
        ],
    },
    {
        number: "07",
        title: "SELECTED EXHIBITIONS, COMPETITIONS & RECOGNITION",
        items: [
            {
                meta: ["2025", "PRESENTATION"],
                title: "Multiplying Analyses to Manage Design Overload",
                subtitle: "Autodesk University · Nashville, USA",
                body:
                    "Presented a computational workflow connecting Rhino/Grasshopper and Autodesk Forma through Python and API-based data exchange, enabling automated environmental analysis and systematic comparison of design iterations.",
            },
            {
                meta: ["2018", "HONORABLE MENTION"],
                title: "Northern Lights Rooms",
                subtitle: "Bee Breeders / Buildner",
                body:
                    "International architecture competition for aurora-viewing guest accommodation near Lake Mývatn, Iceland.",
            },
            {
                meta: ["2016", "FIRST PLACE"],
                title: "Coexistence",
                subtitle: "Busan International Architectural Design Workshop",
                body:
                    "Collaborative urban-design proposal for a block in central Busan, South Korea.",
            },
            {
                meta: ["2016", "EXHIBITION"],
                title: "Parallels",
                subtitle: "Texas Student Biennial · AIA Houston / Architecture Center Houston",
                body:
                    "Also exhibited through the First Friday Art Trail at the Louise Hopkins Underwood Center for the Arts.",
            },
            {
                meta: ["2015", "FINALIST"],
                title: "London Public Library",
                subtitle: "ARCHMedium",
            },
            {
                meta: ["2015", "FIRST PLACE"],
                title: "Dean's Cup",
                subtitle: "Texas Tech College of Architecture",
            },
            {
                meta: ["2014", "FIRST PLACE"],
                title: "Dean's Cup",
                subtitle: "Texas Tech College of Architecture",
            },
        ],
    },
    {
        number: "08",
        title: "ACADEMIC DISTINCTIONS",
        compact: true,
        items: [
            { meta: ["2015"], title: "Summa Cum Laude — Texas Tech University" },
            { meta: ["2015"], title: "Banner Bearer at graduation — Texas Tech University" },
            { meta: ["2015"], title: "Benjamin A. Gilman International Scholarship" },
            { meta: ["2015"], title: "TTU Haire Architecture Scholarship" },
            { meta: ["2015"], title: "TTU M. B. J. Smith HES Merit Architecture Scholarship" },
            { meta: ["2015"], title: "TTU Study Abroad Competitive Scholarship" },
            { meta: ["2014"], title: "Wilson Construction Group Endowed Merit Scholarship" },
            {
                meta: ["2014"],
                title: "Texas Tech Parents Association Student Academic Citizenship Award",
            },
        ],
    },
    {
        number: "09",
        title: "SKILLS",
        compact: true,
        items: [
            {
                meta: ["MUSIC & AUDIO"],
                title:
                    "Composition, scoring, sound design, music production/engineering, DAW-based workflows.",
            },
            {
                meta: ["ARCHITECTURAL & COMPUTATIONAL DESIGN"],
                title:
                    "Architectural design, concept design, facade design, Rhino, Grasshopper, parametric design, computational workflow design, Autodesk Forma, Revit, AutoCAD.",
            },
            {
                meta: ["SOFTWARE DEVELOPMENT"],
                title:
                    "Python, JavaScript/React, API integration, interactive research-tool development, data visualization.",
            },
            {
                meta: ["VISUAL DESIGN & MEDIA"],
                title:
                    "Adobe Photoshop, Illustrator, InDesign, After Effects, Premiere.",
            },
        ],
    },
];

function CVPage() {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = "Tyler McBeth Academic CV";

        return () => {
            document.title = previousTitle;
        };
    }, []);

    return (
        <>
            <SiteMenu />

            <main className="simple-page cv-page">
                <div className="simple-page__inner cv-page__inner">
                    <header className="cv-header">
                        <p className="eyebrow">CURRICULUM VITAE</p>
                        <h1>TYLER MCBETH</h1>
                        <p className="cv-role">
                            COMPOSER · RESEARCHER · ARCHITECTURAL &amp; COMPUTATIONAL DESIGNER
                        </p>

                        <div className="cv-contact">
                            <span>Kanagawa, Japan</span>
                            <a href="mailto:mcbeth.ty@gmail.com">mcbeth.ty@gmail.com</a>
                            <a href="tel:+817044274933">+81 70 4427 4933</a>
                            <a href="https://topo.audio" target="_blank" rel="noopener noreferrer">
                                topo.audio
                            </a>
                        </div>

                        <div className="cv-profile">
                            <div className="cv-profile__label">RESEARCH PROFILE</div>
                            <p>
                                Composer, researcher, and architectural/computational designer
                                working across independent music, film composition, music
                                perception, spatial representation, and generative systems.
                                Current research, <em>topo.audio / Topologies of Harmonic Experience</em>,
                                investigates whether relationships in how listeners experience music
                                can be measured reliably enough to become useful information for
                                computational musical systems. It focuses on a bounded domain of
                                directed harmonic changes, using relational listening judgments,
                                multidimensional representation, and computational analysis, while
                                exploring how listener-derived structures might support musical
                                navigation and composition. A background in architectural research
                                and professional parametric design provides a parallel methodological
                                foundation in spatial modeling, computational workflows, and the
                                formalization of experiential phenomena.
                            </p>
                        </div>
                    </header>

                    <div className="cv-sections">
                        {cvSections.map((section) => (
                            <section
                                className={`cv-section ${section.compact ? "cv-section--compact" : ""}`}
                                key={section.number}
                            >
                                <div className="cv-section__header">
                                    <div>
                                        <span className="cv-section__number">{section.number}</span>
                                        <h2>{section.title}</h2>
                                        {section.kicker && (
                                            <div className="cv-section__kicker">{section.kicker}</div>
                                        )}
                                    </div>
                                    <div className="cv-section__count">
                                        {section.items.length} {section.items.length === 1 ? "ENTRY" : "ENTRIES"}
                                    </div>
                                </div>

                                <div className="cv-entry-list">
                                    {section.items.map((item, index) => (
                                        <article className="cv-entry" key={`${section.number}-${index}`}>
                                            <div className="cv-entry__meta">
                                                {item.meta.map((line) => (
                                                    <span key={line}>{line}</span>
                                                ))}
                                            </div>

                                            <div className="cv-entry__content">
                                                <h3>{item.title}</h3>
                                                {item.subtitle && (
                                                    <div className="cv-entry__subtitle">{item.subtitle}</div>
                                                )}
                                                {item.body && <p>{item.body}</p>}
                                            </div>
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

export default CVPage;