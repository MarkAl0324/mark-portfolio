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
            <span>Available now · part-time & freelance · {P.location}</span>
          </div>
          <h1 className="display">
            <span className="hero-line" style={{ animationDelay: "0.05s" }}>
              Mark <em>Alejandro.</em>
            </span>
            <span className="hero-line sub" style={{ animationDelay: "0.2s" }}>
              I find the <em>inefficiency.</em>
            </span>
            <span className="hero-line sub" style={{ animationDelay: "0.35s" }}>
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
  return (
    <section id="now" className="now">
      <div className="container">
        <SectionHead
          num="01"
          kicker="Where I am"
          title="Now,"
          titleEm="what I'm doing this season"
        />
        <div className="now-card">
          <Reveal className="aside">
            <p>
              A snapshot of the work and the week. Updated every few weeks, roughly when it stops being true.
            </p>
            <div className="stamp">
              <span className="dot" />
              <span>Updated {P.nowUpdated}</span>
            </div>
          </Reveal>
          <div className="now-list">
            {P.nowItems.map((n, i) => (
              <Reveal key={i} className="now-item" delay={i * 60}>
                <div className={`tag t-${n.tag.toLowerCase()}`}>{n.tag}</div>
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
// Every project is a card with its first gallery image. Clicking a card opens the
// project dialog: a gallery (arrow keys, swipe, thumbnails, captions) and the case study.
function ProjectCard({ p, onOpen }) {
  const cover = p.gallery[0];
  const count = p.gallery.length;
  return (
    <button type="button" className="project-card" onClick={onOpen} aria-haspopup="dialog">
      <div className="media-16x10">
        <img src={cover.src} alt="" width="1600" height="1000" loading="lazy" decoding="async" />
        {p.caseStudy && <span className="media-badge left">Case study</span>}
        {count > 1 && <span className="media-badge right">{count} images</span>}
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span>{p.num}</span>
          <span className="bullet" />
          <span>{p.year}</span>
          <span className="bullet" />
          <span>{p.type}</span>
        </div>
        <h3>
          {p.title}
          {p.titleEm && <em> {p.titleEm}</em>}
        </h3>
        <p className="desc">{p.desc}</p>
        <div className="chips">
          {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
        <span className="card-cta">
          {p.caseStudy ? "Read the case study" : "See the project"} <span className="arr" aria-hidden="true">→</span>
        </span>
      </div>
    </button>
  );
}

function ProjectModal({ p, onClose }) {
  const [idx, setIdx] = uS(0);
  const dialogRef = uR(null);
  const closeRef = uR(null);
  const touch = uR(null);
  const shots = p.gallery;
  const many = shots.length > 1;
  const go = uC((d) => setIdx((i) => (i + d + shots.length) % shots.length), [shots.length]);

  // Lock page scroll, focus the dialog, and hand focus back to the card on close.
  uE(() => {
    const prev = document.activeElement;
    document.body.classList.add("modal-open");
    closeRef.current && closeRef.current.focus();
    return () => {
      document.body.classList.remove("modal-open");
      prev && prev.focus && prev.focus();
    };
  }, []);

  uE(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (many && e.key === "ArrowRight") { e.preventDefault(); go(1); return; }
      if (many && e.key === "ArrowLeft") { e.preventDefault(); go(-1); return; }
      if (e.key === "Tab" && dialogRef.current) {
        // Keep keyboard focus inside the dialog while it is open.
        const f = dialogRef.current.querySelectorAll("button, a[href]");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, many, onClose]);

  // Warm the next image so stepping through the gallery doesn't flash.
  uE(() => {
    if (!many) return;
    const img = new Image();
    img.src = shots[(idx + 1) % shots.length].src;
  }, [idx, many, shots]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current || !many) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };

  const shot = shots[idx];
  const titleId = `pm-title-${p.num}`;
  return (
    <div className="pm-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pm-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialogRef}>
        <button type="button" className="pm-close" onClick={onClose} ref={closeRef} aria-label="Close">×</button>

        <div className="pm-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="media-16x10">
            <img key={shot.src} src={shot.src} alt={shot.caption} width="1600" height="1000" />
          </div>
          {many && (
            <>
              <button type="button" className="pm-nav prev" onClick={() => go(-1)} aria-label="Previous image">←</button>
              <button type="button" className="pm-nav next" onClick={() => go(1)} aria-label="Next image">→</button>
              <span className="pm-count" aria-live="polite">{idx + 1} / {shots.length}</span>
            </>
          )}
        </div>
        <p className="pm-caption">{shot.caption}</p>
        {many && (
          <div className="pm-thumbs">
            {shots.map((s, i) => (
              <button
                type="button"
                key={s.src}
                className={`pm-thumb ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Image ${i + 1}: ${s.caption}`}
                aria-current={i === idx ? "true" : undefined}
              >
                <div className="media-16x10">
                  <img src={s.src} alt="" width="1600" height="1000" loading="lazy" />
                </div>
              </button>
            ))}
          </div>
        )}

        <div className={`pm-content ${p.caseStudy ? "" : "single"}`}>
          <div className="pm-head">
            <div className="pm-meta">
              <span>{p.num}</span>
              <span className="bullet" />
              <span>{p.year}</span>
              <span className="bullet" />
              <span>{p.type}</span>
            </div>
            <h2 id={titleId}>
              {p.title}
              {p.titleEm && <em> {p.titleEm}</em>}
            </h2>
            <p>{p.desc}</p>
            <div className="chips">
              {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
          {p.caseStudy && (
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
                    <div className="num-big">{m.num}</div>
                    <div className="lbl">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const P = window.PORTFOLIO;
  const [openIdx, setOpenIdx] = uS(null);
  const close = uC(() => setOpenIdx(null), []);

  return (
    <section id="work">
      <div className="container">
        <SectionHead
          num="02"
          kicker="Selected work"
          title="Work,"
          titleEm="systems quietly running in the background"
        />
        <div className="work-grid">
          {P.projects.map((p, i) => (
            <Reveal key={p.num} delay={(i % 2) * 80}>
              <ProjectCard p={p} onOpen={() => setOpenIdx(i)} />
            </Reveal>
          ))}
        </div>
      </div>
      {openIdx !== null && <ProjectModal p={P.projects[openIdx]} onClose={close} />}
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
          num="03"
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
          num={reelsLive() ? "04" : "03"}
          kicker="Toolkit"
          title="The tools,"
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
          num={reelsLive() ? "05" : "04"}
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
        <Reveal className="contact-panel">
          <h2 className="contact-big">
            Got a process that's <em>driving you</em><br />
            a little bit crazy? <span className="script">let's fix it.</span>
          </h2>
          <div className="contact-grid">
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
