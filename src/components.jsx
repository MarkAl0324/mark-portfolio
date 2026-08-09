// Shared components & hooks

const { useState, useEffect, useRef, useCallback } = React;

/**
 * The Reels section only exists once mark-reels-site is deployed and
 * PORTFOLIO.reels.siteUrl is filled in. Until then the section, its nav link, and its
 * slot in the section numbering all drop out together — so the page never shows a
 * dead anchor or a gap in the 01/02/03 sequence.
 */
function reelsLive() {
  const r = window.PORTFOLIO && window.PORTFOLIO.reels;
  return Boolean(r && r.siteUrl);
}

// Reveal-on-scroll wrapper
function Reveal({ children, delay = 0, as: As = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </As>
  );
}

// Top nav with scroll-based shrink
function Nav({ onToggleTweaks }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-brand">
        <span className="dot" />
        <span>MA · ops + automation</span>
      </a>
      <div className="nav-links">
        <a href="#now">Now</a>
        <a href="#work">Work</a>
        {reelsLive() && <a href="#reels">Reels</a>}
        <a href="#skills">Toolkit</a>
        <a href="#experience">CV</a>
        <a href="#contact" className="nav-cta">Start a project →</a>
      </div>
    </nav>
  );
}

// Section heading
function SectionHead({ num, kicker, title, titleEm }) {
  return (
    <Reveal className="section-head">
      <div>
        <div className="num">{num}</div>
        <div className="eyebrow" style={{ marginTop: 8 }}>{kicker}</div>
      </div>
      <h2>
        {title}
        {titleEm && <> <em>{titleEm}</em></>}
      </h2>
    </Reveal>
  );
}

// Hover-follow project preview card
function useMousePreview() {
  const [state, setState] = useState({ show: false, x: 0, y: 0, project: null });
  const onEnter = (project) => (e) => {
    setState({ show: true, x: e.clientX, y: e.clientY, project });
  };
  const onMove = (e) => {
    setState((s) => (s.show ? { ...s, x: e.clientX, y: e.clientY } : s));
  };
  const onLeave = () => setState((s) => ({ ...s, show: false }));
  return { state, onEnter, onMove, onLeave };
}

Object.assign(window, { Reveal, Nav, SectionHead, useMousePreview });
