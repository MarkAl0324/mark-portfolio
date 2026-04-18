// Tweaks panel — cycles between 3 aesthetic directions + accent hue

const THEMES = [
  {
    id: "warm-editorial",
    label: "Warm Editorial",
    chips: ["#f4ede2", "#c86e3d", "#1f1a15"],
  },
  {
    id: "paper-journal",
    label: "Paper Journal",
    chips: ["#f6f1e4", "#b67538", "#221b13"],
  },
  {
    id: "ink-sand",
    label: "Ink & Sand",
    chips: ["#e9dfcc", "#5a3a1e", "#141008"],
  },
];

function TweaksPanel({ open, tweaks, setTweaks }) {
  const set = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  return (
    <div className={`tweaks-panel ${open ? "on" : ""}`}>
      <header>
        <span>Tweaks</span>
        <span style={{ opacity: 0.6 }}>aesthetic</span>
      </header>
      <div className="body">
        <div className="group">
          <span className="t-lbl">Direction</span>
          <div className="theme-opts">
            {THEMES.map((t) => (
              <button
                key={t.id}
                className={`theme-opt ${tweaks.theme === t.id ? "active" : ""}`}
                onClick={() => set("theme", t.id)}
              >
                <div className="chips">
                  {t.chips.map((c, i) => (
                    <span key={i} className="chip" style={{ background: c }} />
                  ))}
                </div>
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="group">
          <span className="t-lbl">Accent hue ({tweaks.accentHue}°)</span>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={tweaks.accentHue}
            onChange={(e) => set("accentHue", Number(e.target.value))}
          />
        </div>

        <div className="toggle-row">
          <span>Handwritten flourishes</span>
          <button
            className={`switch ${tweaks.showHandDrawn ? "on" : ""}`}
            onClick={() => set("showHandDrawn", !tweaks.showHandDrawn)}
            aria-label="Toggle handwritten flourishes"
          />
        </div>
      </div>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
window.THEMES = THEMES;
