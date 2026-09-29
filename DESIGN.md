# North Star Flooring & Construction — Design Language

Refined from the client's existing brand (gold compass-star logo, white serif caps,
navy on their current site). **Refine, don't rebrand:** keep the logo as-is.

## Concept — "True North"
A flooring contractor sells precision and finish. The page reads like a well-lit
showroom at dusk: deep midnight-navy stage, champagne-gold used sparingly the way
their logo uses it, and warm oak coming from the real project photos. Quiet
confidence, refined over loud. Every scroll stop answers a trust question
(who are you, what do you do, show me, what do others say, how do I reach you).

## Color tokens
| Token | Hex | Role |
|---|---|---|
| `--night` | `#0b1422` | Page background (midnight navy, a deeper cousin of their `#01356b`) |
| `--night-2` | `#08101b` | Footer / deepest band |
| `--surface` | `#111d2e` | Alternating section band |
| `--surface-2` | `#172538` | Cards |
| `--line` | `rgba(216,178,110,.18)` | Hairline rules (gold-tinted) |
| `--ivory` | `#f4efe6` | Headings / primary text |
| `--mist` | `#b9c1cc` | Body text on navy (≥4.5:1) |
| `--muted` | `#7f8a99` | Captions, labels |
| `--gold` | `#d6b06f` | **Brand accent** — from the logo star (`#d2ab6a`–`#dba964`) |
| `--gold-bright` | `#ecd09a` | Hover, focus rings |
| `--gold-deep` | `#a9823f` | Gradient end, pressed |
| `--gold-grad` | `linear-gradient(135deg, var(--gold-bright), var(--gold) 50%, var(--gold-deep))` | Primary buttons, the CTA band |
| `--oak` | `#c89a64` | Rare warm tint (e.g. selection color) — never a second accent |

Buttons: gold gradient fill with `--night` text, `border-radius: 2px` (crisp, like a
plank edge). Secondary buttons: 1px gold outline, ivory text.

## Typography
- **Display:** Cormorant Garamond 500/600 — echoes the logo's classical serif caps.
  `h1` clamp(2.6rem, 6vw, 5rem), `h2` clamp(2rem, 4vw, 3.2rem), letter-spacing -.01em.
- **Small caps labels / eyebrows / nav:** Marcellus SC, letter-spacing .18em, 0.78rem.
- **Body:** Hanken Grotesk 400/500/600, 1.02rem / 1.7.

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Hanken+Grotesk:wght@400;500;600&family=Marcellus+SC&display=swap" rel="stylesheet">
```

## Structural device — the compass rule
One component used as the heading treatment for every section (`.compass`):
a hairline gold rule that runs out to either side of a small four-point star
(inline SVG, same geometry as the logo star), with the eyebrow label beneath it in
Marcellus SC. It also appears as the divider between hero and body and as bullet
markers in the service list. If a heading doesn't use it, it's off-brand.

```html
<div class="compass" aria-hidden="true"><span></span><svg viewBox="0 0 24 24"><path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z"/></svg><span></span></div>
```

## Photography
Real project photos are small (355–740px). Never full-bleed them: frame them at
≤ their native size, with a 1px gold hairline inset frame and a slight radius (2px).
Hero uses a framed photo (curved oak staircase) beside the headline, not behind it.

## Motion
Scroll reveal (fade + 24px lift, .6s), star in `.compass` rotates 45° on section
reveal once. Respect `prefers-reduced-motion`.
