// Root app

const { useState: useS, useEffect: useE } = React;

function App() {
  const [tweaks, setTweaks] = useS(window.TWEAK_DEFAULTS);
  const [editOpen, setEditOpen] = useS(false);

  // Apply theme + hue to :root
  useE(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", tweaks.theme);

    // Override accent hue dynamically
    const h = tweaks.accentHue;
    const themeTuned = {
      "warm-editorial": { l: 0.62, c: 0.12, lDeep: 0.45, lSoft: 0.92 },
      "paper-journal":  { l: 0.55, c: 0.13, lDeep: 0.4,  lSoft: 0.92 },
      "ink-sand":       { l: 0.35, c: 0.10, lDeep: 0.22, lSoft: 0.85 },
    }[tweaks.theme] || { l: 0.6, c: 0.12, lDeep: 0.45, lSoft: 0.92 };

    root.style.setProperty("--accent", `oklch(${themeTuned.l} ${themeTuned.c} ${h})`);
    root.style.setProperty("--accent-deep", `oklch(${themeTuned.lDeep} ${themeTuned.c} ${h})`);
    root.style.setProperty("--accent-soft", `oklch(${themeTuned.lSoft} ${Math.min(themeTuned.c, 0.05)} ${h})`);

    document.body.classList.toggle("no-hand", !tweaks.showHandDrawn);
  }, [tweaks]);

  // Edit-mode protocol
  useE(() => {
    const onMsg = (ev) => {
      const d = ev.data || {};
      if (d.type === "__activate_edit_mode") setEditOpen(true);
      if (d.type === "__deactivate_edit_mode") setEditOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <div className="page">
      <Nav />
      <Hero />
      <Ribbon />
      <NowSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <TweaksPanel open={editOpen} tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
