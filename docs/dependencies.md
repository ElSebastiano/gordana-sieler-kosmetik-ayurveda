# Abhängigkeiten

Statisches Projekt (HTML/CSS/Vanilla JS), kein Build-Prozess, kein npm.

## Externe Ressourcen

- **Google Fonts** – `Fraunces` (Headlines, Serif) und `Work Sans` (Fließtext/UI, Sans-Serif),
  eingebunden über `<link>` in `index.html`, `impressum.html`, `datenschutz.html`.

## Bewusst nicht verwendet

- Kein Motion/GSAP – die Hero-Interaktionen (Initialzoom, Pointer-Parallax, Scroll-Fokus,
  Card-Reveal) sind vollständig mit CSS-Transitions + Vanilla JS (`js/main.js`,
  `requestAnimationFrame`, `IntersectionObserver`) umgesetzt. Das reicht für die in
  `Research/Hero-Referenz.md` beschriebene Interaktionstiefe aus.
- Kein Three.js – 2.5D-Ebenenmodell reicht laut Recherche für dieses Projekt aus.
- Keine Icon-Bibliothek eingebunden – alle Icons sind handgeschriebene, minimale Inline-SVGs
  in `index.html` (kein externer Abruf nötig).

## Assets

Siehe `docs/assets-sources.md`.
