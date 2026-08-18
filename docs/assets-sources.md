# Asset-Quellen

## Icons

Alle Icons sind handgeschriebene, minimale Inline-SVG-Linienicons (eigene Erstellung für
dieses Projekt, keine externe Icon-Bibliothek eingebunden). Kein Pikaicons-Download nötig,
da der Bedarf gering und der Stil bewusst reduziert/eigenständig gehalten ist.

## Hero-/Behandlungsbilder

Kein bestehendes Foto der Kundenwebsite oder Dritter wurde verwendet oder kopiert
(siehe `ReferenceAssets/README.md`). Aktuell im Einsatz: frei lizenzierte Stock-Fotografie
von Unsplash (Unsplash License — kostenlos, kommerzielle Nutzung erlaubt, keine
Namensnennung verpflichtend). Es handelt sich **nicht** um echte Fotos von Gordana Sieler,
ihrem Studio oder ihren Kundinnen/Kunden — vor Livegang klären, ob echte, freigegebene
Studiobilder diese Platzhalter ersetzen sollen (siehe auch
`docs/hero-image-generation-prompt.md` für ein alternatives, generiertes Bildkonzept).

| Datei | Motiv | Fotograf:in | Quelle |
|---|---|---|---|
| `hero-kosmetik-final` | Gesichtsmaske, Auftragen mit Pinsel | Rosa Rafael | unsplash.com/photos/Pe9IXUuC6QU |
| `kosmetik-treatment-final` | Gesichtsreinigung, Behandlung | kimia kazemi | unsplash.com/photos/u93nTfWqR9w |
| `ayurveda-final` | Rückenmassage, Hände | Toa Heftiba | unsplash.com/photos/hBLf2nvp-Yc |
| `haende-fuesse-final` | Gepflegte Hand, Maniküre | Ellie Eshaghi | unsplash.com/photos/DtoWpHt2_d8 |

Alle vier Bilder wurden mit ffmpeg auf 1500 px Breite skaliert und als WebP (Primärformat)
plus JPG (Fallback) exportiert; Originaldateien liegen lokal in `assets/img/original/`
(nicht Teil des Git-Repos, siehe `.gitignore`).

## Schriften

Google Fonts: `Fraunces`, `Work Sans` (Open-Font-Lizenz, Google Fonts-Standardnutzung).
