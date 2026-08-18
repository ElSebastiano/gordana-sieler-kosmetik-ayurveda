# Hero-Bild – Generierungs-Prompt (manuell, z. B. Google Flow / Nano Banana)

Quelle der Vorgaben: `Research/Hero-Referenz.md`. Bis zur manuellen Generierung und Freigabe
verwendet die Website einen neutralen, lokal erzeugten Platzhalter (warmer Gradient +
organische Formen in Markenfarben), **kein** fremdes Foto.

## Prompt (Deutsch)

Hyperrealistisches Editorial-/Commercial-Foto, Querformat 16:9, Vollformatkamera-Anmutung,
85 mm, geringe Tiefenschärfe. Ruhige Kosmetikbehandlung in einem hochwertigen, warmen
Kosmetikstudio. Komposition: linke 40 % des Bildes bewusst ruhig und leer gehalten
(Freiraum für Headline/Text), rechte 60 % Hauptmotiv. Eine Kundin liegt entspannt auf einer
Behandlungsliege, nur ein natürlicher Teilausschnitt des Gesichts sichtbar. Eine professionelle
Hand trägt mit einem weichen Pinsel oder den Fingerspitzen ein Pflegeprodukt auf. Im
Vordergrund dezent unscharf ein kleines Schälchen mit natürlichem Öl oder Creme. Studiohintergrund
weich unscharf, Naturmaterialien, Leinenstoffe, warmes seitliches Fensterlicht, realistische
Hauttöne und feine Hautstruktur, glaubwürdige Hände (korrekte Anzahl Finger), natürliche
Schatten. Keine CGI-/Render-Wirkung.

**Farbwelt:** warmes Ivory (#F7F2E9), Sage (#7C8977), natürliche Hauttöne, Leinenbeige, dezente
Terracotta-Akzente (#B8785C).

**Unbedingt vermeiden:** Schrift oder Logo im Bild, Buttons im Bild, künstliche Hochglanzhaut,
übermäßiges Gold, Kerzenmeer/Klischee-Spa-Deko, fernöstliche Klischee-Dekoration, schwebende
Objekte, Illustration, 3D-Render-Look, deformierte Hände oder zusätzliche Finger.

**Auflösung/Format:** mindestens 3200×1800 px, Export als AVIF/WebP + JPG-Fallback,
zusätzlich mobile Crops (z. B. 4:5 oder 1:1) für kleine Viewports.

## Nach der Generierung

1. Bild in `assets/img/hero/` ablegen (Originalname z. B. `hero-behandlung-original.jpg`).
2. Mit FFmpeg/Bildwerkzeugen in AVIF + WebP + responsive Größen konvertieren.
3. In `index.html` den Platzhalter-Hero (`.hero__visual--placeholder`) durch `<picture>`
   mit `srcset` ersetzen; Interaktionslogik in `js/main.js` (Funktion `initHeroParallax`)
   bleibt unverändert nutzbar, sofern die Ebenen-Container-Struktur erhalten bleibt.
4. Bildrechte/Freigabe der abgebildeten Person vor Livegang bestätigen
   (siehe `Research/Kontakt.md`).
