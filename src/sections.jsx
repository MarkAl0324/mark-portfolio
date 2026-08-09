// All major sections

const { useState: uS, useEffect: uE, useRef: uR, useCallback: uC } = React;

// ---------------- HERO ----------------
function Hero() {
  const P = window.PORTFOLIO;
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-eyebrow eyebrow">
            <span className="pulse" />
            <span>Available — Q3 2026 · {P.location}</span>
          </div>
          <h1 className="display">
            <span className="hero-line" style={{ animationDelay: "0.05s" }}>
              Mark <em>Alejandro.</em>
            </span>
            <span className="hero-line" style={{ animationDelay: "0.2s", fontSize: "0.68em", color: "var(--ink-soft)", marginTop: "0.2em" }}>
              I find the <em style={{ color: "var(--ink-soft)" }}>inefficiency.</em>
            </span>
            <span className="hero-line" style={{ animationDelay: "0.35s", fontSize: "0.68em", color: "var(--ink-soft)" }}>
              I build the <span className="script">fix.</span>
            </span>
          </h1>

          <div className="hero-meta">
            {P.heroMeta.map((m, i) => (
              <div key={i}>
                <div className="label">{m.label}</div>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}

// ---------------- RIBBON ----------------
function Ribbon() {
  const phrases = [
    "Operations", "Automation", "Back-office systems",
    "AI workflows", "Lightweight internal tools", "SOPs that stick",
  ];
  const loop = [...phrases, ...phrases];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {loop.map((p, i) => (
          <span key={i}>
            {i % 3 === 1 ? <em>{p}</em> : p}
            <span className="star"> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------- NOW ----------------
function NowSection() {
  const P = window.PORTFOLIO;
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <section id="now" className="now">
      <div className="container">
        <SectionHead
          num="— 01"
          kicker="Where I am"
          title="Now —"
          titleEm="what I'm doing this season"
        />
        <div className="now-card">
          <Reveal className="aside">
            <span className="hand">currently,</span>
            <p style={{ color: "var(--ink-soft)", fontSize: 15, maxWidth: "22ch", marginTop: 6 }}>
              A snapshot of the work and the week. Updated every few weeks, roughly when it stops being true.
            </p>
            <div className="stamp">
              <span className="dot" />
              <span>Updated {today}</span>
            </div>
          </Reveal>
          <div className="now-list">
            {P.nowItems.map((n, i) => (
              <Reveal key={i} className="now-item" delay={i * 60}>
                <div className="tag">{n.tag}</div>
                <div>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- PROJECTS ----------------
function ProjectRow({ p, expanded, onToggle, onEnter, onMove, onLeave }) {
  return (
    <>
      <div
        className="project-row"
        onClick={() => p.caseStudy && onToggle()}
        onMouseEnter={(e) => !expanded && onEnter(p)(e)}
        onMouseMove={(e) => !expanded && onMove(e)}
        onMouseLeave={onLeave}
      >
        <div className="num">{p.num}</div>
        <div>
          {p.featured && <div className="featured-tag">✦ Featured case study</div>}
          <h3>
            {p.title}
            {p.titleEm && <em> {p.titleEm}</em>}
          </h3>
          <div className="meta">
            <span>{p.year}</span>
            <span className="bullet" />
            <span>{p.type}</span>
            <span className="bullet" />
            <span>{p.stack.join(" · ")}</span>
          </div>
        </div>
        <p className="desc">{p.desc}</p>
        <div className="arrow">
          <span>{p.caseStudy ? (expanded ? "Close" : "Read") : "Card"}</span>
          <span>{p.caseStudy ? (expanded ? "↑" : "→") : ""}</span>
        </div>
      </div>
      {p.caseStudy && (
        <div className={`case-open ${expanded ? "open" : ""}`}>
          <div className="case-open-inner">
            <div />
            <div className="case-gallery">
              {(p.gallery || [{ src: p.image, caption: p.previewLabel }]).map((g, i) => (
                <figure key={i} className="case-shot">
                  <div className="case-shot-img">
                    <img src={g.src} alt={g.caption} loading="lazy" />
                  </div>
                  <figcaption>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="case-body">
              <div>
                <h4>The problem</h4>
                <p>{p.caseStudy.problem}</p>
              </div>
              <div>
                <h4>Approach</h4>
                <ul>
                  {p.caseStudy.approach.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
              <div>
                <h4>Outcome</h4>
                <ul>
                  {p.caseStudy.outcome.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
              <div className="case-metrics">
                {p.caseStudy.metrics.map((m, i) => (
                  <div className="metric" key={i}>
                    <div className="num-big"><em>{m.num}</em></div>
                    <div className="lbl">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectsSection() {
  const P = window.PORTFOLIO;
  const [openIdx, setOpenIdx] = uS(null);
  const { state: preview, onEnter, onMove, onLeave } = useMousePreview();

  return (
    <section id="work">
      <div className="container">
        <SectionHead
          num="— 02"
          kicker="Selected work"
          title="Work —"
          titleEm="systems quietly running in the background"
        />
        <div className="projects-list">
          {P.projects.map((p, i) => (
            <Reveal key={p.num}>
              <ProjectRow
                p={p}
                expanded={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                onEnter={onEnter}
                onMove={onMove}
                onLeave={onLeave}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Hover preview card */}
      <div
        className={`project-preview ${preview.show && preview.project ? "show" : ""}`}
        style={{
          left: Math.min(preview.x + 24, window.innerWidth - 380),
          top: Math.min(preview.y - 120, window.innerHeight - 280),
        }}
      >
        {preview.project && (
          <>
            <div className="swatch">
              {preview.project.image ? (
                <img src={preview.project.image} alt={preview.project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <div className="stripes" />
              )}
              <div className="label">{preview.project.previewLabel || preview.project.type}</div>
            </div>
            <div className="body">
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--ink)", marginBottom: 4 }}>
                {preview.project.title}
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {preview.project.stack.join(" · ")}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ---------------- REELS ----------------
// Video files are served from mark-reels-site, so nothing binary lands in this repo.
// One IntersectionObserver keeps at most a single clip decoding at a time, and
// prefers-reduced-motion turns autoplay off entirely (posters only).
function ReelsSection() {
  const P = window.PORTFOLIO;
  const R = P.reels;
  const live = Boolean(R && R.siteUrl);
  const wrapRef = uR(null);

  uE(() => {
    if (!live) return;
    const root = wrapRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const videos = Array.from(root.querySelectorAll("video"));
    if (!videos.length) return;

    let active = null;
    const ratios = new Map();

    const setActive = (next) => {
      if (next === active) return;
      if (active) {
        active.pause();
        active.currentTime = 0;
      }
      active = next;
      if (active) active.play().catch(() => {});
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target, e.intersectionRatio));
        let best = null;
        let bestRatio = 0.5;
        ratios.forEach((ratio, video) => {
          if (ratio > bestRatio) {
            best = video;
            bestRatio = ratio;
          }
        });
        setActive(best);
      },
      { threshold: [0, 0.25, 0.5, 0.8, 1] }
    );

    videos.forEach((v) => io.observe(v));

    const onHide = () => document.hidden && setActive(null);
    document.addEventListener("visibilitychange", onHide);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onHide);
      setActive(null);
    };
  }, [live]);

  // Nothing to link to yet — render nothing rather than a wall of broken frames.
  if (!live) return null;

  return (
    <section id="reels" className="reels">
      <div className="container">
        <SectionHead
          num="— 03"
          kicker={R.kicker}
          title={R.title}
          titleEm={R.titleEm}
        />
        <Reveal>
          <p className="reels-blurb">{R.blurb}</p>
        </Reveal>
        <div className="reels-grid" ref={wrapRef}>
          {R.items.map((r, i) => (
            /* The span class goes on the Reveal wrapper, not the card — Reveal is the
               actual grid child, so grid-column on anything inside it is ignored. */
            <Reveal
              key={r.slug}
              delay={i * 70}
              className={`reel-cell ${r.format === "16:9" ? "wide" : ""}`}
            >
              <a
                className={`reel-card ${r.format === "16:9" ? "wide" : ""}`}
                href={`${R.siteUrl}/reel/${r.slug}/`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="reel-frame">
                  <video
                    src={`${R.siteUrl}/v/${r.slug}.v1.mp4`}
                    poster={`${R.siteUrl}/v/${r.slug}.v1.jpg`}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label={`${r.title} — ${r.brand}, ${r.duration}`}
                  />
                  <span className="reel-dur">{r.duration}</span>
                </div>
                <h3>{r.title}</h3>
                <div className="reel-meta">
                  <span>{r.brand}</span>
                  <span className="bullet" />
                  <span>{r.format}</span>
                </div>
                <p className="reel-proves">{r.proves}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a
            className="reels-all"
            href={R.siteUrl}
            target="_blank"
            rel="noreferrer"
          >
            See all reel work →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ---------------- SKILLS ----------------
function SkillsSection() {
  const P = window.PORTFOLIO;
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHead
          num={reelsLive() ? "— 04" : "— 03"}
          kicker="Toolkit"
          title="The tools —"
          titleEm="pick them up, put them down"
        />
        <div className="skills-grid">
          {P.skills.map((col, i) => (
            <Reveal className="skill-col" key={col.heading} delay={i * 80}>
              <h3><span className="marker" /> {col.heading}</h3>
              <p className="lead">{col.lead}</p>
              <div className="skill-list">
                {col.items.map((s, j) => (
                  <div className="item" key={j}>
                    <span className="name">{s.name}</span>
                    <span className="level">{s.level}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- EXPERIENCE ----------------
function ExperienceSection() {
  const P = window.PORTFOLIO;
  return (
    <section id="experience">
      <div className="container">
        <SectionHead
          num={reelsLive() ? "— 05" : "— 04"}
          kicker="Full résumé"
          title="Where I've been,"
          titleEm="in order"
        />
        <div className="xp-list">
          {P.experience.map((x, i) => (
            <Reveal className="xp-row" key={i} delay={i * 50}>
              <div className="when">{x.when}</div>
              <div>
                <h3>{x.role}</h3>
                <div className="at">{x.at}</div>
              </div>
              <div>
                <p>{x.body}</p>
                {x.bullets.length > 0 && (
                  <ul>
                    {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- CONTACT ----------------
function ContactSection() {
  const P = window.PORTFOLIO;
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2 className="contact-big">
            Got a process that's <em>driving you</em><br />
            a little bit crazy? <span className="script">let's fix it.</span>
          </h2>
        </Reveal>
        <Reveal className="contact-grid">
          <div>
            <div className="label">Email</div>
            <a className="big" href={`mailto:${P.email}`}>{P.email}</a>
          </div>
          <div>
            <div className="label">Elsewhere</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <a className="big" href="https://www.linkedin.com/in/mark-al-alejandro-14979b22b/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="big" href={`tel:${P.phone.replace(/\s/g,'')}`}>{P.phone}</a>
            </div>
          </div>
          <div>
            <div className="label">Booking</div>
            <a className="big" href={`mailto:${P.email}?subject=Intro call`}>Open a 20-min intro →</a>
          </div>
        </Reveal>
        <div className="footer">
          <span>© 2026 {P.name} · Quezon City</span>
          <span>{P.timeZone}</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero, Ribbon, NowSection, ProjectsSection, ReelsSection, SkillsSection, ExperienceSection, ContactSection,
});
