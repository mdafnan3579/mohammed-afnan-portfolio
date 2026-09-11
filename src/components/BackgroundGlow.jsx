import "../styles/BackgroundGlow.css";

// Purely decorative, slow-drifting glow blobs layered behind the starfield
// background. Fixed + negative z-index so it always sits behind page
// content regardless of each section's own stacking context.
const BackgroundGlow = () => (
  <div className="bg-glow-layer" aria-hidden="true">
    <span className="bg-glow-blob bg-glow-blob-1" />
    <span className="bg-glow-blob bg-glow-blob-2" />
    <span className="bg-glow-blob bg-glow-blob-3" />
  </div>
);

export default BackgroundGlow;
